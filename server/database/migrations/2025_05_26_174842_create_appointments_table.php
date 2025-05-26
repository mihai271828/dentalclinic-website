<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('appointments', function (Blueprint $table) {
        $table->id();
        $table->foreignId('patient_id')->constrained()->cascadeOnDelete();
        $table->foreignId('service_id')->constrained()->restrictOnDelete();
        $table->dateTime('appointment_time');
        $table->text('notes')->nullable();
        $table->enum('status', ['scheduled','completed','cancelled'])
              ->default('scheduled');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};
