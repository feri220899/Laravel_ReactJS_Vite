<?php

namespace App\Http\Controllers\Bpjs;

use Illuminate\Http\Request;
use App\Services\Bpjs\Referensi;
use App\Http\Controllers\Controller;

class ServiceBPJS extends Controller
{
    protected $Referensi;
    public function __construct() {
        $this->Referensi = new Referensi;
    }
    // 1 ===============================================================
    function getDiagniosa($kd_diagnosa) {
        try {
            $data = json_decode($this->Referensi->getDiagnosa($kd_diagnosa));
                return response()->json($data);
        } catch (\Throwable $th) {
            $data = [];
        }
    }
}
