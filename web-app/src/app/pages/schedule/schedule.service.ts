import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private readonly API =`${environment.api_url}/events`;

  constructor(public http: HttpClient) { }

  static formatTime(date: Date): string{
    let h = date.getHours();
    let m = date.getMinutes();
    let time = "";
    time += (h.toString().length < 2 ) ? `0${h}` : h;
    time += ":";
    time += (m.toString().length < 2 ) ? `0${m}` : m;

    return time;
  }

  static formatDate(date: Date): string{
    let month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  deleteEvent(id) {
    return this.http.delete<any>(`${this.API}/${id}`).pipe(take(1));
  }

  createEvent(event){
    return this.http.post<any>(this.API, event).pipe(take(1));
  }

  updateEvent(event){
    return this.http.put<any>(`${this.API}/${event.id}`, event).pipe(take(1));
  }

  answerEvent(answer, id){
      return this.http.post<any>(`${this.API}/answer/${id}`, {answer}).pipe(take(1));
  }

  getParticipants(id){
    return this.http.get<any>(`${this.API}/participants/${id}`).pipe(take(1));
  }

  getUsers(){
    return this.http.get<any>(`${environment.api_url}/users`).pipe(take(1));
  }

  removeParticipantEvent(event, participant) {
    return this.http.delete<any>(`${this.API}/${event}/participant/${participant}`).pipe(take(1));
  }

  addParticipantEvent(event){
    return this.http.post<any>(`${this.API}/${event.id}/participants`, event).pipe(take(1));
  }
}
