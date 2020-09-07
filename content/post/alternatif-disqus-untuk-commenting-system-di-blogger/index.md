---
title: "Hyvor Talk, Alternatif Disqus untuk Commenting System Blogger"
date: 2020-09-05T06:34:41+08:00
hero: ["/upload/comments.jpg"]
excerpt: Alternatif untuk Disqus commenting-sytem.
draft: false
authors: ["Syahrul Fadli"]
tags: ["Alternatif","Tutorial"]
---

Semenjak diluncurkan pada 2007, Disqus mulai populer di kalangan blogger karena saat itu kompetisi pasar untuk Disqus masih sangat rendah.

Disqus memberi layanan gratis yang kaya akan fitur seperti *reaction*, *emoticon*, GIF dan kemudahan instalasi di berbagai situs membuat Disqus banyak digunakan.

## Alasan Meninggalkan Disqus

Tentu Disqus bukannya tanpa kekurangan, setidaknya ada tiga alasan yang akan saya berikan untuk meninggalkan Disqus saat ini.

1. **Memberatkan *loading* situs**, jika kamu mengecek kecepatan loading blog kamu menggunakan Google Pagespeed Insight atau GTmetrix, perbedaan skor antara menggunakan Disqus dan tanpa Disqus sangat signifikan.
   {{< img alt="Skor Google Pagespeed Insight tanpa Disqus" src="pagespeed-tanpa-disqus.jpg"  caption="Skor Google Pagespeed Insight tanpa Disqus" min-height="178px" >}}
   {{< img alt="Skor Google Pagespeed Insight dengan Disqus" src="pagespeed-dengan-disqus.jpg" caption="Skor Google Pagespeed Insight dengan Disqus" min-height="175px" >}}
   {{< img alt="Skor GTmetrix tanpa Disqus" src="gtmetrix-tanpa-disqus.jpg" caption="Skor GTmetrix tanpa Disqus" min-height="230px" >}}
   {{< img alt="Skor GTmetrix dengan Disqus" src="gtmetrix-dengan-disqus.jpg" caption="Skor GTmetrix dengan Disqus" min-height="232px" >}}
   
2. **Iklan**, ada alasan kenapa Disqus gratis. Untuk menghilangkan iklan ini tentu kamu harus *upgrade* akun. Biaya langganan termurah Disqus adalah 9 dollar per bulan.

3. **Privasi**, pada akhir 2017 Disqus menjadi bagian dari perusahaan Zeta Global[^1]. Perusahaan yang bergerak dibidang marketing. Ada kekhawatiran dari banyak pengguna soal data pengguna Disqus yang akan jadi produk dari Zeta Global.
   
Meski Disqus di blognya menegaskan mereka tidak akan mengubah fundamental mereka terhadap produknya. Tetap ada kekhawatian terhadap posisi Zeta Global sebagai bagian dari Disqus saat ini.

