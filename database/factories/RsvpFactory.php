<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rsvp>
 */
class RsvpFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'invitation_id' => \App\Models\Invitation::factory(),
            'name' => $this->faker->name(),
            'message' => $this->faker->sentence(),
            'attendance_status' => $this->faker->boolean(),
            'total_guest' => (string) $this->faker->numberBetween(1, 5),
        ];
    }
}
