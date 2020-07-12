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

<a title="Download" class="donlot" href="https://www.dropbox.com/s/hwd33768rfjluep/Winflash_Win10_64_VER325.zip?dl=0" target="_blank" rel="nofollow">Asus WinFlash Version 325 x64 (.zip)</a>

Kenapa tidak langsung lewat BIOS? Karena sebenarnya pengguna sangat tidak diperkenankan untuk melakukan <i>Downgrade </i> BIOS sehingga ketika proses Flash via BIOS, ketika kita telah memilih versi yang lebih lawas dari versi yang telah ter-install maka akan muncul pemberitahuan bahwa kita tidak dapat melakukan flashing BIOS karena versi yang akan di flash lebih lawas dari versi BIOS yang sudah ter-instal sebelumnya. Sebelum melakukan langkah-langkah selanjutnya tolong pahami beberapa poin dibawah ini. 

1. Melakukan Downgrade sangat tidak dianjurkan,
2. Penulis tidak bertanggung jawab atas kerusakan yang mungkin bisa terjadi setelah melakukan tutorial ini,
3. Pengguna menyadari bahaya dan konsekuensi dari tindakan yang akan dilakukan, 
4. Mungkin tidak semua versi BIOS dan atau Motherboard kompatibel dengan tutorial ini,
5. Pada tutorial ini saya menganggap Anda sebagai pengguna tingkat lanjut yang sudah paham mengenai dasar-dasar pengoperasian sistem Windows.

## Langkah-langkah Downgrade BIOS Asus dengan WinFlash

1. Install software Asus WinFlash.
2. Setelah instalasi selesai. Buka direktori program dari Asus WinFlash, contoh: *C:\Program Files (x86)\ASUS\WinFlash*
3. Tekan sekali pada aplikasi WinFlash lalu tekan tombol <kbd>shift+klik kanan</kbd>, pilih "Copy as path" (gambar dibawah menggunakan Windows versi Bahasa Indonesia)
4. Buka aplikasi CMD (Command Prompt)

    ![Copy as path](https://2.bp.blogspot.com/-1MGX6g1RVlc/W-0xCkxETnI/AAAAAAAAAtA/BSrqfIis-gg-zFlLTMHR2zJZJO7Wy79_ACLcBGAs/s1600/2.jpg)

5. Paste, `ctrl+v`, pada Windows 10 cukup klik kanan. maka akan muncul alamat direktori instalasi dari WinFlash.

    ![ctrl v](https://1.bp.blogspot.com/-L2XZEjBb1R8/W-0xR4BO4wI/AAAAAAAAAtE/D6fdg1AqaKAIX_zsOU72iytuwIaVCkCvACLcBGAs/s1600/3.jpg)

6. Tambahkan perintah `/nodate`, lalu tekan enter maka akan terbuka aplikasi WinFlash.

    ![perintah nodate](https://1.bp.blogspot.com/-0XjGG-2hSFQ/W-0zCJn4IfI/AAAAAAAAAtk/3Rp4FCk9M1wQnqiEhJH39yphD9o_DmOMgCLcBGAs/s1600/4.jpg)

7. Pastikan laptop Anda dalam kondisi *charging* selama proses <i>flashing </i>BIOS.
8. Setelah Aplikasi WinFlash Terbuka Klik "Next".

    ![Aplikasi winflash](https://2.bp.blogspot.com/-OOPyG5NmpVU/W-0zh_tyFuI/AAAAAAAAAt4/YopXbD6cMZM7ddFf7NqqdCxWfdOI_mBwgCLcBGAs/s1600/5.jpg)

9. Klik "Get BIOS from Device.

    ![Pilih Get BIOS from Device](https://3.bp.blogspot.com/-r4Gp2zPvOcQ/W-0z0foOi8I/AAAAAAAAAuA/431MNOkMMDwZ3QYU7OBhyHTAQXNcbNpsQCLcBGAs/s1600/6.jpg)
    
10. Pilih file BIOS yang sudah Anda download dari website Asus. Pada tutorial ini file yang digunakan adalah "E203MAH-AS.302".

    ![Pilih Firmware BIOS](https://3.bp.blogspot.com/-QYnPb1jkaD0/W-00C-UGkyI/AAAAAAAAAuE/CaP7hn7RLjAO3sTFHnz8tYiU-SWwSOKLgCLcBGAs/s1600/7.jpg)

11. Klik "Update". Tunggu hingga proses selesai lalu tekan "Exit". Komputer akan <i>Restart </i>dan akan melanjutkan proses flash BIOS via BIOS mode.
    
    ![Update BIOS](https://4.bp.blogspot.com/-aTB1AvqZCm4/W-00iYT878I/AAAAAAAAAuQ/5zfw5eN-rZUicXdpBd4qOu_g55rPWNJPQCLcBGAs/s1600/8.jpg)

12. Tunggu hingga proses <i>flashing </i>selesai. Komputer akan <i>restart </i>beberapa kali usai proses <i>flashing </i>BIOS selesai.

Demikian tutorial Cara <i>Downgrade </i>BIOS Asus dengan Winflash semoga bermanfaat.  