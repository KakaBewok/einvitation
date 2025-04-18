<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Guest>
 */
class GuestFactory extends Factory
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
            'phone_number' => $this->faker->phoneNumber(),
            'slug' => $this->faker->unique()->slug(),
            'is_attending' => $this->faker->boolean(),
            'total_guest' => $this->faker->numberBetween(1, 5),
            'message' => $this->faker->sentence(),
        ];
    }
}
