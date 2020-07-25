+++
title = "Rangkaian dan Sketch Program Ardutester Komponen Tester Berbasis Arduino "
date = 2017-12-11T15:27:00Z
updated = 2019-10-27T22:55:34Z
tags = ["Tutorial", "Skematik", "Arduino", "Pemograman"]
hero = ["/upload/cover-ardutester.jpg"]
blogimport = true 
authors = ["Syahrul Fadli"]
aliases = [
    "/rangkaian-dan-sketch-program-ardutester-komponen-tester-berbasis-arduino/",
    "/2017/12/rangkaian-dan-program-ardutester.html/"
]
+++

Saya akan membagikan 2 Skema rangkaian untuk Ardutester, yaitu menggunakan Board Arduino langsung dan menggunakan IC ATmega328(IC yang tertanam pada Board Arduino UNO) yang sudah diisi bootloader Arduino Uno. Jika IC yang akan digunakan baru dan belum di isi bootloader atau belum tau cara isi bootloader Arduino ke IC ATmega328 silahkan klik link dibawah ini. Rangkaian Ardutester ini tidak mempunyai fitur untuk menghitung nilai ESR(ESR Meter) kapasitor. 

{{< bacajuga href='"2017/05/burn-bootloader-ke-ic-atmega8168328.html"  title="Cara Mengisi/Burn Bootloader ke IC ATmega8/168/328 dengan Arduino sebagai ISP" >}}

## Komponen yang Dapat Diuji

<ol><li>Kapasitor</li><li>Resistor</li><li>Transistor</li><li>IGBT</li><li>MOSFET</li><li>Induktor</li><li>Dioda</li><li>TRIAC</li><li>SCR</li><li>JFET</li></ol>

*Mungkin masih ada yang belum saya sebutkan. 

## Rangkaian dengan Board Arduino Uno

{{< img alt="Skematik di Eagle" src="esr-shield.png" width="1413" >}}

Untuk Aplikasi dari rangkaian, dapat dibuat sebagai Shield Arduino Uno untuk pengguna yang memiliki IC Atmega328 terbatas atau hanya untuk praktek saja. Untuk download file skematik Eagle lihat di akhir artikel. 

### Daftar Bahan untuk ArduTester menggunakan Board Arduino Uno

<ol><li>Arduino Uno x1</li><li>Resistor<ul><li>680 ohm x3</li><li>470K ohm x3</li><li>1K ohm x1</li><li>100 ohm  x1</li><li>Potensio/Trimpot</li></ul></li><li>Push-Button x1</li><li>3 blok Terminal Screw x1</li><li>Pinhead(atau untuk kabel jumper sesuai kebutuhan)<ul><li>Female 1x16 (untuk pin LCD)x1</li><li>male 1x8 (untuk pin tiap Arduino)x2</li><li>male 1x10 (untuk pin tiap Arduino)x1</li><li>male 1x6 (untuk pin tiap Arduino)x1</li></ul></li><li>LCD 16x2 x1</li></ol>

## Rangkaian Menggunakan IC ATmega328

{{< img alt="Skematik di Eagle" src="esr-atmega.png" width="1600" >}}

Saya merekomendasikan anda untuk membuat rangkaian yang satu ini, Karena lebih mudah penggunaannya bagi anda yang seorang Teknisi Servis Elektronik. Untuk download file skematik Eagle lihat di akhir artikel. 

### Daftar Bahan untuk ArduTester menggunakan IC Atmega328
<ol><li>IC Atmega328 x1</li><li>Resistor<ul><li>680 ohm x3</li><li>470K ohm x3</li><li>1K ohm x2</li><li>100 ohm  x1</li><li>330 ohm x1</li><li>Potensio/Trimpot</li></ul></li><li>Push-Button x2</li><li>3 blok Terminal Screw x1</li><li>Pinhead<ul><li>Female 1x16 (untuk pin LCD)x1</li><li>Female 1x3 (untuk probe tambahan, opsional saja)x1</li><li>Female/Male 1x2(pin power supply)x1</li></ul></li><li>Connector Jack DC 5,5x2,5(female) biasa disebut con-jack dc Arduino</li><li>Crystal 16Mhz x1</li><li>Kapasitor<ul><li>Elco 220μF x2</li><li>Keramik 22pFx2</li></ul></li><li>IC Regulator 7805</li><li>LED (warna apa saja, untuk indikator power)x1</li><li>Dioda 1N4007 (yang penting 1 Ampere)x1</li><li>LCD 16x2 x1</li></ol><br /><br />

<blockquote><b>Tips</b><br />Untuk Resistor 680 ohm dan 470k ohm direkomendasikan resistor dengan toleransi 1%(coklat) untuk mendapatkan hasil nilai komponen yang lebih akurat</blockquote>

<h4>Referensi Layout Board PCB Eagle</h4>{{< img alt="Board Ardutester" src="board-Ardutester.png" width="1024" >}}

## Hasil Uji Coba

{{< img src="DSC_0008.JPG" width="400" alt="Komponen yang diuji MOSFET IRF540" caption="Komponen yang diuji MOSFET IRF540" >}}

{{< img src="DSC_0005.JPG" width="400" alt="Komponen yang diuji Resistor 33K ohm" caption="Komponen yang diuji Resistor 33K ohm" >}}

{{< img src="DSC_0014.JPG" width="400" alt="Komponen yang diuji Kapasitor 470μF" caption="Komponen yang diuji Kapasitor 470μF" >}}

{{< img src="DSC_0012.JPG" width="400" alt="Komponen yang diuji LED" caption="Komponen yang diuji LED" >}}

## Download
{{< download href="https://www.dropbox.com/s/i4z66idpf3sci4x/esr-shield.sch?dl=0" title="Skema dengan Board Arduino(.sch)" >}}

{{< download href="https://www.dropbox.com/s/axxi6lv3wd09dey/esr.sch?dl=0" title="Skema dengan IC Atmega328(.sch)" >}}

{{< download href="https://www.dropbox.com/s/678piawdk1o4vx2/ardutester.zip?dl=0" rel="nofollow" target="_blank" title="Sketch Program Ardutester(.zip)" >}}
