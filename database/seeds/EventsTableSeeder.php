<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;

class EventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert([
            'id' => 1,
            'title' => 'A 3 day event',
            'description' => 'Texto A 3 day event',
            'start' => now(),
            'end' => now()->addDay(3),
            'color' => 'red',
            'all_day' => true,
        ]);

        DB::table('events')->insert([
            'id' => 2,
            'title' => 'A long event that spans 2 months',
            'description' => 'Texto A long event that spans 2 months',
            'start' => now()->addDay(10),
            'end' => now()->addMonth(2),
            'color' => 'blue',
            'all_day' => true,
        ]);

        DB::table('events')->insert([
            'id' => 3,
            'title' => 'A draggable and resizable event',
            'description' => 'Texto A draggable and resizable event',
            'start' => now(),
            'end' => now()->addHour(2),
            'color' => 'yellow',
            'all_day' => false,
        ]);


        DB::table('event_user')->insert([
            'event_id' => 1,
            'user_id' => 3,
            'invitation' => 'own'
        ]);

        DB::table('event_user')->insert([
            'event_id' => 2,
            'user_id' => 3,
            'invitation' => 'own'
        ]);

        DB::table('event_user')->insert([
            'event_id' => 3,
            'user_id' => 3,
            'invitation' => 'own'
        ]);
    }
}