[^1]:Disqus and Zeta - [blog.disqus.com](https://blog.disqus.com/disqus-and-zeta)

## [Hyvor Talk](https://talk.hyvor.com?aff=9330) 

Alternatif saat ini yang "*Disqus-like*" *commenting system* adalah Hyvor Talk. Fitur yang diberikan hampir sama dengan yang ditawarkan oleh Disqus seperti, *reaction*, GIF, downvotes/upvotes juga tersedia.

### Kelebihan

* ***Privacy-focused***, mereka meng-klaim tidak menjual data pengguna kepada pihak ketiga ataupun dan *tracking* pengunjung.
  
* **Terjangkau**, biaya langganan lebih murah dibanding Disqus. Biaya langganan mulai dari 5 dollar lebih murah dibanding "bussiness plan" mlik Disqus.
  
* **Dapat dikostumisasi lebih banyak**, Hyvor Talk menawarkan kostumisasi lebih dibanding Diqus. Mulai dari warna hingga tampilan kolom komentar dapat di kostumisasi.
  
* **Lebih cepat**, beban *loading* situs lebih kecil dibandingkan dengan Disqus. Kamu masih bisa mengecilkan lagi beban loading Hyvor Talk dengan mengaktifkan fitur *lazy-load*-nya.
  
  Berikut hasil skor dari analisis menggunakan GTMetrix dan Google Pagespeed Insight (tanpa mengaktifkan fitur *lazy-load*).

{{< img alt="Skor Google Pagespeed Insight dengan Hyvor Talk" src="pagespeed-dengan-hyvor.jpg" min-height="175px" caption="Skor Google Pagespeed Insight dengan Hyvor Talk" >}}
  {{< img alt="Skor GTmetrix dengan Hyvor Talk" src="gtmetrix-dengan-hyvor.jpg" min-height="230px" caption="Skor GTmetrix dengan Hyvor Talk" >}}

### Kekurangan

* ***No Free Plan***, tidak ada Free Plan tersedia, namun kamu tetap bisa melakukan uji coba selama 14 hari.
* ***Reaction* fitur**, *reaction* fitur tidak dapat merekam data tanpa akun. Jadi agar *reaction* kamu terekam, kamu harus login dulu.

## Cara Pasang Hyvor di Situs Kamu

1. Buka situs [Hyvor Talk](https://talk.hyvor.com?aff=9330),

2. Klik "**Install Hyvor Talk**",
   {{< img alt="Klik Install Hyvor Talk" src="langkah2.jpg" >}}

3. Buat akun untuk Hyvor Talk, Kamu juga bisa login dengan akun Google, Facebook, atau Twitter. Disini saya akan memberi contoh cara membuat akun pada Hyvor Talk. Klik "**SIGN UP**" jika sudah mengisi semua kolom yang dibutuhkan, seperti gambar dibawah,
   {{< img alt="Isi kolom dan klik Sign Up" src="langkah3.jpg" width="625px" >}}

4. Verifikasi reCaptcha,
   {{< img alt="Verifikasi reCaptcha" src="langkah4.jpg" width="616px" >}}

5. Setelah itu kamu akan dikirimi kode 6 digit kode konfirmasi ke email kamu, Masukan kode tersebut ke kolom yang tersedia lalu klik "**CONFIRM**",
   {{< img alt="masukan kode konfirmasi" src="langkah5.jpg" width="622px" >}}

6. Klik "**CONTINUE**" untuk lanjut ke tahap instalasi, sampai disini kamu sudah mempunyai akun dengan uji semua fitur Hyvor Talk selama 14 hari,
   {{< img alt="Klik Continue" src="langkah6.jpg" width="619px" min-height="194px" >}}

7. Masukan nama situs dan domain URL website kamu tanpa **www** ataunpun **http://**,
   {{< img alt="Klik masukan nama situs dan URL situs" src="langkah7.jpg" width="829px" >}}

8. Pilih metode instalasi berdasarkan *platform* situs kamu. Agar tutorial lebih umum dan dapat diikuti oleh semua *platform*  maka saya pilih "**Manual Installation**",
   {{< img alt="Pilih Manual Installation" src="langkah8.jpg" width="831px" >}}

9. *Copy* kode yang sudah disediakan, lalu letakan ke bagian situs kamu yang ingin ditampilkan komentar,
   {{< img alt="Copy kode yang tersedia" src="langkah9.jpg" width="796px" >}}


   Untuk mengaktifkan fitur *lazy-load*, tambahkan kode `loadMode: 'scroll'`, didalam variabel `HYVOR_TALK_CONFIG`[^2] sehingga kode menjadi seperti berikut,

   ```html
   <div id="hyvor-talk-view"></div>
   <script type="text/javascript">
       var HYVOR_TALK_WEBSITE = 1890; // ID unik kamu
       var HYVOR_TALK_CONFIG = {
           url: false,
           id: false,
           loadMode: 'scroll',
       };
   </script>
   <script async type="text/javascript" src="//talk.hyvor.com/web-api/embed"></script>
   ```

10. Simpan perubahan pada situs kamu.

Saat artikel ini dibuat saya sudah menerapkan Hyvor Talk sebagai *commenting system* di blog ini.

Untuk jaga-jaga kalau saya sudah tidak menggunakan Hyvor Talk lagi silahkan lihat dibawah ini untuk contoh tampilan, atau kunjungi link [ini](https://cara-abcxyz.blogspot.com/2019/01/cara-membuat-artikel-anti-copy-paste.html).

 {{< img alt=" yang tersedia" src="tampilan2020.jpg" >}}

Sekian, artikel ini semoga bermanfaat.

[^2]: Embed Code - [talk.hyvor.com](https://talk.hyvor.com/docs/code#usingloadingmodes)