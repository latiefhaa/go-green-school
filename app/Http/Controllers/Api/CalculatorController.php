<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Calculation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    /**
     * Harga per kg untuk setiap jenis sampah (Rupiah)
     */
    private array $prices = [
        'plastik' => 5000,
        'kertas' => 3000,
        'logam' => 8000,
        'kaca' => 2000,
        'organik' => 1000,
        'elektronik' => 15000,
    ];

    /**
     * Faktor emisi CO2 per kg (dalam kg CO2)
     */
    private array $emissionFactors = [
        'plastik' => 2.5,
        'kertas' => 1.8,
        'logam' => 4.0,
        'kaca' => 0.8,
        'organik' => 0.5,
        'elektronik' => 6.0,
    ];

    public function calculate(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'items' => 'required|array|min:1',
            'items.*.type' => 'required|string|in:plastik,kertas,logam,kaca,organik,elektronik',
            'items.*.weight' => 'required|numeric|min:0.1|max:10000',
            'student_name' => 'nullable|string|max:255',
        ]);

        $totalValue = 0;
        $totalCO2 = 0;
        $breakdown = [];

        foreach ($validated['items'] as $item) {
            $type = $item['type'];
            $weight = (float) $item['weight'];
            $price = $this->prices[$type] ?? 0;
            $emission = $this->emissionFactors[$type] ?? 0;

            $value = $weight * $price;
            $co2 = $weight * $emission;

            $totalValue += $value;
            $totalCO2 += $co2;

            $breakdown[] = [
                'type' => $type,
                'weight' => $weight,
                'price_per_kg' => $price,
                'value' => $value,
                'co2_reduction' => round($co2, 4),
            ];
        }

        // Simpan data kalkulasi
        $calculation = Calculation::create([
            'student_name' => $validated['student_name'] ?? null,
            'items' => $breakdown,
            'total_value' => $totalValue,
            'co2_reduction' => $totalCO2,
        ]);

        return response()->json([
            'success' => true,
            'data' => [
                'id' => $calculation->id,
                'breakdown' => $breakdown,
                'total_value' => $totalValue,
                'total_value_formatted' => 'Rp ' . number_format($totalValue, 0, ',', '.'),
                'co2_reduction' => round($totalCO2, 4),
                'co2_reduction_formatted' => round($totalCO2, 2) . ' kg CO₂',
                'tips' => $this->getTips($breakdown),
            ],
        ]);
    }

    public function getPrices(): JsonResponse
    {
        $pricesData = [];
        foreach ($this->prices as $type => $price) {
            $pricesData[] = [
                'type' => $type,
                'price_per_kg' => $price,
                'price_formatted' => 'Rp ' . number_format($price, 0, ',', '.'),
                'emission_factor' => $this->emissionFactors[$type],
            ];
        }

        return response()->json([
            'success' => true,
            'data' => $pricesData,
        ]);
    }

    public function history(): JsonResponse
    {
        $calculations = Calculation::latest()->take(20)->get();

        return response()->json([
            'success' => true,
            'data' => $calculations,
        ]);
    }

    private function getTips(array $breakdown): array
    {
        $tips = [];

        foreach ($breakdown as $item) {
            switch ($item['type']) {
                case 'plastik':
                    $tips[] = [
                        'id' => 'Kurangi penggunaan plastik sekali pakai. Gunakan botol dan tas belanja yang bisa dipakai ulang!',
                        'en' => 'Reduce single-use plastic. Use reusable bottles and shopping bags!',
                    ];
                    break;
                case 'kertas':
                    $tips[] = [
                        'id' => 'Gunakan kertas secara bolak-balik dan manfaatkan teknologi digital untuk mengurangi penggunaan kertas.',
                        'en' => 'Use paper on both sides and leverage digital technology to reduce paper usage.',
                    ];
                    break;
                case 'organik':
                    $tips[] = [
                        'id' => 'Sampah organik bisa diolah menjadi kompos untuk kebun sekolah kita!',
                        'en' => 'Organic waste can be composted for our school garden!',
                    ];
                    break;
                case 'logam':
                    $tips[] = [
                        'id' => 'Logam bisa didaur ulang berkali-kali tanpa kehilangan kualitas. Pastikan untuk memisahkannya!',
                        'en' => 'Metals can be recycled repeatedly without losing quality. Make sure to separate them!',
                    ];
                    break;
                case 'kaca':
                    $tips[] = [
                        'id' => 'Kaca 100% dapat didaur ulang. Pisahkan kaca berdasarkan warna untuk daur ulang yang lebih efisien.',
                        'en' => 'Glass is 100% recyclable. Separate glass by color for more efficient recycling.',
                    ];
                    break;
                case 'elektronik':
                    $tips[] = [
                        'id' => 'Sampah elektronik mengandung bahan berbahaya. Selalu buang di tempat pengumpulan khusus e-waste.',
                        'en' => 'Electronic waste contains hazardous materials. Always dispose of it at designated e-waste collection points.',
                    ];
                    break;
            }
        }

        return array_unique($tips, SORT_REGULAR);
    }
}
