<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Program;
use Illuminate\Http\JsonResponse;

class ProgramController extends Controller
{
    public function index(): JsonResponse
    {
        $programs = Program::active()->get();

        return response()->json([
            'success' => true,
            'data' => $programs,
        ]);
    }

    public function show(string $slug): JsonResponse
    {
        $program = Program::where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $program,
        ]);
    }
}
