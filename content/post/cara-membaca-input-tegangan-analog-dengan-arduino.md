+++
title = "Cara Membaca Input Tegangan Analog dengan Arduino"
date = 2019-01-21T22:26:00Z
updated = 2019-10-27T22:53:14Z
tags = ["Tutorial", "Arduino"]
blogimport = true 
[author]
	name = "Carl Johnson"
	uri = "https://www.blogger.com/profile/16063074219541843988"
+++

<div class="thumb-post"><noscript><img alt="Cara Membaca Input Tegangan Analog dengan Arduino" height="350" src="https://1.bp.blogspot.com/--_pkfDrnzQY/XEXNHWvhCwI/AAAAAAAAAMg/JWzQd3OCW5sKHjCPXCksf3Zy27-HjeEUwCLcBGAs/s1600/Cara%2BMembaca%2BInput%2BTegangan%2BAnalog%2Bdengan%2BArduino..jpg" width="650"/></noscript></div>  <p>Fungsi membaca tegangan analog dapat dilakukan dengan menggunakan pin <code>A0, A1, A2, A3, A4, A5</code> pada arduino. Input yang masuk pada pin analog arduino akan dikonversi menjadi data digital dengan panjang 10 bit sehingga nilai input tegangan 0 volt sampai 5 volt(tegangan maksimal input Arduino) pada pin analog arduino mempunyai 1024(2<sup>10</sup>) keadaan dengan rentang 0 sampai 1023. Jadi pada rentang nilai 0 volt sampai 5 volt dipecah sehingga terdapat 1023 data digital. Proses konversi tegangan analog menjadi data digital disebut ADC (Analog to Digital Converter). Berikut cara untuk menghitung konversi tegangan 5 volt dari data digital 10 bit:<br/><center>5/1023 = 0,0048875855327468 volt</center><br/>Jadi, setiap <b>1</b> data digital sama dengan<b> 0,0048875855327468 volt</b>. Sedangkan berapa nilai tegangan jika angka digital-nya adalah 512? Caranya adalah:<br/><br/><center>512x5/1023 = 2,5024437927663734115347018572825 volt </center></p><p>Perintah yang akan kita gunakan pada pembaca input analog adalah <code>analogRead([nomorpinanalog]);</code>. Pada percobaan kali ini kita akan menggunakan pin <code>A0</code> dan hasil output berupa data serial dan blink LED pada pin 13 (<i>Built In</i>)arduino. LED akan berkedip dengan delay berdasarkan pada nilai analog yang sudah dipetakan menjadi 0-1000 dengan satuan milidetik. <div class='bacajuga'>Baca juga: <a href='/2017/05/upload-program-ke-arduino-pro-mini.html' target='_blank' title='Cara Upload Program ke Arduino Pro Mini dengan USB to TTL PL2303'>Cara Upload Program ke Arduino Pro Mini dengan USB to TTL PL2303</a></div><h2>Alat dan Bahan</h2><ol><li>Arduino x1</li><li>Projectboard/Breadboard x1</li><li>Potensio/Trimpot x1</li><li>Kabel jumper secukupnya</li></ol><h2>Praktik</h2><ol><li>Susun rangkaian arduino antara potensio dengan projectboard seperti gambar di bawah ini.</li><!---gambar---> <amp-img alt="Skema hubungan potensio dengan arduino" height="1171" layout="responsive" lightbox role="button" src="https://3.bp.blogspot.com/-9v_au-DJffs/XEXXFS0KPqI/AAAAAAAAAM4/-2qDZIO41U4TLjACfX25SzMF7mUSn0kBwCLcBGAs/s1600/Cara%2BMembaca%2BInput%2BTegangan%2BAnalog%2Bdengan%2BArduino.jpg"  width="1600"></amp-img> <li>Upload sketch program di bawah ini ke arduino.<br/><pre><br />int sensorPin = A0;    // pin A0 diinisialisasi sebagai variable "sensorPin"<br />int ledPin = 13;      // pin 13 dinisialisasi sebagai variable "ledPin"<br />int dataInput = 0;   // variable untuk menyimpan data dari pembacaan nilai analog<br />int analogDelay;    // varable untuk menyimpan data hasil pemetaan interval 0-1023 menjadi 0-1000;<br /><br />void setup() {<br />  // deklarasi variable ledPin/pin 13 sebagai Output<br />  pinMode(ledPin, OUTPUT);<br />  // Memulai komunikasi antara PC dengan Arduino dengan baudrate 9600<br />  Serial.begin(9600);<br />}<br /><br />void loop() {<br />  // Membaca data dari pin A0 yang diwakilkan melalu variable sensorPin lalu disimpan ke variable dataInput<br />  dataInput = analogRead(sensorPin);<br />  // memetakan nilai analog 0-1023 menjadi 0-1000<br />  analogDelay = map(dataInput, 0, 1023, 0, 1000);<br />  // mencetak kalimat "Nilai analog = " pada serial monitor<br />  Serial.print("Nilai analog = ");<br />  // mencetak nilai analog pada serial monitor<br />  Serial.print(dataInput);<br />  // mencetak "(tab horizontal)Delay = " pada serial monitor<br />  Serial.print("\tDelay = ");<br />  // mencetak nilai dari variable analogDelay lalu membuat baris baru<br />  Serial.println(analogDelay);<br />  // output pin 13 = 1<br />  digitalWrite(ledPin, HIGH);<br />  // delay perintah selama [analogDelay] milliseconds:<br />  delay(analogDelay);<br />  // ouput pin 13 = 0<br />  digitalWrite(ledPin, LOW);<br />  // delay perintah selama [analogDelay] milliseconds:<br />  delay(analogDelay);<br />}<br /></pre></li><li>Compile/Verify sketch program.</li><li>Upload sketch program.</li><li>Buka Serial Monitor pada Arduino IDE.</li><!---Gambar----> <amp-img alt="Konfigurasi" height="593" layout="responsive" lightbox role="button" src="https://4.bp.blogspot.com/-FtL5pkX0rFU/XEXNaYJolPI/AAAAAAAAAMo/ZL4ZWkVNBTMecXcs7hLNxYfqkZ_PY9YdACLcBGAs/s1600/Klik%2BSerial%2BMonitor.jpg" width="486"></amp-img> <li>Putar ke kanan dan ke kiri potensio yang anda gunakan, lihat perubahan pada nilai pada serial monitor dan LED pada board Arduino.</li><amp-img alt="Konfigurasi" height="372" layout="responsive" lightbox role="button" src="https://1.bp.blogspot.com/-osQLn8gkY3g/XEXNkynzq6I/AAAAAAAAAMs/-wszqV281iwiwAV2dJWkf6hEOxTO2_nCwCLcBGAs/s1600/Hasil%2Bserial%2Bmonitor.jpg" width="770"></amp-img> </ol><div class='bacajuga'>Baca juga: <a href='/2016/11/sensor-cahaya-ldr.html' target='_blank' title='Rangkaian Sensor Cahaya DC dengan LDR'>Rangkaian Sensor Cahaya DC dengan LDR</a></div>Sekian artikel ini semoga bermanfaat.  <h2>Pustaka</h2><a href='https://rpprastio.wordpress.com/2013/02/09/membaca-tegangan-analog-dengan-arduino/' rel='nofollow' title='MEMBACA TEGANGAN ANALOG DENGAN ARDUINO' target='_blank'>MEMBACA TEGANGAN ANALOG DENGAN ARDUINO - Amateur Physicist</a><br/><a href='http://robotika.unit.itb.ac.id/main/943-arduino.html' rel='nofollow' title='Arduino | Unit Robotika ITB' target='_blank'>Arduino | Unit Robotika ITB</a><br/><a href='https://www.arduino.cc/en/Tutorial/AnalogInput' rel='nofollow' title='Arduino - AnalogInput' target='_blank'>Arduino - AnalogInput</a><br/><a href='https://www.arduino.cc/en/Tutorial/AnalogInOutSerial' rel='nofollow' title='Arduino - AnalogInOutSerial' target='_blank'>Arduino - AnalogInOutSerial</a>