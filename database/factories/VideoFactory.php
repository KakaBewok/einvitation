<?php

namespace Database\Factories;

use App\Models\Invitation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
         return [
            'invitation_id' => Invitation::factory(),
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'path' => 'videos/' . $this->faker->uuid() . '.mp4',
            'thumbnail' => 'thumbnails/' . $this->faker->uuid() . '.jpg',
            'order_number' => $this->faker->numberBetween(1, 10),
        ];
    }
}
