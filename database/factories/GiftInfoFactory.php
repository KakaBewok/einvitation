<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GiftInfo>
 */
class GiftInfoFactory extends Factory
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
            'provider_name' => $this->faker->randomElement(['Bank BCA', 'Bank Mandiri', 'Bank BRI', 'Bank BNI']),
            'account_number' => $this->faker->bankAccountNumber(),
            'account_holder' => $this->faker->name(),
            'gift_delivery_address' => $this->faker->address(),
        ];
    }
}
