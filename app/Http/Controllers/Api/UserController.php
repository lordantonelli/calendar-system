<?php

namespace App\Http\Controllers\Api;

use App\Models\Event;
use App\User;
use Exception;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\JWTAuth;

class UserController extends Controller
{
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (! $user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }

        $users = User::where('id', '!=', $user->id)->get();

        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (! $user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }

        $value = $request->all();
        //return response()->json(compact('value'));
        $value['start'] = "{$value['start_date']} {$value['start_time']}:00";
        $value['end'] = "{$value['end_date']} {$value['end_time']}:00";
        try{
            $event = Event::create($value);
            $event->users()->sync([$user->id => ['own' => true]]);
            return response()->json(compact('event'));
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Event::find($id);

        try{
            $item->delete();
            return response()->json(['status' => 'success']);
        }catch (Exception $e){
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 400);
        }
    }
}
