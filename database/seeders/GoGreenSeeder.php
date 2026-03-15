<?php

namespace Database\Seeders;

use App\Models\Program;
use App\Models\Post;
use Illuminate\Database\Seeder;

class GoGreenSeeder extends Seeder
{
    public function run(): void
    {
        $programs = [
            ["title"=>"Bank Sampah","title_en"=>"Waste Bank","description"=>"Program pengelolaan sampah terpadu.","description_en"=>"An integrated waste management program.","icon"=>"recycle","slug"=>"bank-sampah","sort_order"=>1],
            ["title"=>"Kebun Vertikal","title_en"=>"Vertical Garden","description"=>"Teknik pertanian vertikal di sekolah.","description_en"=>"Vertical farming techniques at school.","icon"=>"leaf","slug"=>"kebun-vertikal","sort_order"=>2],
            ["title"=>"Hemat Energi","title_en"=>"Energy Saving","description"=>"Kampanye hemat energi sekolah.","description_en"=>"School energy saving campaign.","icon"=>"zap","slug"=>"hemat-energi","sort_order"=>3],
            ["title"=>"Edukasi Hijau","title_en"=>"Green Education","description"=>"Program edukasi lingkungan lintas mata pelajaran.","description_en"=>"Cross-subject environmental education program.","icon"=>"book-open","slug"=>"edukasi-hijau","sort_order"=>4],
        ];
        foreach ($programs as $p) { Program::firstOrCreate(["slug"=>$p["slug"]], $p); }

        $posts = [
            ["title"=>"Simulator Bank Sampah: Belajar Matematika sambil Menjaga Lingkungan","title_en"=>"Waste Bank Simulator: Learning Math while Protecting the Environment","content"=>"Proyek kolaborasi Matematika dan RPL.","content_en"=>"Collaborative project between Math and Software Engineering.","category"=>"math-rpl","author"=>"Tim Siswa RPL & Matematika","subjects"=>json_encode(["Matematika","RPL"])],
            ["title"=>"Kampanye Digital Go Green: Strategi Marketing untuk Lingkungan","title_en"=>"Go Green Digital Campaign: Marketing Strategy for the Environment","content"=>"Siswa Digital Marketing membuat kampanye media sosial untuk bank sampah.","content_en"=>"Digital Marketing students create social media campaigns for the waste bank.","category"=>"bind-digimar","author"=>"Tim Siswa Digimar & B. Indonesia","subjects"=>json_encode(["B. Indonesia","Digital Marketing"])],
            ["title"=>"Green Innovation Showcase: Youth Entrepreneurship for Sustainability","title_en"=>"Green Innovation Showcase: Youth Entrepreneurship for Sustainability","content"=>"Pameran inovasi hijau kewirausahaan siswa.","content_en"=>"Green innovation showcase featuring student entrepreneurship.","category"=>"bing-kik","author"=>"Tim Siswa KIK & B. Inggris","subjects"=>json_encode(["B. Inggris","KIK"])],
            ["title"=>"Analisis Data Pengurangan Sampah Sekolah 2024","title_en"=>"School Waste Reduction Data Analysis 2024","content"=>"Analisis tren pengurangan sampah oleh siswa Matematika dan RPL.","content_en"=>"Waste reduction trend analysis by Math and Software Engineering students.","category"=>"math-rpl","author"=>"Tim Siswa RPL & Matematika","subjects"=>json_encode(["Matematika","RPL"])],
            ["title"=>"Panduan Kompos untuk Kebun Sekolah","title_en"=>"Composting Guide for School Garden","content"=>"Cara membuat kompos dari sampah organik sekolah.","content_en"=>"How to make compost from school organic waste.","category"=>"bind-digimar","author"=>"Tim Siswa Multidisiplin","subjects"=>json_encode(["B. Indonesia","B. Inggris","Matematika"])],
        ];
        foreach ($posts as $p) { Post::firstOrCreate(["title"=>$p["title"]], $p); }
    }
}
