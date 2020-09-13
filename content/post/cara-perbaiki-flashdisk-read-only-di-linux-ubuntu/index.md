+++
title = "Cara Perbaiki Flashdisk Read-Only di Linux Ubuntu"
date = 2020-02-29T23:04:00Z
updated = 2020-03-01T19:36:25Z
tags = ["Linux", "Tutorial"]
blogimport = true 
hero = ["/upload/cover-usb.jpg"]
authors = ["Syahrul Fadli"]
aliases = [
    "/cara-upload-program-ke-arduino-pro-mini-dengan-usb-to-ttl-pl2303/",
    "/2017/05/upload-program-ke-arduino-pro-mini.html/"
]
robotsdisallow = false
+++

[Tutorial](/tags/Tutorial) memperbaiki Flashdisk/USB Drive read-only ini dapat digunakan di Ubuntu, elementaryOS, Arch, Debian dan distribusi/distro [Linux](/tags/Linux) lainnya.

Gejala dari flashdisk yang file sistemnya permission read-only adalah pengguna tidak bisa mem-paste file dari komputer ke flashdisk.

## Solusi
1. Buka terminal dan masuk sebagai root dengan ketik perintah:
{{<highlight bash>}}
	$ sudo su
{{</highlight>}}

2. Pilih partisi flashdisk yang akan diperbaiki, untuk melihat list partisi yang terhubung dengan komputer gunakan perintah <code>fdisk -l</code> dalam mode root, berikut contoh output dari perintah tersebut di komputer saya.
{{<highlight bash>}}
root@syahrul-pc:/home/syahrul# fdisk -l
	Disk /dev/sda: 465,8 GiB, 500107862016 bytes, 976773168 sectors
	Units: sectors of 1 * 512 = 512 bytes
	Sector size (logical/physical): 512 bytes / 4096 bytes
	I/O size (minimum/optimal): 4096 bytes / 4096 bytes
	Disklabel type: gpt
	Disk identifier: 430EDA3F-C12E-4688-B031-17ED4AF15788
	Device         Start       End   Sectors   Size Type
	/dev/sda1       2048    923647    921600   450M Windows recovery environment
	/dev/sda2    1128448   1161215     32768    16M Microsoft reserved
	/dev/sda3    1161216 121239551 120078336  57,3G Microsoft basic data
	/dev/sda4  121239552 122879999   1640448   801M Windows recovery environment
	/dev/sda5  122882048 448102398 325220351 155,1G Microsoft basic data
	/dev/sda6  448102400 464486399  16384000   7,8G Linux swap
	/dev/sda7  464486400 465534975   1048576   512M EFI System
	/dev/sda8  465534976 552962047  87427072  41,7G Linux filesystem
	/dev/sda9  552962048 892884990 339922943 162,1G Microsoft basic data
	/dev/sda10 892884992 913854463  20969472    10G Microsoft basic data
	/dev/sda11 913856512 934828031  20971520    10G Linux filesystem<br />/dev/sda12 934828032 976773119  41945088    20G Linux filesystem
	
	
	Disk /dev/sdb: 28,9 GiB, 31001149440 bytes, 60549120 sectors
	Units: sectors of 1 * 512 = 512 bytes
	Sector size (logical/physical): 512 bytes / 512 bytes
	I/O size (minimum/optimal): 512 bytes / 512 bytes
	Disklabel type: dos
	Disk identifier: 0x00000000
	{{</highlight>}}
Pada hasil output diatas, flashdisk saya (yang akan kita perbaiki) ada pada partisi disk `/dev/sdb`.

3. Selanjutnya, ketik perintah berikut `fsck -a /dev/sdX`,  dimana `X` adalah partisi disk flashdisk, misalnya pada kasus saya partisinya adalah `/dev/sdb`. Sehingga perintah yang saya gunakan untuk kasus saya adalah sebagai berikut: 

	{{<highlight bash>}}
	# fsck -a /dev/sdb
	{{</highlight>}}

Untuk permasalahan yang saya hadapi perintah `fsck` menjadi solusinya. `fsck` adalah perintah untuk memperbaiki file sistem di linux sedang parameter `-a` adalah opsi *auto-repair* untuk perintah `fsck`. Cara ini tidak akan men-format flashdisk Anda.

Sekian tutorial [Cara Perbaiki Flashdisk Read-Only di Linux Ubuntu](/post/cara-perbaiki-flashdisk-read-only) semoga bermanfaat.