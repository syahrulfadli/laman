+++
title = "Cara Install Wine di Arch Linux"
date = 2020-04-05T18:04:00Z
updated = 2020-04-25T16:58:19Z
tags = ["Linux", "Tutorial", "Arch"]
blogimport = true
hero = "/upload/cover-arch-linux.jpg"
authors = ["Syahrul Fadli"]
aliases = [
    "/cara-install-wine-di-arch-linux/",
    "/2020/04/cara-install-wine-di-arch-linux.html"
]
+++

Nama Wine diambil dari akronim "*Wine Is Not an Emulator*". Ya! ini bukan emulator yang **menjalankan OS Windows di Linux** melainkan sebuah program yang mempunyai kompatibilitas untuk menjalankan **program Windows di Linux**.

## Cara Install Wine di Arch Linux
### 1. Setting multilib
Kita harus *enable* multilib repository karena di repo multilib terdapat software 32-bit seperti wine, steam, dll. Caranya dengan edit kode file di `/etc/pacman.conf` lalu cari dan *uncomment* baris kode `[multilib]` sehingga menjadi seperti di bawah ini. 
{{<highlight bash >}}
[multilib]
Include = /etc/pacman.d/mirrorlist
{{</highlight>}}

### 2. Update Repo
Jalankan perintah berikut: 
{{<highlight bash >}}
$ sudo pacman -Syy
{{</highlight>}}

### 3. Install Wine
Jalankan perintah berikut untuk *install* Wine yang versi stabil.
{{<highlight bash >}}
$ sudo pacman -S wine
{{</highlight>}}

Untuk *install* Wine versi *testing*/uji coba jalankan perintah di bawah ini. 

{{<highlight bash >}}
$ sudo pacman -S wine-staging
{{</highlight>}}

Sekian tutorial [Cara Install Wine di Arch Linux](https://www.syahrulfadli.com/2020/04/cara-install-wine-di-arch-linux.html), semoga bermanfaat.

### Rujukan
<a title="Wine - ArchWiki" target="_blank" rel="nofollow" href="https://wiki.archlinux.org/index.php/Wine">Wine - ArchWiki</a>
<br/>
<a title="Official repositories - ArchWiki" target="_blank" rel="nofollow" href="https://wiki.archlinux.org/index.php/Official_repositories#multilib">Official repositories - ArchWiki</a>

