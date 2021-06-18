<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;

class BrandController extends Controller
{
    public function brandList(){
        return view('admin.admin_master');
    }

    public function addForm(){
        return view('admin.admin_master');
    }

    public function brandStore(Request $request){
        $request->validate([
            'name' => 'required|string|max:100',
            'ordering' => 'required|integer|min:0',
        ]);
        $data = [];
        $data['name'] = $request->name;
        $data['ordering'] = $request->ordering;
        $data['slug'] = str_replace(" ","-",$request->name).'-'.mt_rand(10,100);
        $data['is_active'] = true;
        $brand = Brand::create($data);
        return response()->json([
            'brand'=> $brand,
        ],200);
    }
    public function brandListShow(){
        $brand = Brand::latest()->get();
        return response()->json([
            'brand'=> $brand,
        ],200);
    }
}
