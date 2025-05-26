<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory; 

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'dob',
    ];

    // A patient can have many appointments:
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
