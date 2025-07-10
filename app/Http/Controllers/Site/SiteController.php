<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller; 

use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function programs()
    {
            return Inertia::render('website/site/ProgramPage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function about()
    {
        return Inertia::render('website/site/AboutPage');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function resource()
    {
        return Inertia::render('website/site/resourcePage');
    }

    /**
     * Display the specified resource.
     */
    public function contact()
    {
        return Inertia::render('website/site/ContactPage');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
