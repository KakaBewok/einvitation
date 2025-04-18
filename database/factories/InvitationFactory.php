<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Invitation>
 */
class InvitationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $hostOneNickname = $this->faker->unique()->firstName();
        $hostTwoNickname = $this->faker->unique()->firstName();

        return [
            'user_id' => \App\Models\User::factory(),
            'theme_id' => \App\Models\Theme::factory(),
            'slug' => strtolower(Str::slug("{$hostOneNickname}-{$hostTwoNickname}")),
            'event_title' => $this->faker->sentence(3),
            'host_one_name' => $this->faker->name(),
            'host_two_name' => $this->faker->name(),
            'host_one_nickname' => $hostOneNickname,
            'host_two_nickname' => $hostTwoNickname,
            'event_date' => $this->faker->dateTimeBetween('+1 days', '+1 year'),
            'event_type' => $this->faker->randomElement(['wedding', 'engagement']),
            'location' => $this->faker->address(),
            'message' => $this->faker->paragraph(),
        ];
    }
}
