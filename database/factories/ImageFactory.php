<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
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
            'url' => $this->faker->imageUrl(),
            'caption' => $this->faker->sentence(),
            'type' => $this->faker->randomElement(['gallery', 'cover']),
        ];
    }
}
