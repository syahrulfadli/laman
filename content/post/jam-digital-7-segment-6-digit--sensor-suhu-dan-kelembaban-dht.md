+++
title = "Jam Digital 7-Segment 6 Digit + Sensor Suhu dan Kelembaban DHT "
date = 2018-06-17T05:47:00Z
updated = 2018-06-17T05:47:15Z
tags = ["Skematik", "Arduino", "Sensor", "Pemograman"]
draft = true
blogimport = true 
[author]
	name = "Syahrul Fadli"
	uri = "https://www.blogger.com/profile/04450857998543211448"
+++

<p>Jam digital ini dibuat menggunakan Arduino Nano. Kenapa? Karena saya menggunakan 20 pin dalam proyek ini. Jika menggunakan selain arduino Nano apakah bisa? Bisa saja, asalkan program dan rangkaian program disesuaikan atau anda menggunakan board Arduino yang menggunakan versi <i>SMD</i> dari ATmega328 atau yang setara. Untuk Sensor suhu dan kelembaban saya menggunakan DHT22, bisa juga DHT11 atau versi DHT lainnya. Modul RTC menggunakan DS3231 karena waktu lebih presisi. Disini saya akan membagikan dua versi skema rangkaian. Rangkaian pertama untuk 7-segment kecil yaitu, 0.56inch sampai 1inch rangkaian kedua untuk yang menggunakan 7-segment berukuran 1.75inch keatas dengan tegangan input yang disesuaikan.</p><p><blockquote>Sebenarnya Pada Modul RTC DS3231 juga terdapat monitor suhu, tapi karena tidak ada fitur untuk kelembaban udara jadi saya menggunakan modul DHT. </blockquote></p><p><h3>Alat dan Bahan</h3><ol><li>Arduino Nano x1</li><li>Buzzer 5V x1</li><li>7-Segment x6</li><li>Resistor</li><ul><li><b>240Ω</b> <b>x1</b></li><li><b>1KΩ</b> <b>x2 </b>jika menggunakan 7-segment berukuran ≤1inch, <b>x14 </b>jika anda menggunakan 7-segment berukuran ≥1.75inch</li><li><b>100Ω</b> <b>x6 </b>jika anda menggunakan 7-segment berukuran ≥1.75inch</li></ul><li>LED merah standard x4 atau disesuaikan dengan warna 7-segment</li><li>Transistor</li><ul><li>BC547 x1 jika anda menggunakan 7-segment berukuran ≤1inch, x7 jika anda menggunakan 7-segment berukuran ≥1.75inch</li><li>BC557 x6 jika anda menggunakan 7-segment berukuran ≥1.75inch</li></ul></ol>
