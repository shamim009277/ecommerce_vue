<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function categoryList(){
        return view('admin.admin_master');
    }

    public function addForm(){
        return view('admin.admin_master');
    }

    public function categoryStore(Request $request){
        $request->validate([
            'name' => 'required|string|max:100',
            'ordering' => 'required|integer|min:0',
        ]);
        $data = [];
        $data['name'] = $request->name;
        $data['ordering'] = $request->ordering;
        $data['parent_id'] = $request->parent_id;
        $data['slug'] = str_replace(" ","-",$request->name).'-'.mt_rand(10,100);
        $data['is_active'] = true;

        $category = Category::create($data);
        return response()->json([
             'category' => $category,
        ],200);
    }
    public function caregoryListShow(){
        $category = Category::latest()->get();
        return response()->json([
             'category' => $category,
        ],200);
    }
}
