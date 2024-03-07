<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\NewsModel>
 */
class NewsModelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => Fake()->sentence(),
            'description' => Fake()->paragraph(2, true),
            'category' => Fake()->text(20),
            'author' => Fake()->email(),
        ];
    }
}
