+++
title = "Cara Downgrade BIOS Asus dengan Winflash"
date = 2018-11-15T16:38:00Z
updated = 2020-04-06T10:57:16Z
tags = ["Tutorial", "Windows"]
hero = "https://4.bp.blogspot.com/-TZ8vaJN-buI/XoqoOj49FzI/AAAAAAAAAU4/HSG8iyMXjpspJUe3zImYab6cRcn00PdqQCLcBGAsYHQ/s1600/bios%2Basus.webp"
blogimport = true 
authors = ['Syahrul Fadli']
+++

Kenapa <i>Downgrade</i> BIOS? Banyak alasan yang mendasari kenapa seorang pengguna melakukan <i>Downgrade</i> setelah sebelumnya pengguna melakukan <i>Upgrade</i>. Dari isu komsumsi baterai, fitur-fitur pada Operasi sistem tidak berjalan semestinya setelah melakukan <i>Upgrade</i> dan masalah-masalah Hardware lainnya yang muncul setelah melakukan <i>Upgrade</i> BIOS.

Alasan penulis sendiri untuk <i>Downgrade</i> adalah masalah <i>Overheating</i> CPU setelah melakukan <i>Upgrade</i> BIOS. Perangkat uji coba yang saya gunakan adalah Asus Notebook E203MAH dengan rincian spesifikasi sebagai berikut.
* RAM 2GB LPDDR4
* CPU Intel Celeron N4000, 1.10GHz - Gemini Lake
* Merek Motherboard American Megatrends
* Versi BIOS 304
* Asus EZ Flash V3
* Windows 10 Build 1803 x64

Dari spesifikasi diatas tercantum versi BIOS 304 yang merupakan kondisi setelah penulis melakukan <i>Upgrade </i>dari versi BIOS 302. Pada tutorial ini saya akan melakukan <i>Downgrade</i> dari versi BIOS 304 ke 302. Software bantuan yang akan kita gunakan untuk mem-flash firmware BIOS adalah Asus WinFlash. Tentunya pastikan Anda mempunyai Firmware BIOS yang tepat sesuai model perangkat Anda. Firmware BIOS, driver dan software pendukung dari Asus dapat Anda download langsung dari website resmi <a href='http://www.asus.com/support/download-center' title='Asus Download Center' target="_blank" rel="nofollow">Asus Download Center</a>.

<a title="Download" class="donlot" href="https://www.dropbox.com/s/hwd33768rfjluep/Winflash_Win10_64_VER325.zip?dl=0" target="_blank" rel="nofollow">Asus WinFlash Version 325 x64 (.zip)</a>

Kenapa tidak langsung lewat BIOS? Karena sebenarnya pengguna sangat tidak diperkenankan untuk melakukan <i>Downgrade </i> BIOS sehingga ketika proses Flash via BIOS, ketika kita telah memilih versi yang lebih lawas dari versi yang telah ter-install maka akan muncul pemberitahuan bahwa kita tidak dapat melakukan flashing BIOS karena versi yang akan di flash lebih lawas dari versi BIOS yang sudah ter-instal sebelumnya. Sebelum melakukan langkah-langkah selanjutnya tolong pahami beberapa poin dibawah ini. 

1. Melakukan Downgrade sangat tidak dianjurkan,
2. Penulis tidak bertanggung jawab atas kerusakan yang mungkin bisa terjadi setelah melakukan tutorial ini,
3. Pengguna menyadari bahaya dan konsekuensi dari tindakan yang akan dilakukan, 
4. Mungkin tidak semua versi BIOS dan atau Motherboard kompatibel dengan tutorial ini,
5. Pada tutorial ini saya menganggap Anda sebagai pengguna tingkat lanjut yang sudah paham mengenai dasar-dasar pengoperasian sistem Windows.

## Langkah-langkah Downgrade BIOS Asus dengan WinFlash

