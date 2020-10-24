---
title: "Cara Install Microsoft Edge di Ubuntu"
date: 2020-10-24T13:25:10+08:00
hero: ["/upload/Ms-edge.jpg"]
excerpt: Tutorial cara install Microsoft Edge Dev di Ubuntu 20.04
authors: ["Syahrul Fadli"]
tags: ["Linux", "Ubuntu", "Tutorial"]
draft: false
robotsdisallow: false
imgattr: 
imgattrlink: 
---



Sesuatu yang baru sering kali membuat orang penasaran atau antusias terlepas dari baik buruknya hal baru tersebut.

Saat pertama kali Edge merilis basisnya menjadi chromium saya juga antusias dan langsung install di OS Windows 10 saya.

Di Windows 10 Microsoft Edge dengan basis chromium ini memiliki performa yang (jauh) lebih baik dengan Google Chrome dan tentu lebih *reliable* dari Microsoft Edge dengan versi sebelum menggunakan basis chromium.

Setelah Microsoft merilis Edge untuk Linux, menjadi pertanyaan apakah performanya lebih baik dibanding dengan Google Chrome di Ubuntu? Entahlah 😅️, karena saya sendiri tidak meng-*install* Google Chrome di Ubuntu saya, Saya lebih memilih Firefox dan browser dengan chromium *base* lainnya &mdash; Brave Browser.

Jadi jika kamu pengguna Google Chrome di Linux, mungkin bisa share tentang performa Edge vs Google Chrome di Linux di kolom komentar.

**Catatan**: Tutorial ini akan *install* **Microsoft Edge Dev Channel**. Dan saya menggunakan Ubuntu 20.04.

## Langkah Install Microsoft Edge di Ubuntu

1. Buka website [Microsoft Edge Insider](https://www.microsoftedgeinsider.com/en-us/),

2. Download paket instalasi dengan meng-klik "for Linux (.deb)",

   {{< img src="tahap1.jpg" alt="Klik for Linux .deb" >}}

3. Setelah itu akan muncul *Terms License & Privacy Statment* yang tidak akan pernah kita baca, klik "Accept and download",

   {{< img src="tahap2.jpg" alt="Klik Accept and download" >}}

4. Setelah selesai *download*, klik dua kali paket instalasi yang sudah di-*download*,

   {{< img src="tahap3.jpg" alt="Klik dua kali file yang sudah didownload" >}}

5. Klik "Install",

   {{< img src="tahap4.jpg" alt="Klik install" >}}

6. Masukan kata sandi.

   {{< img src="tahap5.jpg" alt="Masukan kata sandi" >}}

7. Selesai.

## Langkah Install Microsoft Edge di Ubuntu via *Command Line* (Terminal)

1. Buka Terminal <kbd><kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>T</kbd></kbd>,

2. Download GPG Microsoft,

   ```bash
   curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
   ```

3. Install GPG Microsoft,

   ``` bash
   sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/
   ```

4. Tambahkan repositori Microsoft Edge,

   ```bash
   sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list'
   ```

5. Hapus GPG di direktori saat ini,

   ```bash
   sudo rm microsoft.gpg
   ```

6. *Update* repositori,

   ```bash
   sudo apt update
   ```

7. Install Microsoft Edge,

   ```bash
   sudo apt install microsoft-edge-dev
   ```

8. Selesai.

Semoga bermanfaat.