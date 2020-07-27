<?php

namespace App\Http\Requests;

use http\Env\Request;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'country' => 'required|string',
            'city' => 'required|string',
            'postcode' => 'required|string',
            'address' => 'required|string',
            'notes' => 'nullable|string',
            'payment' => ['required', 'string', Rule::in('paypal', 'bank', 'deliver')],
            'cartItems' => 'required'
        ];

        //if user not logged in
        if(!auth('api')->user()){
            $rules = array_merge($rules, [
               'fullName' => 'required|string',
               'email' => 'required|email',
               'create' => 'nullable|boolean',
               'password' => 'required_if:create,true|confirmed'
            ]);
        }

        return $rules;
    }
}
