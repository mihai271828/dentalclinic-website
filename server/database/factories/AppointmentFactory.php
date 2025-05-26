<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Appointment;
use App\Models\Patient;
use App\Models\Service;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Appointment::class;

    public function definition(): array
    {
        return [
            'patient_id'       => Patient::factory(),      // creates a patient if none exists
            'service_id'       => Service::factory(),      // creates a service if none exists
            'appointment_time' => $this->faker->dateTimeBetween('now', '+1 month'),
            'notes'            => $this->faker->optional()->sentence(),
            'status'           => $this->faker->randomElement(['scheduled','completed','cancelled']),
        ];
    }
}
