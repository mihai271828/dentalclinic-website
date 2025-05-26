<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; 

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id',
        'service_id',
        'appointment_time',
        'notes',
        'status',
    ];

    // Inverse of Patient → Appointment
    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    // Inverse of Service → Appointment
    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}
