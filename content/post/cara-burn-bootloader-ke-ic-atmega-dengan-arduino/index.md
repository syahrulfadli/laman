+++
title = "Cara Mengisi/Burn Bootloader ke IC ATmega8/168/328 dengan Arduino sebagai ISP"
date = 2017-05-26T06:59:00Z
updated = 2020-03-01T00:46:04Z
tags = ["Tutorial", "Arduino", "Pemograman"]
blogimport = true 
authors = ["Syahrul Fadli"]
aliases = [
    "/cara-burn-bootloader-ke-ic-atmega-dengan-arduino/",
    "/2017/05/burn-bootloader-ke-ic-atmega8168328.html/"
]
+++

Buat yang baru membeli sebuah IC ATmega8/168/328  pastinya IC tersebut tidak dapat langsung diisi program, kenapa? karena IC tersebut harus memiliki sebuah program pengendali yang mengatur proses input dan output dari IC itu sendiri program ini akan bekerja dibawah program pada utama. Oke disini saya akan memberikan tutorial cara Burn Bootloader ke IC ATmega8/168/328 dengan menggunakan board Arduino sebagai AVR ISP.  ## Alat dan Bahan
<ol><li>IC ATmega8/168/328,</li><li>Arduino jenis Apa saja(UNO, PRO MINI, NANO, DLL.),</li><li>Crystal 12/16Mhz,</li><li>Capasitor 22pF x2,</li><li>Project Board/BreadBoard,</li><li>Kabel Jumper sesuai kebutuhan,</li></ol>

## Langkah Kerja
<ol><li>Upload Program Arduino ISP ke Arduino yang akan digunakan dengan cara: <ul><li>Klik <b>Files</b></li><li>Klik <b>Examples</b></li><li>Pilih <b>ArduinoISP</b></li><li>Untuk yang menggunakan software Arduino IDE versi 1.0 cari baris dengan program <code>heartbeat()</code> lalu ganti nilai <code>delay(20)</code> dengan <code>delay(40)</code>. <b>Ingat hanya untuk yang menggunakan software Arduino 1.0</b> sedangkan untuk yang menggunakan arduino versi diatasnya (Arduino 1.0.1 dan seterusnya) lewati saja langkah ini.</li><li>Upload <b>ArduinoISP</b> Program ke board Arduino yang akan dijadikan ISP</li></ul></li><li>Selanjutnya Konfigurasi Software Arduino IDE seperti berikut <ul><li>Atur <b>Tools</b>>><b>Port</b> yang akan digunakan</li><li>Atur <b>Tool</b>>><b>Programmer</b>>><b>Arduino as ISP</b></li><li>Atur <b>Tools</b>>><b>Board</b>>><b>Tergantung IC yang akan diisi bootloader</b><ul><li>Jika IC yang akan diisi ATmega8 maka pilih Board <b>Arduino NG or older</b> lalu pilih Processor <b>Atmega8</b></li><li>Jika IC yang akan diisi Atmega168 maka pilih Board <b>Arduino NG or older</b> lalu pilih Processor <b>Atmega168</b></li><li>Jika IC yang akan diisi Atmega328 maka pilih Board <b>Arduino/Genuino Uno</b></li></ul></li></ul></li><li>Susun sambungan IC dengan Arduino seperti gambar berikut {{< img alt="Konfigurasi" src="BurnBootloader.png" width="650" >}}</li><li>Klik <b>Tools</b>>><b>Burn Bootloader</b>{{< img alt="Konfigurasi" src="bootloader.png" width="509" >}}

Jika Sudah selesai akan tampil seperti berikut tanpa ada pesan error di konsol software Arduino IDE 

{{< img alt="Konfigurasi" src="bootloaderselesai.png" width="509" >}}</li></li></ol>

Dengan cara yang sama anda juga dapat me-Upload program langsung ke Mikrokontroller target yang sudah diisi bootloader tadi, dengan menggunakan fitur "Upload Using Programmer" yang berada pada toolbar <b>Sketch</b>>><b>Upload Using Programmer</b> atau langsung dengan tombol kombinasi <kbd><kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>U</kbd></kbd>. <br/><br/>Sekian dari saya dan Terimakasih.
