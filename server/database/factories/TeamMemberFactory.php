<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\TeamMember;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TeamMember>
 */
class TeamMemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = TeamMember::class;

    public function definition(): array
    {
         return [
            'name'      => $this->faker->name(),
            'role'      => $this->faker->jobTitle(),
            'photo_url' => $this->faker->optional()->imageUrl(300, 300, 'people'),
            'bio'       => $this->faker->optional()->paragraph(),
        ];
    }
}
