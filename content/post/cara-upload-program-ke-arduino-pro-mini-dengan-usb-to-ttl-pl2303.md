+++
title = "Cara Upload Program ke Arduino Pro Mini dengan USB to TTL PL2303"
date = 2017-05-20T08:59:00Z
updated = 2019-01-11T10:14:18Z
tags = ["Tutorial", "Arduino", "Pemograman"]
blogimport = true 
authors = ["Syahrul Fadli"]
hero = "https://2.bp.blogspot.com/-nULKS_SBDPM/WEi9ElmHO7I/AAAAAAAAAaw/sEmDcNZKzUMOxa-Hh2I2y2IOdAmEz2C6gCLcB/s1600/Arduino%2BPro%2BMini%2BCover.png"

+++

Berikut adalah tutorial cara Upload program ke Arduino Pro Mini 168 5V 16MHz, Arduino Pro Mini 168 3,3V 8MHz, Arduino Pro Mini 328 5V 16MHz, dan  Arduino Pro Mini 328 3,3V 8MHz. Perangkat yang saya gunakan adalah Arduino Pro Mini 168 5V 16MHz dengan PC Laptop Windows 10 x64.

1. Download terlebih Dahulu driver USB-nya, disini saya menggunakan driver USB Prolific PL2303 dengan versi lawas dari versi yang sudah ada saat ini (v116). Ini karena Driver USB Prolific PL2303 yang terbaru walaupun dikatakan dalam Release Note-nya dapat support Windows 10, nyatanya tidak, Driver dapat terisntal dan membaca USB PL2303 namun tidak dapat menjalankan perangkat pada Windows 10 (error code 10). Jadi kita disini menggunakan versi yang lebih lawas yang support dari Windows 98 sampai Windows 10.

	<a class="donlot" href="https://www.dropbox.com/s/vqb6tiog7hp9gis/IO-Cable_PL-2303_Drivers-Generic_Windows_PL2303_Prolific-reupload-JURUSANAKELEKTRO.zip?dl=0" rel="nofollow" target="_blank" title="Download">Download(.zip)</a>

2. Ekstrak file, lalu instal driver hingga selesai,
3. Konfigurasi sambungan kabel jumper dari Arduino ke USB TTL seperti gambar berikut,

	![Konfigurasi Kabel Jumper Arduino ke USB TTL](https://1.bp.blogspot.com/-oL5sU1vrjdQ/WEjC8VxzCAI/AAAAAAAAAbA/i7k_Eq7-ejQf2HzLWvrUj3JOQvnkzBMBACLcB/s1600/konfigurasi.png)

4. Sambungkan USB TTL yang sudah tersambung dengan Arduino Pro mini ke PC anda. Tunggu beberapa saat hingga proses deteksi hingga instalasi driver selesai.</li><li>Buka Software Arduino, konfigurasi Software Arduino Anda seperti berikut, jika belum download silahkan download di halaman resmi Arduino. Untuk Port tergantung dengan Port USB mana yang Anda gunakan. Disini yang tersambung dengan USB to TTL PL2303 adalah <b>PORT 8</b> dan konfigurasi boardnya juga seperti gambar dibawah ini. 

	![Konfigurasi Port](https://2.bp.blogspot.com/-GwX-SgxXc-0/WR-gattWPkI/AAAAAAAAAc4/tSRbRi_Ur7MII8kTRpLNv44lfHRQeHmtwCLcB/s1600/konfigurasiarduinoide.png)

	<a class="donlot" href="https://www.arduino.cc/en/Main/Software" rel="nofollow" target="_blank" title="download arduino software">Arduino</a>
	Percobaan untuk <i>Upload</i> program silahkan buka menu <b>File</b>&gt;<b>Examples</b>&gt;<b>Basics</b>&gt;<b>Blink</b>. Edit sedikit kode dalam program Blink tersebut dengan mengecilkan nilai <code>delay</code> dari <code>1000</code> menjadi <code>100</code>, sehingga keseluruhan kode menjadi seperti berikut, lalu Compile/Verify Sketch. 

	```arduino
	void setup() {  
	// initialize digital pin LED_BUILTIN as an output.
	pinMode(LED_BUILTIN, OUTPUT);
	}

	// the loop function runs over and over again forever
	void loop() {  
	digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
	delay(100);                       // wait for a second
	digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
	delay(100);                       // wait for a second
	}
	```
	![Konfigurasi](https://4.bp.blogspot.com/-I90sdTUgy08/WR-YPOvHE0I/AAAAAAAAAcc/Ch1hfOFqs14auGoYOgP3-asE58g7b30dwCLcB/s1600/PORTDANCOMPILE.png)	

5. Sebelum meng-upload berikut beberapa hal yang perlu anda perhatikan,<br/>
	
	 (a) Saat menekan tombol upload, tahan tombol <b>Reset</b> pada Arduino Pro mini,<br/>

	 (b) Terdapat 3 LED masing-masing T, R, dan P, Perhatikan LED dengan T pada USB to TTL PL2303, saat upload Program

	![USB to TTL](https://1.bp.blogspot.com/-8Vr_CMg1n2g/WEn-fE_smvI/AAAAAAAAAbc/j_lK6YRJCecl060rW_-Q0ePRcwX_opn7ACLcB/s1600/USB%2BTTL.png)

6. Sekarang tekan tombol Upload sambil menekan tombol Reset pada Arduino Pro mini, lalu perhatikan LED pada USB TTL perhatikan LED pada huruf T, ketika LED T berkedip silahkan Lepas tombol Reset pada Arduino Pro Mini, Patokan lainnya dapat melihat pada loading saat proses Upload, setelah menekan tombol <b>Upload</b> perhatikan loading dibawah program, saat tulisan <b>"Compiling" berubah menjadi "Uploading" lepas tombol "Reset" pada Arduino</b>. Perhatikan gambar dibawah ini. 

	![Proses Upload](https://3.bp.blogspot.com/-vJD6U4J2C5w/WR-eBYOjP7I/AAAAAAAAAcs/htU9fjjoiuonRYmRYC6K2f7LRGHw6DDbwCLcB/s1600/upload.png)

### Proses Upload Selesai
![Proses Upload Selesai](https://1.bp.blogspot.com/-V063v3ZMxQk/WR-ih_6ds1I/AAAAAAAAAdE/M4SSttxj1ngya_KqjuE2BrvorIGaJA9yQCLcB/s1600/selesai%2Bcopy.png)

### Referensi
<a href="https://answers.microsoft.com/en-us/windows/forum/windows_10-hardware/prolific-usb-to-serial-comm-port-windows-10/0a4f8e48-7135-4434-9d10-349c9ce87fcf?auth=1" rel="nofollow" target="_blank" title="Error Code 10 on Windows 10">https://answers.microsoft.com</a>
