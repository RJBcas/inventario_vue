<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $fillable = [
    'name'];
    //refiere a la tabla que esta enlazada 
    public function products()
    {
    	return $this->hasMany(Product::class);
    }
}
