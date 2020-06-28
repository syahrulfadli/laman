+++
title = "Rangkaian Sensor Gerak PIR sebagai Saklar Lampu Otomatis"
date = 2017-12-07T12:19:00Z
updated = 2019-01-11T10:09:09Z
tags = ["Skematik", "Sensor"]
blogimport = true 
[author]
	name = "Syahrul Fadli"
	uri = "https://www.blogger.com/profile/04450857998543211448"
+++

<noscript><img alt="Sensor PIR" height="350" src="https://2.bp.blogspot.com/-oHkb_NbWhec/WijOkzXBK2I/AAAAAAAAAmQ/98u6L-ooaawqwb3oPuE0ykREf43xAaeowCLcBGAs/s1600/coverPIR.jpg" width="650"/></noscript><h3>Sensor PIR</h3>Sensor PIR (passive InfraRed) adalah sensor yang berkerja untuk mendeteksi adanya radiasi inframerah dari suhu benda. Sensor ini tidak memancarkan sinar inframerah karena bersifat pasif tetapi hanya menerima radiasi sinar inframerah. <br/><br/>Sensor PIR (Passive InfraDed) sebenarnya bukan sensor yang mendeteksi gejala perubahan berdasarkan pergerakan melainkan berdasarkan pancaran radiasi inframerah suhu benda. Output keluaran dari Sensor PIR sudah berupa output digital High(1)-Low(0) jadi untuk aplikasi rangkaian sangat sederhana. <h3>Skema Rangkaian</h3><amp-img alt="Teori Komparator" height="637" layout="responsive" lightbox  src="https://4.bp.blogspot.com/-RPT9j9getF8/WijHc-cwixI/AAAAAAAAAmA/HpFfADN01SAwcpzwc5nIMdZlgdJdKaonwCLcBGAs/s1600/pir.png" width="1382" tabindex="0"></amp-img><br/>Download file skematik eagle(.sch) di akhir artikel. <h3>Daftar Komponen</h3><ul><li>Sensor PIR x1</li><li>Resistor <ul><li>100 ohm x1</li></ul><li>Relay 5V x1</li><li>Dioda 1N4007 (yang penting 1 Ampere) x1</li><li>Transistor NPN BD139</li></ul><h3>Cara Kerja Rangkaian</h3>Ketika sensor mendeteksi tubuh manusia maka Output sensor berlogika 1(HIGH), arus akan mengalir melalui resistor 100 ohm lalu menuju kaki basis transistor sehingga kaki <b>Emitor</b> terbuka dan Relay menjadi aktif Normaly Open (NO) karena mendapat arus Ground dari kaki <b>Kolektor</b> transistor (mode penguat common emitor). Untuk Dioda 1 (D1) berfungsi untuk menyerap tegangan induksi yang bisa merusak kumparan pada relay. <h3>Download</h3><a class='donlot' href='https://www.dropbox.com/s/ht7eys66rgxr8xb/PIR.sch?dl=0' rel='nofollow' target='_blank' title='Download File'>Sensor PIR(.sch)</a><br/><br/>Contoh aplikasi rangkaian ini bisa untuk saklar otomatis pada lampu kamar mandi/WC. Sekian dan terimakasih semoga bermanfaat. 
