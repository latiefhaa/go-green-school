<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>SMK Karya Bangsa - Sekolah Ramah Lingkungan</title>
    <meta name="description" content="SMK Karya Bangsa - Pendidikan untuk Masa Depan Berkelanjutan. Sekolah ramah lingkungan yang mengintegrasikan edukasi lingkungan ke seluruh mata pelajaran.">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=poppins:300,400,500,600,700,800" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body class="bg-[#F0FFF0] font-sans antialiased">
    <div id="app"></div>
</body>
</html>
