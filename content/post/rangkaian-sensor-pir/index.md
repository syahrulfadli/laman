+++
title = "Rangkaian Sensor Gerak PIR sebagai Saklar Lampu Otomatis"
date = 2017-12-07T12:19:00Z
updated = 2019-01-11T10:09:09Z
tags = ["Skematik", "Sensor"]
blogimport = true 
hero = ["/upload/default.jpg"]
authors = ["Syahrul Fadli"]
aliases = [
    "/rangkaian-sensor-pir/",
    "/2017/12/rangkaian-sensor-gerak-pir.html/"
]
+++

## Sensor PIR

Sensor PIR (passive InfraRed) adalah sensor yang berkerja untuk mendeteksi adanya radiasi inframerah dari suhu benda. Sensor ini tidak memancarkan sinar inframerah karena bersifat pasif tetapi hanya menerima radiasi sinar inframerah. 

Sensor PIR (Passive InfraDed) sebenarnya bukan sensor yang mendeteksi gejala perubahan berdasarkan pergerakan melainkan berdasarkan pancaran radiasi inframerah suhu benda. Output keluaran dari Sensor PIR sudah berupa output digital High(1)-Low(0) jadi untuk aplikasi rangkaian sangat sederhana. 

## Skema Rangkaian

{{< img alt="Teori Komparator" src="pir.png" width="1382" >}}

Download file skematik eagle(.sch) di akhir artikel. 

## Daftar Komponen

<ul><li>Sensor PIR x1</li><li>Resistor <ul><li>100 ohm x1</li></ul><li>Relay 5V x1</li><li>Dioda 1N4007 (yang penting 1 Ampere) x1</li><li>Transistor NPN BD139</li></ul>

## Cara Kerja Rangkaian

Ketika sensor mendeteksi tubuh manusia maka Output sensor berlogika 1(HIGH), arus akan mengalir melalui resistor 100 ohm lalu menuju kaki basis transistor sehingga kaki <b>Emitor</b> terbuka dan Relay menjadi aktif Normaly Open (NO) karena mendapat arus Ground dari kaki <b>Kolektor</b> transistor (mode penguat common emitor). Untuk Dioda 1 (D1) berfungsi untuk menyerap tegangan induksi yang bisa merusak kumparan pada relay. 

## Download
<br/>
{{< download href="https://www.dropbox.com/s/ht7eys66rgxr8xb/PIR.sch?dl=0" title="Skematik Sensor PIR(.sch)" >}}

Contoh aplikasi rangkaian ini bisa untuk saklar otomatis pada lampu kamar mandi/WC. Sekian dan terimakasih semoga bermanfaat. 
