<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rundown>
 */
class RundownFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $start = $this->faker->time('H:i:s');
        $end = date('H:i:s', strtotime($start . ' +1 hour'));

        return [
            'location' => $this->faker->sentence(2),
            'location_url' => $this->faker->url(),
            'date' => $this->faker->dateTimeBetween('now', '+1 week'),
            'time_zone' => 'WIB',
            'invitation_id' => \App\Models\Invitation::factory(),
            'title' => $this->faker->sentence(2),
            'start_time' => $start,
            'end_time' => $end,
            'description' => $this->faker->paragraph(),
            'order_number' => $this->faker->numberBetween(1, 10),
        ];
    }
}
