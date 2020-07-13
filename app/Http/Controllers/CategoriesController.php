<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoriesResource;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function getAll(Request $request){
        $categories = Category::all();

        return response()->json(new CategoriesResource($categories));
    }
}
