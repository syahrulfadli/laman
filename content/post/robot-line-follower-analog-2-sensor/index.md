+++
title = "Rangkaian Robot Line Follower/Tracer Analog"
date = 2017-12-04T17:11:00Z
updated = 2019-01-11T10:11:06Z
tags = ["Tutorial", "Skematik", "Robotik", "Sensor"]
hero = ["/upload/cover-linefollower.jpg"]
blogimport = true 
authors = ["Syahrul Fadli"]
aliases = [
    "/robot-line-follower-analog-2-sensor/",
    "/2017/12/robot-line-follower-tracer-analog.html/"
]
robotsdisallow = false
+++

Robot Line Follower atau kita bisa sebut juga Robot Line Tracer yang sesuai namanya, bertugas untuk mengikuti garis. Ada 2(dua) jenis Robot Line Tracer yaitu Analog dan berbasis Mikrokontroller. Kali ini saya akan membuat Robot Line Follower yang berbasis Analog dengan menggunakan 2(dua) photodioda. Berikut daftar komponen dari robot line follower. 

<ul><li>IC LM324 - Komparator</li><li>IC L293D - Driver Motor</li><li>Photodioda x2</li><li>LED Superbright (cahaya putih) x2</li><li>Resistor <ul><li>330 ohm x2</li><li>33k ohm x2 </li><li>Potensio 50k ohm</li></ul></li></ul><blockquote><b>Tips</b><br/>Untuk sumber tegangan sebaiknya untuk driver motor dipisah dengan supply tegangan rangkaian lain</blockquote> 

## Skema Rangkaian Robot Line Follower/Tracer Analog

{{< img alt="Teori Komparator" src="skemaLF.png" width="615" >}}

Skema ini terdiri dari 3 bagian yaitu <b>Sensor</b>, <b>Komparator</b> dan <b>Driver Motor</b>. Saya membuat skema rangkaian berdasar rangkaian yang saya dapat dari guru saya di SMK. Skematik rangkaian dibuat di software Eagle  

<blockquote>Rangkaian ini untuk membaca garis Hitam</blockquote>

## Prinsip Kerja Photodioda

{{< img alt="Teori Komparator" src="sensor-robot.png" width="615" >}} 

Jika kondisi gelap nilai tahanannya menjadi besar sehingga tidak ada arus yang lewat sedangkan ketika kondisi terang nilai tahanan menjadi kecil.

Untuk prinsip kerja dari rangkaian yang terpasang pada Robot Line Follower adalah sebagai berikut. <ul><li>Ketika Gelap maka nilai tahanan photodioda besar sehingga arus dari ground tidak dapat mengalir sedangkan arus dari VCC masih dapat mengalir dari resistor 33K ohm, sehingga OUTPUT = HIGH  dengan tegangan dan arus yang kecil </li><li>Ketika Terang maka nilai tahanan photodioda mengecil sehingga arus dari ground dapat melewati photodioda, arus yang keluar dari photodioda lebih besar dibanding dengan arus VCC dari resistor 33K ohm maka OUTPUT = LOW. </ul>

Untuk jarak antar photodioda line follower berjarak -+28mm, jarak antar photodioda juga dapat diubah tergantung lebar jalur/garis. Saya menggunakan jarak kurang lebih 28mm, karena sesuai dengan lebar lakban yang saya gunakan sebagai jalur robot line follower. 

## Prinsip Kerja Komparator

{{< img alt="Teori Komparator" src="robot-teori.png" width="615" >}}

<ul><li>Jika arus yang masuk ke Op-Amp A lebih besar dari Vref<b>*</b> maka output Op-Amp A = HIGH</li><li>Jika arus yang masuk ke Op-Amp A lebih kecil dari Vref maka output Op-Amp A = LOW</li><li>Jika arus yang masuk ke Op-Amp B lebih besar dari Vref maka output Op-Amp B = LOW</li><li>Jika arus yang masuk ke Op-Amp B lebih kecil dari Vref maka output Op-Amp B = HIGH</li></ul> 

## Prinsip Kerja Robot

Untuk prinsip kerja bisa melihat gambar-gambar berikut <ul><li>

{{< img alt="Robot Maju" src="robot-maju.png" width="615" >}}</li><li>
{{< img alt="Robot Mundur" src="robot-mundur.png" width="615" >}}</li><li>{{< img alt="Robot Belok Kanan"  src="robot-belok-kanan.png" width="615" >}}</li><li>{{< img alt="Robot Belok Kiri" src="robot-belok-kiri.png" width="615" >}}</li></ul>

Jika ingin membuat Robot Line Follower untuk membaca garis putih, anda hanya perlu mengutak-atik sedikit dibagian <b>Komparator</b>.

Berikut robot hasil kerja dari kelompok saya saat masih SMK. Disini kelompok kami menambahkan 4 LED pada tiap output IC Komparator sebagai indikator tiap output. 

{{< img src="pose1.jpg"   alt="Hasil akhir pembuatan robot line follower 1"      width="400"        >}}    {{< img src="pose2.jpg"         width="400" alt="Hasil akhir pembuatan robot line follower 1"       >}}    {{< img src="pose3.jpg"    alt="Hasil akhir pembuatan robot line follower 1"     width="400"        >}}    {{< img src="pose4.jpg"     alt="Hasil akhir pembuatan robot line follower 1"    width="400"        >}}

<i><b>*Vref merupakan tegangan referensi untuk membandingkan tegangan input Op-Amp, pada rangkaian diatas Vref-nya adalah pin IC komparator yang tersambung dengan Potensio</b></i>
