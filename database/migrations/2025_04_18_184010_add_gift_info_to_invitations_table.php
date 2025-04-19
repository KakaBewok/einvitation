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
        Schema::table('invitations', function (Blueprint $table) {
            $table->string('bank_name_one')->nullable();
            $table->string('account_number_one')->nullable();
            $table->string('account_holder_one')->nullable();

            $table->string('bank_name_two')->nullable();
            $table->string('account_number_two')->nullable();
            $table->string('account_holder_two')->nullable();

            $table->text('gift_delivery_address')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropColumn([
                'bank_name_one',
                'account_number_one',
                'account_holder_one',
                'bank_name_two',
                'account_number_two',
                'account_holder_two',
                'gift_delivery_address'
            ]);
        });
    }
};
