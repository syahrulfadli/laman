+++
title = "Cara Downgrade BIOS Asus dengan Winflash"
date = 2018-11-15T16:38:00Z
updated = 2020-04-06T10:57:16Z
tags = ["Tutorial", "Windows"]
hero = "https://4.bp.blogspot.com/-TZ8vaJN-buI/XoqoOj49FzI/AAAAAAAAAU4/HSG8iyMXjpspJUe3zImYab6cRcn00PdqQCLcBGAsYHQ/s1600/bios%2Basus.webp"
blogimport = true 
authors = ['Syahrul Fadli']
+++

Kenapa *Downgrade* BIOS? Banyak alasan yang mendasari kenapa seorang pengguna melakukan *Downgrade* setelah sebelumnya pengguna melakukan *Upgrade*. Dari isu komsumsi baterai, fitur-fitur pada Operasi sistem tidak berjalan semestinya setelah melakukan *Upgrade* dan masalah-masalah Hardware lainnya yang muncul setelah melakukan *Upgrade* BIOS.

Alasan penulis sendiri untuk *Downgrade* adalah masalah *Overheating* CPU setelah melakukan *Upgrade* BIOS. Perangkat uji coba yang saya gunakan adalah Asus Notebook E203MAH dengan rincian spesifikasi sebagai berikut.
* RAM 2GB LPDDR4
* CPU Intel Celeron N4000, 1.10GHz - Gemini Lake
* Merek Motherboard American Megatrends
* Versi BIOS 304
* Asus EZ Flash V3
* Windows 10 Build 1803 x64

Dari spesifikasi diatas tercantum versi BIOS 304 yang merupakan kondisi setelah penulis melakukan *Upgrade* dari versi BIOS 302. Pada tutorial ini saya akan melakukan *Downgrade* dari versi BIOS 304 ke 302. Software bantuan yang akan kita gunakan untuk mem-flash firmware BIOS adalah Asus WinFlash. Tentunya pastikan Anda mempunyai Firmware BIOS yang tepat sesuai model perangkat Anda. Firmware BIOS, driver dan software pendukung dari Asus dapat Anda download langsung dari website resmi <a href='http://www.asus.com/support/download-center' title='Asus Download Center' target="_blank" rel="nofollow">Asus Download Center</a>.



{{< download href="https://www.dropbox.com/s/hwd33768rfjluep/Winflash_Win10_64_VER325.zip?dl=0" title="Asus WinFlash Version 325 x64 (.zip)" >}}

Kenapa tidak langsung lewat BIOS? Karena sebenarnya pengguna sangat tidak diperkenankan untuk melakukan <i>Downgrade </i> BIOS sehingga ketika proses Flash via BIOS, ketika kita telah memilih versi yang lebih lawas dari versi yang telah ter-install maka akan muncul pemberitahuan bahwa kita tidak dapat melakukan flashing BIOS karena versi yang akan di flash lebih lawas dari versi BIOS yang sudah ter-instal sebelumnya. Sebelum melakukan langkah-langkah selanjutnya tolong pahami beberapa poin dibawah ini. 

1. Melakukan Downgrade sangat tidak dianjurkan,
2. Penulis tidak bertanggung jawab atas kerusakan yang mungkin bisa terjadi setelah melakukan tutorial ini,
3. Pengguna menyadari bahaya dan konsekuensi dari tindakan yang akan dilakukan, 
4. Mungkin tidak semua versi BIOS dan atau Motherboard kompatibel dengan tutorial ini,
5. Pada tutorial ini saya menganggap Anda sebagai pengguna tingkat lanjut yang sudah paham mengenai dasar-dasar pengoperasian sistem Windows.
## Langkah-langkah Downgrade BIOS Asus dengan WinFlash

1. Install software Asus WinFlash.
2. Setelah instalasi selesai. Buka direktori program dari Asus WinFlash, contoh: *C:\Program Files (x86)\ASUS\WinFlash*
3. Tekan sekali pada aplikasi WinFlash lalu tekan tombol <kbd><kbd>shift</kbd>+<kbd>klik kanan</kbd></kbd>, pilih "Copy as path" (gambar dibawah menggunakan Indonesia)

    {{< img src="/upload/1" type="jpg" alt="copy as path" caption="" >}}

4. Buka aplikasi CMD (Command Prompt)
5. Paste, <kbd><kbd>ctrl</kbd>+<kbd>v</kbd></kbd>, pada Windows 10 cukup klik kanan. maka akan muncul alamat direktori instalasi dari WinFlash.

    {{< img src="/upload/3" type="jpg" alt="ctrl + v" caption="" >}}

6. Tambahkan perintah `/nodate`, lalu tekan enter maka akan terbuka aplikasi WinFlash.

    {{< img src="/upload/4" type="jpg" alt="ketik /nodate" caption="" >}}

7. Pastikan laptop Anda dalam kondisi *charging* selama proses <i>flashing </i>BIOS.
8. Setelah Aplikasi WinFlash Terbuka Klik "Next".

    {{< img src="/upload/5" type="jpg" alt="klik next" caption="" >}}

9. Klik "Get BIOS from Device.

    {{< img src="/upload/6" type="jpg" alt="klik get bios from device" caption="" >}}
    
10. Pilih file BIOS yang sudah Anda download dari website Asus. Pada tutorial ini file yang digunakan adalah "E203MAH-AS.302".

    {{< img src="/upload/7" type="jpg" alt="pilih file driver bios" caption="" >}}

11. Klik "Update". Tunggu hingga proses selesai lalu tekan "Exit". Komputer akan <i>Restart </i>dan akan melanjutkan proses flash BIOS via BIOS mode.
    
    {{< img src="/upload/8" type="jpg" alt="klik update bios" caption="" >}}

12. Tunggu hingga proses <i>flashing </i>selesai. Komputer akan <i>restart </i>beberapa kali usai proses <i>flashing </i>BIOS selesai.

Demikian tutorial Cara <i>Downgrade </i>BIOS Asus dengan Winflash semoga bermanfaat.  