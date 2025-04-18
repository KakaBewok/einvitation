<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Story>
 */
class StoryFactory extends Factory
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
            'title' => $this->faker->sentence(3),
            'content' => $this->faker->text(100),
            'image_url' => $this->faker->imageUrl(),
            'story_date' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'order_number' => $this->faker->numberBetween(1, 5),
        ];
    }
}
