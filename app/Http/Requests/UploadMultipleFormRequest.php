<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadMultipleFormRequest extends FormRequest
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
//            'event' => 'required|in:trampoline,double mini,tumbling',
        ];

//        $fileCount = count($this->input('videos')) - 1;
//        foreach(range(0, $fileCount) as $index) {
//            $rules['image.' . $index] = 'image|max:4000';
//        }

        return $rules;
    }
}
