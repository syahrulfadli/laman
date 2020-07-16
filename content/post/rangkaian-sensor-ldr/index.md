+++
title = "Rangkaian Sensor Cahaya DC dengan LDR"
date = 2016-11-07T19:10:00Z
updated = 2019-10-27T22:56:56Z
tags = ["Skematik", "Sensor"]
blogimport = true 
hero = "https://1.bp.blogspot.com/-9OsWf12JEGE/XCDZiQn3JBI/AAAAAAAAAFw/ePO3l9SXN5MrQy03MgqYevINLYbmiVFRgCLcBGAs/s1600/ldr.jpg"
authors = ["Syahrul Fadli"]
+++

Sensor cahaya ini pada dasarnya tugas Kelompok dari guru saya dan skema rangkaian ini juga berasal dari guru Saya di SMK Negeri 3 Mataram, dan sudah saya coba praktikan lewat Simulasi maupun <i>real</i>-nya dan <i>It's Work</i>. Berikut ini adalah rangkaian skematik dari sensor cahaya menggunakan LDR.

![Skematik di Eagle](https://1.bp.blogspot.com/-KY4jmp8mYj4/WSd_YPNPtwI/AAAAAAAAAfM/YejWRYmP0fQJlFbIs2MWNYcXIjc3ptP3ACLcB/s1600/sensor%2Bcahaya.png)

Baca Juga: [Rangkaian Sensor Gerak PIR sebagai Saklar Lampu Otomatis](/post/rangkaian-sensor-gerak-pir)

## Komponen yang diperlukan
1. LDR x1
2. Transistor NPN tipe BD139 x2
3. Resistor 1K x2
4. Potensio 50k x1
5. Relay 9vdc x1
6. Pinhead x2
. Terminal/Connector x2

## Bagaimana ini bekerja?
Perhatikan dua gambar berikut (1=vcc, 0=ground).
1. Kondisi LDR terkena cahaya (Terang) - **Klik untuk memperbesar**
	
	![Kondisi Terang](https://1.bp.blogspot.com/-BlRp2yLHark/WBcpurkTaoI/AAAAAAAAAX8/dEAnM4XwSBk-696gAVaXOPit-Z6E6l-wwCLcB/s1600/SimulasiLDRkondisiAwal.PNG)

2. Kondisi LDR tidak terkena cahaya (Gelap) - **Klik untuk memperbesar**
	
	![Kondisi gelap](https://2.bp.blogspot.com/-mM4aYmgZeLE/WBcpvMhuB4I/AAAAAAAAAYA/Qvcgfcf0LeAWpbi1z4jlrSIVu-hQA70MQCLcB/s1600/SimulasiLDRkondisiGelap.PNG)

### Hal yang Mungkin Penting
**Pertama**, Kita pahami dulu prinsip kerja dari LDR (light dependent resistance. Dasarnya LDR ini adalah sebuah resistor namun nilai tahanannya dapat berubah tergantung dengan kondisi cahaya. Ketika LDR terkena cahaya maka resistan/tahanan pada LDR akan mengecil dan sebaliknya ketika keadaan gelap resistan akan meningkat.

**Kedua**, Potensio berfungsi sebagai pengatur sensitivitas dari LDR.

**Jadi cara kerjanya** adalah ketika LDR dalam kondisi terkena cahaya (**Terang**) maka resistan LDR akan mengecil jadi arus akan melewati LDR tidak melewati **R2** dan tidak mengaktifkan transistor Q(2), relay tidak mendapat ground jadi relay tidak aktif. Ketika LDR dalam kondisi cahaya redup (**Gelap**), maka resistan LDR akan meningkat, arus tidak melewati LDR melainkan melewati **R2** lalu mengaktifkan transistor relay menjadi aktif karena mendapat ground dan menyaklar Lampu AC.  

## Download file Skematik - Eagle

[Download Skema (.sch)](https://www.dropbox.com/s/hp849z08znc3h4w/sensor%20cahaya.sch?dl=0)

Sekian, Jika ada kesalahan dalam artikel ini, silahkan langsung di koreksi lewat Kolom Komentar atau **Halaman Kontak** kami.