1. Install software Asus WinFlash.
2. Setelah instalasi selesai. Buka direktori program dari Asus WinFlash, contoh:<i>C:\Program Files (x86)\ASUS\WinFlash<i></i></i>
3. Tekan sekali pada aplikasi WinFlash lalu tekan tombol <code>shift+klik kanan</code>, pilih "Copy as path" (gambar dibawah menggunakan Windows versi Bahasa Indonesia)
4. Buka aplikasi CMD (Command Prompt)
<img alt="Command Prompt" height="768" layout="responsive" lightbox src="https://2.bp.blogspot.com/-1MGX6g1RVlc/W-0xCkxETnI/AAAAAAAAAtA/BSrqfIis-gg-zFlLTMHR2zJZJO7Wy79_ACLcBGAs/s1600/2.jpg" tabindex="0" width="1366"/>
5. Paste, <code>ctrl+v</code>, pada Windows 10 cukup klik kanan. maka akan muncul alamat direktori instalasi dari WinFlash.
<img alt="Command Prompt" height="768" layout="responsive" lightbox src="https://1.bp.blogspot.com/-L2XZEjBb1R8/W-0xR4BO4wI/AAAAAAAAAtE/D6fdg1AqaKAIX_zsOU72iytuwIaVCkCvACLcBGAs/s1600/3.jpg" tabindex="0" width="1366"/>
6. Tambahkan perintah <code>/nodate</code>, lalu tekan enter maka akan terbuka aplikasi WinFlash.
<img alt="perintah /nodate" height="768" layout="responsive" lightbox src="https://1.bp.blogspot.com/-0XjGG-2hSFQ/W-0zCJn4IfI/AAAAAAAAAtk/3Rp4FCk9M1wQnqiEhJH39yphD9o_DmOMgCLcBGAs/s1600/4.jpg" tabindex="0" width="1366"/>
7. Pastikan laptop Anda dalam kondisi <i>charging</i> selama proses <i>flashing </i>BIOS.
8. Setelah Aplikasi WinFlash Terbuka Klik "Next".
<img alt="Aplikasi WinFlash" height="768" layout="responsive" lightbox src="https://2.bp.blogspot.com/-OOPyG5NmpVU/W-0zh_tyFuI/AAAAAAAAAt4/YopXbD6cMZM7ddFf7NqqdCxWfdOI_mBwgCLcBGAs/s1600/5.jpg" tabindex="0" width="1366"/>
9. Klik "Get BIOS from Device.
<img alt="Pilih Get BIOS from Device" height="768" layout="responsive" lightbox src="https://3.bp.blogspot.com/-r4Gp2zPvOcQ/W-0z0foOi8I/AAAAAAAAAuA/431MNOkMMDwZ3QYU7OBhyHTAQXNcbNpsQCLcBGAs/s1600/6.jpg" tabindex="0" width="1366"/>
10. Pilih file BIOS yang sudah Anda download dari website Asus. Pada tutorial ini file yang digunakan adalah "E203MAH-AS.302".
<img alt="Pilih Firmware BIOS" height="768" layout="responsive" lightbox src="https://3.bp.blogspot.com/-QYnPb1jkaD0/W-00C-UGkyI/AAAAAAAAAuE/CaP7hn7RLjAO3sTFHnz8tYiU-SWwSOKLgCLcBGAs/s1600/7.jpg" tabindex="0" width="1366"/>
11. Klik "Update". Tunggu hingga proses selesai lalu tekan "Exit". Komputer akan <i>Restart </i>dan akan melanjutkan proses flash BIOS via BIOS mode.
<img alt="Update BIOS" height="768" layout="responsive" lightbox src="https://4.bp.blogspot.com/-aTB1AvqZCm4/W-00iYT878I/AAAAAAAAAuQ/5zfw5eN-rZUicXdpBd4qOu_g55rPWNJPQCLcBGAs/s1600/8.jpg" tabindex="0" width="1366"/>
12. Tunggu hingga proses <i>flashing </i>selesai. Komputer akan <i>restart </i>beberapa kali usai proses <i>flashing </i>BIOS selesai.

Demikian tutorial Cara <i>Downgrade </i>BIOS Asus dengan Winflash semoga bermanfaat.  

