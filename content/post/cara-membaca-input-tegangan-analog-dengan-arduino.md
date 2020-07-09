+++
title = "Cara Membaca Input Tegangan Analog dengan Arduino"
date = 2019-01-21T22:26:00Z
updated = 2019-10-27T22:53:14Z
tags = ["Tutorial", "Arduino"]
blogimport = true 
hero = "https://1.bp.blogspot.com/--_pkfDrnzQY/XEXNHWvhCwI/AAAAAAAAAMg/JWzQd3OCW5sKHjCPXCksf3Zy27-HjeEUwCLcBGAs/s1600/Cara%2BMembaca%2BInput%2BTegangan%2BAnalog%2Bdengan%2BArduino..jpg"
authors = ["Syahrul Fadli"]
+++

Fungsi membaca tegangan analog dapat dilakukan dengan menggunakan pin `A0`, `A1`, `A2`, `A3`, `A4`, `A5` pada arduino. Input yang masuk pada pin analog arduino akan dikonversi menjadi data digital dengan panjang 10 bit sehingga nilai input tegangan 0 volt sampai 5 volt(tegangan maksimal input Arduino) pada pin analog arduino mempunyai 1024(2<sup>10</sup>) keadaan dengan rentang 0 sampai 1023.

Jadi pada rentang nilai 0 volt sampai 5 volt dipecah sehingga terdapat 1023 data digital. Proses konversi tegangan analog menjadi data digital disebut ADC (Analog to Digital Converter). Berikut cara untuk menghitung konversi tegangan 5 volt dari data digital 10 bit:

5/1023 = 0,0048875855327468 volt

Jadi, setiap **1** data digital sama dengan **0,0048875855327468 volt**. Sedangkan berapa nilai tegangan jika angka digital-nya adalah 512? Caranya adalah:

512x5/1023 = 2,5024437927663734115347018572825 volt 

Perintah yang akan kita gunakan pada pembaca input analog adalah `analogRead([nomorpinanalog]);`. Pada percobaan kali ini kita akan menggunakan pin `A0` dan hasil output berupa data serial dan blink LED pada pin 13 (*Built In*)arduino. LED akan berkedip dengan delay berdasarkan pada nilai analog yang sudah dipetakan menjadi 0-1000 dengan satuan milidetik. 

Baca juga: <a href='/post/upload-program-ke-arduino-pro-mini.html' target='_blank' title='Cara Upload Program ke Arduino Pro Mini dengan USB to TTL PL2303'>Cara Upload Program ke Arduino Pro Mini dengan USB to TTL PL2303</a>

## Alat dan Bahan

1. Arduino x1
2. Projectboard/Breadboard x1
3. Potensio/Trimpot x1
4. Kabel jumper secukupnya

## Praktik

1. Susun rangkaian arduino antara potensio dengan projectboard seperti gambar di bawah ini.

	![Skema hubungan potensio dengan arduino](https://3.bp.blogspot.com/-9v_au-DJffs/XEXXFS0KPqI/AAAAAAAAAM4/-2qDZIO41U4TLjACfX25SzMF7mUSn0kBwCLcBGAs/s1600/Cara%2BMembaca%2BInput%2BTegangan%2BAnalog%2Bdengan%2BArduino.jpg)

2. Upload sketch program di bawah ini ke arduino.
	
	{{< highlight arduino >}}
	int sensorPin = A0;    // pin A0 diinisialisasi sebagai variable "sensorPin"
	int ledPin = 13;      // pin 13 dinisialisasi sebagai variable "ledPin"
	int dataInput = 0;   // variable untuk menyimpan data dari pembacaan nilai analog
	int analogDelay;    // varable untuk menyimpan data hasil pemetaan interval 0-1023 menjadi 0-1000;
	
	void setup() {
	// deklarasi variable ledPin/pin 13 sebagai Output
	pinMode(ledPin, OUTPUT);
	// Memulai komunikasi antara PC dengan Arduino dengan baudrate 9600
	Serial.begin(9600);
	}
	
	void loop() {
	// Membaca data dari pin A0 yang diwakilkan melalu variable sensorPin lalu disimpan ke variable dataInput
	dataInput = analogRead(sensorPin);
	// memetakan nilai analog 0-1023 menjadi 0-1000
	analogDelay = map(dataInput, 0, 1023, 0, 1000);
	// mencetak kalimat "Nilai analog = " pada serial monitor
	Serial.print("Nilai analog = ");
	// mencetak nilai analog pada serial monitor
	Serial.print(dataInput);
	// mencetak "(tab horizontal)Delay = " pada serial monitor
	Serial.print("\tDelay = ");
	// mencetak nilai dari variable analogDelay lalu membuat baris baru
	Serial.println(analogDelay);
	// output pin 13 = 1
	digitalWrite(ledPin, HIGH);
	// delay perintah selama [analogDelay] milliseconds:
	delay(analogDelay);
	// ouput pin 13 = 0
	digitalWrite(ledPin, LOW);
	// delay perintah selama [analogDelay] milliseconds:
	delay(analogDelay);
	}
	{{</highlight>}}

3. Compile/Verify sketch program.
4. Upload sketch program.
5. Buka Serial Monitor pada Arduino IDE.
	
	![Konfigurasi](https://4.bp.blogspot.com/-FtL5pkX0rFU/XEXNaYJolPI/AAAAAAAAAMo/ZL4ZWkVNBTMecXcs7hLNxYfqkZ_PY9YdACLcBGAs/s1600/Klik%2BSerial%2BMonitor.jpg]

6. Putar ke kanan dan ke kiri potensio yang anda gunakan, lihat perubahan pada nilai pada serial monitor dan LED pada board Arduino.

	![Konfigurasi](https://1.bp.blogspot.com/-osQLn8gkY3g/XEXNkynzq6I/AAAAAAAAAMs/-wszqV281iwiwAV2dJWkf6hEOxTO2_nCwCLcBGAs/s1600/Hasil%2Bserial%2Bmonitor.jpg0
	
Baca juga: <a href='/2016/11/sensor-cahaya-ldr.html' target='_blank' title='Rangkaian Sensor Cahaya DC dengan LDR'>Rangkaian Sensor Cahaya DC dengan LDR</a>

Sekian artikel ini semoga bermanfaat.  

## Pustaka

<a href='https://rpprastio.wordpress.com/2013/02/09/membaca-tegangan-analog-dengan-arduino/' rel='nofollow' title='MEMBACA TEGANGAN ANALOG DENGAN ARDUINO' target='_blank'>MEMBACA TEGANGAN ANALOG DENGAN ARDUINO - Amateur Physicist</a>

<a href='http://robotika.unit.itb.ac.id/main/943-arduino.html' rel='nofollow' title='Arduino | Unit Robotika ITB' target='_blank'>Arduino | Unit Robotika ITB</a>

<a href='https://www.arduino.cc/en/Tutorial/AnalogInput' rel='nofollow' title='Arduino - AnalogInput' target='_blank'>Arduino - AnalogInput</a>

<a href='https://www.arduino.cc/en/Tutorial/AnalogInOutSerial' rel='nofollow' title='Arduino - AnalogInOutSerial' target='_blank'>Arduino - AnalogInOutSerial</a>
