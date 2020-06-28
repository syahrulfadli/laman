+++
title = "Rangkaian dan Sketch Program Ardutester Komponen Tester Berbasis Arduino "
date = 2017-12-11T15:27:00Z
updated = 2019-10-27T22:55:34Z
tags = ["Tutorial", "Skematik", "Arduino", "Pemograman"]
blogimport = true 
[author]
	name = "Syahrul Fadli"
	uri = "https://www.blogger.com/profile/04450857998543211448"
+++

<noscript><img alt="Sensor PIR" height="350" src="https://3.bp.blogspot.com/-_vDQsEAi3Vk/Wi40pjZqawI/AAAAAAAAAm8/JhqsUG5I7kgft3sTbnvMKE9s9qT5wP7iQCLcBGAs/s1600/cover%2Besr.jpg" width="650"/></noscript>Saya akan membagikan 2 Skema rangkaian untuk Ardutester, yaitu menggunakan Board Arduino langsung dan menggunakan IC ATmega328(IC yang tertanam pada Board Arduino UNO) yang sudah diisi bootloader Arduino Uno. Jika IC yang akan digunakan baru dan belum di isi bootloader atau belum tau cara isi bootloader Arduino ke IC ATmega328 silahkan klik link dibawah ini. Rangkaian Ardutester ini tidak mempunyai fitur untuk menghitung nilai ESR(ESR Meter) kapasitor. <br /><br /><div class='bacajuga'>Baca Juga: <a href='/2017/05/burn-bootloader-ke-ic-atmega8168328.html' rel='nofollow' target='_blank' title='Cara Mengisi/Burn Bootloader ke IC ATmega8/168/328 dengan Arduino sebagai ISP'>Cara Mengisi/Burn Bootloader ke IC ATmega8/168/328 dengan Arduino sebagai ISP</a></div><br /><h3>Komponen yang Dapat Diuji</h3><ol><li>Kapasitor</li><li>Resistor</li><li>Transistor</li><li>IGBT</li><li>MOSFET</li><li>Induktor</li><li>Dioda</li><li>TRIAC</li><li>SCR</li><li>JFET</li></ol>Mungkin ada yang belum saya sebutkan sebab ketidaktahuan dan kurangnya ilmu saya. <h3>Rangkaian dengan Board Arduino Uno</h3><amp-img alt="Skematik di Eagle" height="975" layout="responsive" lightbox  src="https://4.bp.blogspot.com/-aeeq1-eEZ3Q/Wid3EO3_WWI/AAAAAAAAAlo/ep_RJmatpZkhCDsxfGPr3xSpyfsZ9faQwCLcBGAs/s1600/esr-shield.png" tabindex="0" width="1413"></amp-img>Untuk Aplikasi dari rangkaian, dapat dibuat sebagai Shield Arduino Uno untuk pengguna yang memiliki IC Atmega328 terbatas atau hanya untuk praktek saja. Untuk download file skematik Eagle lihat di akhir artikel. <br /><h4>Daftar Bahan untuk ArduTester menggunakan Board Arduino Uno</h4><ol><li>Arduino Uno x1</li><li>Resistor<ul><li>680 ohm x3</li><li>470K ohm x3</li><li>1K ohm x1</li><li>100 ohm  x1</li><li>Potensio/Trimpot</li></ul></li><li>Push-Button x1</li><li>3 blok Terminal Screw x1</li><li>Pinhead(atau untuk kabel jumper sesuai kebutuhan)<ul><li>Female 1x16 (untuk pin LCD)x1</li><li>male 1x8 (untuk pin tiap Arduino)x2</li><li>male 1x10 (untuk pin tiap Arduino)x1</li><li>male 1x6 (untuk pin tiap Arduino)x1</li></ul></li><li>LCD 16x2 x1</li></ol><h3>Rangkaian Menggunakan IC ATmega328</h3><amp-img alt="Skematik di Eagle" height="700" layout="responsive" lightbox  src="https://3.bp.blogspot.com/-q3FaeGVDDZs/Wid3rEN6n0I/AAAAAAAAAlw/2pZmEkJre10z3kx44y0twU94Q_Xf281AwCLcBGAs/s1600/esr%2Batmega.png" tabindex="0" width="1600"></amp-img>Saya merekomendasikan anda untuk membuat rangkaian yang satu ini, Karena lebih mudah penggunaannya bagi anda yang seorang Teknisi Servis Elektronik. Untuk download file skematik Eagle lihat di akhir artikel. <br /><h4>Daftar Bahan untuk ArduTester menggunakan IC Atmega328</h4><ol><li>IC Atmega328 x1</li><li>Resistor<ul><li>680 ohm x3</li><li>470K ohm x3</li><li>1K ohm x2</li><li>100 ohm  x1</li><li>330 ohm x1</li><li>Potensio/Trimpot</li></ul></li><li>Push-Button x2</li><li>3 blok Terminal Screw x1</li><li>Pinhead<ul><li>Female 1x16 (untuk pin LCD)x1</li><li>Female 1x3 (untuk probe tambahan, opsional saja)x1</li><li>Female/Male 1x2(pin power supply)x1</li></ul></li><li>Connector Jack DC 5,5x2,5(female) biasa disebut con-jack dc Arduino</li><li>Crystal 16Mhz x1</li><li>Kapasitor<ul><li>Elco 220μF x2</li><li>Keramik 22pFx2</li></ul></li><li>IC Regulator 7805</li><li>LED (warna apa saja, untuk indikator power)x1</li><li>Dioda 1N4007 (yang penting 1 Ampere)x1</li><li>LCD 16x2 x1</li></ol><br /><br /><blockquote><b>Tips</b><br />Untuk Resistor 680 ohm dan 470k ohm direkomendasikan resistor dengan toleransi 1%(coklat) untuk mendapatkan hasil nilai komponen yang lebih akurat</blockquote><h4>Referensi Layout Board PCB Eagle</h4><amp-img alt="Board Ardutester" height="792" layout="responsive" lightbox  src="https://2.bp.blogspot.com/-R3FW8eTXuWg/WiuqpngU2KI/AAAAAAAAAms/o0Egfa6E59IZB5GfKHT-yayy7QxcbpIpgCLcBGAs/s1600/board%2BArdutester.png" width="1024" role="button" tabindex="0"></amp-img><br /><h3>Hasil Uji Coba</h3><amp-carousel width="400"       height="300"       layout="responsive"       type="slides"><amp-img src="https://4.bp.blogspot.com/-eLHgFy35ujo/Wi42lzl-4oI/AAAAAAAAAnI/TTYnbU_WbGQ5gaBYa2XHajxT--1E4bIwgCLcBGAs/s1600/DSC_0008.JPG"         width="400"         height="300"         layout="responsive"></amp-img>    <amp-img src="https://1.bp.blogspot.com/-nw5jQHFHD9Q/Wi42rnINOHI/AAAAAAAAAnM/nHDoSZROjVkfeDAeCAVDL6RSrJXwzTCpACLcBGAs/s1600/DSC_0005.JPG"         width="400"         height="300"         layout="responsive"></amp-img>    <amp-img src="https://2.bp.blogspot.com/-mhzYUt5-kZ4/Wi42zdxhrvI/AAAAAAAAAnQ/5OcJJsgnriMQmvWWEySXsmvBqFCOFV2mQCLcBGAs/s1600/DSC_0014.JPG"         width="400"         height="300"         layout="responsive"></amp-img>    <amp-img src="https://1.bp.blogspot.com/-40W9Pl8nZp4/Wi424Z1WeiI/AAAAAAAAAnU/yEqKeT6jK0MVnsaI3qiOPwi_ckxkXaV6wCLcBGAs/s1600/DSC_0012.JPG"         width="400"         height="300"         layout="responsive"></amp-img>  </amp-carousel>Keterangan: <ul><li>Gambar 1 - Komponen yang diuji MOSFET IRF540</li><li>Gambar 2 - Komponen yang diuji Resistor 33K ohm</li><li>Gambar 3 - Komponen yang diuji Kapasitor 470μF</li><li>Gambar 4 - Komponen yang diuji LED</li></ul><h3>Download</h3><a class="donlot" href="https://www.dropbox.com/s/i4z66idpf3sci4x/esr-shield.sch?dl=0" rel="nofollow" target="_blank" title="Download">Download Skema dengan Board Arduino(.sch)</a><br /><br /><a class="donlot" href="https://www.dropbox.com/s/axxi6lv3wd09dey/esr.sch?dl=0" rel="nofollow" target="_blank" title="Download">Download Skema dengan IC Atmega328(.sch)</a><br /><br /><a class="donlot" href="https://www.dropbox.com/s/678piawdk1o4vx2/ardutester.zip?dl=0" rel="nofollow" target="_blank" title="Download">Download Sketch Program Ardutester(.zip)</a>