<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('theme_id')->constrained()->onDelete('cascade');
            $table->foreignId('music_id')->constrained()->onDelete('cascade')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('slug');
            $table->string('event_title');
            $table->string('host_one_name');
            $table->string('host_two_name');
            $table->string('host_one_nickname');
            $table->string('host_two_nickname');
            $table->string('host_one_additional_info')->nullable();
            $table->string('host_two_additional_info')->nullable();
            $table->string('host_one_social_media')->nullable();
            $table->string('host_two_social_media')->nullable();
            $table->timestamp('event_date');
            $table->string('event_type');
            $table->string('location');
            $table->text('message')->nullable();
            $table->text('greetings')->nullable();
            $table->boolean('is_active')->default(false);
            $table->timestamp('activated_at')->nullable();
            $table->timestamp('expired_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invitations');
    }
};
