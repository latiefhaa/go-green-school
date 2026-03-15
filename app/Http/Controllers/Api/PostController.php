<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Post::published()->latest();

        if ($request->has('category')) {
            $query->where('category', $request->category);
        }

        if ($request->has('subject')) {
            $query->whereJsonContains('subjects', $request->subject);
        }

        $posts = $query->paginate(12);

        return response()->json([
            'success' => true,
            'data' => $posts,
        ]);
    }

    public function show(int $id): JsonResponse
    {
        $post = Post::published()->findOrFail($id);

        return response()->json([
            'success' => true,
            'data' => $post,
        ]);
    }
}
