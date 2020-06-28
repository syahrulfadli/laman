+++
title = "Cara Install Wine di Arch Linux"
date = 2020-04-05T18:04:00Z
updated = 2020-04-25T16:58:19Z
tags = ["Linux", "Tutorial", "Arch"]
blogimport = true 
[author]
	name = "Syahrul Fadli"
	uri = "https://www.blogger.com/profile/04450857998543211448"
+++

<div class="thumb-post"><noscript><img alt="Cara Install Wine di Arch Linux" height="400" src="https://2.bp.blogspot.com/-pFX63Kh3b50/Xom26PgNbwI/AAAAAAAABIo/WiBO3EwXIUwR6TrehVVJpq00m2t8E4J_ACLcBGAsYHQ/s1600/cara%2Binstall%2Bwine%2Bdi%2Barch%2Blinux.webp" width="600"/></noscript></div> <p>Nama Wine diambil dari akronim "<i>Wine Is Not an Emulator</i>". Ya! ini bukan emulator yang <b>menjalankan OS Windows di Linux</b> melainkan sebuah program yang mempunyai kompatibilitas untuk menjalankan <b>program Windows di Linux</b>.</p> <h3>Cara <i>Install</i> Wine di Arch Linux</h3><ol><h4><li><i>Setting multilib</i></li></h4><p>Kita harus <i>enable</i> <i>multilib</i> repository karena di repo <i>multilib</i> terdapat software 32-bit seperti wine, steam, dll. Caranya dengan edit kode file di <code>/etc/pacman.conf</code> lalu cari dan <i>uncomment</i> baris kode <code>[multilib]</code> sehingga menjadi seperti di bawah ini. <pre>[multilib]<br />Include = /etc/pacman.d/mirrorlist</pre></p><h4><li><i>Update</i> Repo</li></h4><p>Jalankan perintah berikut: <pre>$ sudo pacman -Syy</pre></p><h4><li><i>Install</i> Wine</li></h4><p>Jalankan perintah berikut untuk <i>install</i> Wine yang versi stabil. <pre>$ sudo pacman -S wine</pre></p><p>Untuk <i>install</i> Wine versi <i>testing</i>/uji coba jalankan perintah di bawah ini. <pre>$ sudo pacman -S wine-staging</pre></p></ol><p>Sekian tutorial <a title='Cara Install Wine di Arch Linux' target='_blank' href="https://www.syahrulfadli.com/2020/04/cara-install-wine-di-arch-linux.html">Cara Install Wine di Arch Linux</a>, semoga bermanfaat.</p><h3>Rujukan:</h3><a title="Wine - ArchWiki" target="_blank" rel="nofollow" href="https://wiki.archlinux.org/index.php/Wine">Wine ArchWiki</a><br/><a title="Official repositories - ArchWiki" target="_blank" rel="nofollow" href="https://wiki.archlinux.org/index.php/Official_repositories#multilib">Official repositories - ArchWiki</a>
