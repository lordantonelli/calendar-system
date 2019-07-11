/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpRequest} from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {
  NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbAuthJWTInterceptor,
  NbAuthJWTToken,
  NbAuthModule,
  NbPasswordAuthStrategy
} from "@nebular/auth";
import {AuthGuard} from "./auth-guard.service";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          baseEndpoint: environment.api_url,
          login: {
            endpoint: '/auth/login',
            method: 'post',
          },
          register: {
            endpoint: '/auth/register',
            method: 'post',
          },
          logout: {
            endpoint: '/auth/logout',
            method: 'get',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },
          refreshToken: {
            endpoint: '/auth/refresh-token',
            method: 'post',
          },
          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells where to look for the token
          }
        }),
      ],
      forms: {},
    }),
  ],
  providers: [
    AuthGuard,
    { provide: NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
      useValue: function (req: HttpRequest<any>) {
        return req.url === `${environment.api_url}/auth/refresh-token`;
      },
    },
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthJWTInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
