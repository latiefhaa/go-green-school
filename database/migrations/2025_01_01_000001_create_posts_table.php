<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('title_en')->nullable();
            $table->text('content');
            $table->text('content_en')->nullable();
            $table->string('category'); // math-rpl, bind-digimar, bing-kik, etc.
            $table->string('image')->nullable();
            $table->string('author')->nullable();
            $table->json('subjects')->nullable(); // ['Math', 'RPL']
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
