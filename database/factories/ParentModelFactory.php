<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ParentModel>
 */
class ParentModelFactory extends Factory
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
            'host_role' => $this->faker->randomElement(['host one', 'host two']),
            'relation' => $this->faker->randomElement(['father', 'mother']),
            'image_url' => $this->faker->imageUrl(),
        ];
    }
}
