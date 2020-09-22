+++
title = "Rangkaian Sensor Cahaya DC dengan LDR"
date = 2016-11-07T19:10:00Z
updated = 2019-10-27T22:56:56Z
tags = ["Skematik", "Sensor"]
blogimport = true 
hero = ["/upload/cover-ldr.jpg"]
authors = ["Syahrul Fadli"]
aliases = [
    "/rangkaian-sensor-ldr/",
    "/2016/11/sensor-cahaya-ldr.html/"
]
robotsdisallow = false
+++

Sensor cahaya ini pada dasarnya tugas Kelompok dari guru saya dan skema rangkaian ini juga berasal dari guru Saya di SMK Negeri 3 Mataram, dan sudah saya coba praktikan lewat Simulasi maupun <i>real</i>-nya dan <i>It's Work</i>. Berikut ini adalah rangkaian skematik dari sensor cahaya menggunakan LDR.

{{< img alt="Skematik di Eagle" src="sensor-cahaya.png" >}}

{{< bacajuga title="Rangkaian Sensor Gerak PIR sebagai Saklar Lampu Otomatis" href="/post/rangkaian-sensor-gerak-pir" >}}

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
	
	{{< img src="SimulasiLDRkondisiAwal.PNG" alt="Simulasi LDR pada kondisi terang" caption="Simulasi LDR pada kondisi terang" >}}

2. Kondisi LDR tidak terkena cahaya (Gelap) - **Klik untuk memperbesar**
	
	{{< img src="SimulasiLDRkondisiGelap.PNG" alt="Simulasi LDR pada kondisi gelap" caption="Simulasi LDR pada kondisi gelap" >}}

### Hal yang Mungkin Penting

#### Prinsip Kerja LDR

Kita pahami dulu prinsip kerja dari LDR (light dependent resistance. Dasarnya LDR ini adalah sebuah resistor namun nilai tahanannya dapat berubah tergantung dengan kondisi cahaya. Ketika LDR terkena cahaya maka resistansi/tahanan pada LDR akan mengecil dan sebaliknya ketika keadaan gelap resistansi akan meningkat.

#### Prinsip Kerja Rangkaian LDR

Potensio (variabel resistor) berfungsi sebagai pengatur "sensitivitas" dari LDR. Karena potensio dan LDR pada rangkaian ini mempunyai prinsip pembagi tegangan ke transistor Q1, yang dapat mempengaruhi tegangan yang mengalir ke transistor Q1.

**Jadi cara kerjanya** adalah ketika LDR dalam kondisi terkena cahaya (**Terang**) maka resistan LDR akan mengecil jadi arus akan melewati LDR,  tidak melewati **R2** karena arus akan lebih banyak mengalir pada resistansi terendah.

Arus yang melewati LDR akan mengaktifkan transistor npn **Q1**, sehingga basis transistor **Q2** mendapat ground dari kolektor **Q1**, menyebabkan **Q2** tidak mengalirkan ground dari emitor ke kolektor sehingga relay tidak mendapat ground jadi relay tidak aktif.

Ketika LDR dalam kondisi cahaya redup (**Gelap**), maka resistan LDR akan meningkat, arus tidak melewati LDR melainkan melewati **R2** sehingga **Q1** tidak aktif maka transistor **Q2** basisnya mendapat tegangan dan arus dari **R2** sehingga relay menjadi aktif karena mendapat ground dari kolektor **Q2** dan menyaklar Lampu AC.  

## Download file Skematik - Eagle
<br/>
{{< download title="Download Skema (.sch)" href="https://www.dropbox.com/s/hp849z08znc3h4w/sensor%20cahaya.sch?dl=0" >}}

Sekian, Jika ada kesalahan dalam artikel ini, silahkan langsung di koreksi lewat Kolom Komentar atau kontak langsung ke penulis.
