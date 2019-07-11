<?php

namespace App\Http\Controllers\Api;

use App\Models\Event;
use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\JWTAuth;

class EventController extends Controller
{
    private $jwtAuth;
    private $user;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;

        if (! $this->user = auth()->user()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }
    }

    public function index(Request $request)
    {

        $startTime = $request->get('start');
        $endTime = $request->get('end');

        $events = $this->user->events()->where(function ($query) use ($startTime, $endTime) {
                $query->where(function ($query) use ($startTime, $endTime) {
                    $query->where('start', '>=', $startTime)
                        ->where('end', '<', $startTime);
                })
                    ->orWhere(function ($query) use ($startTime, $endTime) {
                        $query->where('start', '<', $endTime)
                            ->where('end', '>=', $endTime);
                    })
                ->orWhereBetween('start', array($startTime, $endTime))
                    ->orWhereBetween('end', array($startTime, $endTime));
            })
            ->where('user_id', $this->user->id)
            ->get();

        return response()->json(compact('events', $request->get('start')));
    }

    public function store(Request $request)
    {
        $value = $request->all();
        $value['start_time'] = $value['start_time'] ?? "00:00";
        $value['end_time'] = $value['end_time'] ?? "00:00";
        $value['start'] = "{$value['start_date']} {$value['start_time']}:00";
        $value['end'] = "{$value['end_date']} {$value['end_time']}:00";
        try{
            $overlap = $this->checkOverlap($value['start'], $value['end']);

            $event = Event::create($value);
            $event->users()->sync([$this->user->id => ['invitation' => 'own']]);
            $event->users()->attach($value['participants']);
            return response()->json(compact('event', 'overlap'));
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $value = $request->all();
        $value['start_time'] = $value['start_time'] ?? "00:00";
        $value['end_time'] = $value['end_time'] ?? "00:00";
        $value['start'] = "{$value['start_date']} {$value['start_time']}:00";
        $value['end'] = "{$value['end_date']} {$value['end_time']}:00";
        try{
            $overlap = $this->checkOverlap($value['start'], $value['end'], $id);

            $event = Event::findOrFail($id);
            $event->update($value);
            return response()->json(compact('event', 'overlap'));
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try{
            $item = Event::findOrFail($id);
            if($item->users()->where('user_id', $this->user->id)->get()[0]->pivot->invitation == 'own')
                $item->delete();
            else
                $item->users()->detach($this->user->id);
            return response()->json(['status' => 'success']);
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }


    public function answer(Request $request, $id)
    {
        try{
            $event = Event::findOrFail($id);
            $overlap = $this->checkOverlap($event->start, $event->end, $id);

            $event->users()->where('user_id', $this->user->id)->update(['invitation' => $request->get('answer')]);
            return response()->json(compact('event', 'overlap'));
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    public function participants($id){
        try{
            $participants = Event::findOrFail($id)->users;

            return response()->json(compact('participants'));
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    public function removeParticipant($id, $participant_id)
    {
        try{
            $item = Event::findOrFail($id);
            $item->users()->detach($participant_id);
            return response()->json(['status' => 'success']);
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    public function addParticipant(Request $request, $id)
    {
        try{
            $item = Event::findOrFail($id);
            $item->users()->attach($request->get('participants'));
            return response()->json(['status' => 'success']);
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    protected function checkOverlap($startTime, $endTime, $exclude_id = null){

        $eventsCount = $this->user->events()->where(function ($query) use ($startTime, $endTime) {
            $query->where(function ($query) use ($startTime, $endTime) {
                $query->where('start', '>=', $startTime)
                    ->where('end', '<', $startTime);
            })
                ->orWhere(function ($query) use ($startTime, $endTime) {
                    $query->where('start', '<', $endTime)
                        ->where('end', '>=', $endTime);
                });
        });

        if($exclude_id){
            $eventsCount = $eventsCount->where('event_id', '!=', $exclude_id);
        }

        $eventsCount = $eventsCount->count();

        return ($eventsCount > 0);

    }
}
