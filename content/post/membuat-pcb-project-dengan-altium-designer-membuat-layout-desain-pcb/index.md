+++
title = "Membuat PCB Project dengan Altium Designer: Membuat Layout Desain PCB"
date = 2019-01-16T11:14:00Z
updated = 2019-10-27T22:53:46Z
tags = ["Tutorial", "Altium Designer"]
series = ["Belajar Altium Designer"]
hero = "/upload/cover-pcb.jpg"
blogimport = true 
authors = ["Syahrul Fadli"]
aliases = [
    "/membuat-pcb-project-dengan-altium-designer-membuat-layout-desain-pcb/",
    "/2019/01/membuat-layout-pcb-di-altium.html/"
]
+++

Artikel ini merupakan lanjutan dari artikel dengan judul "Membuat Project PCB dengan Altium Designer: Membuat Diagram Skematik". Jadi sebelum melakukan tutorial di bawah ini diharapakan Anda untuk membaca artikel tersebut.

{{< bacajuga href="/2018/12/membuat-diagram-skematik.html" title="Membuat Project PCB dengan Altium Designer: Membuat Diagram Skematik" >}}

## Tutorial Membuat Layout PCB di Altium Designer
<ol><li>Klik kanan pada <i>file project pcb</i> yang sebelumnya sudah Anda buat lalu pilih "<b>Add New to Project</b>" kemudian pilih "<b>PCB</b>". 
{{< img alt="Membuat file pcb" src="1.jpg" width="615" >}}

Setelah itu akan muncul tab baru dengan nama "<b>PCB1.PcbDoc</b>" seperti gambar dibawah ini. 
{{< img alt="lembar kerja pcb" src="1a.jpg" width="615" >}}

</li><li>Save terlebih dahulu file PCB dengan klik “<b>File – Save</b>” atau dengan shortcut <kbd><kbd>ctrl</kbd>+<kbd>s</kbd></kbd>. Maka akan muncul jendela dialog box untuk menyimpan file PCB. <!----Taruh gambar disini----> {{< img alt="save file pcb" src="2.jpg" width="615" >}}
 </li><li>Langkah selanjutnya adalah memasukan komponen dalam bentuk footprint berdasarkan diagram skematik yang sudah kita buat sebelumnya. Berikut langkah-langkahnya: <ul><li>Klik “<b>Design</b>" lalu klik "<b>Import Changes From (Nama File Project PCB)</b>”. <!----Taruh gambar disini----> {{< img alt="Import changes from (nama file project PCB)" src="3.jpg" width="615" >}}
  </li><li>Akan muncul jendela baru seperti gambar dibawah ini. Lalu Klik “<b>Validate Changes</b>” untuk mengecek semua rangkaian pada diagram skematik. <!----Taruh gambar disini----> 
  {{< img alt="Validate changes" src="3a.jpg" width="615" >}} </li><li>Setelah tidak ada <b>error</b> pada diagram skematik klik “<b>Execute Changes</b>”. <!----Taruh gambar disini----> {{< img alt="Execute changes" src="3b.jpg" width="615" >}} </li><li>Maka hasilnya seperti berikut. Kemudian Klik “<b>Close</b>”. <!----Taruh gambar disini----> {{< img alt="close" src="3c.jpg" width="615" >}} </li><li>Maka akan muncul <i>footprint dari</i> masing-masing komponen pada diagram skematik yang sebelumnya  sudah dibuat seperti gambar dibawah ini. <!----Taruh gambar disini----> 
    {{< img alt="gambar footprint berdasarkan diagram skematik" src="3d.jpg" width="615" >}} </li></ul></li><li>Langkah selanjutnya adalah mengatur tata letak komponen pada PCB yang akan Anda buat. Berikut langkah-alngkahnya: <ul><li>Klik satu kali dan tahan pada komponen yang akan dipindah lalu pindahkan sesuai keinginan. </li><li>Untuk me-rotasi komponen klik kiri dan tahan pada komponen yang akan di-rotasi lalu tekan tombol <kbd>spasi</kbd>. </li><li>Hasil seluruh komponen setelah semua komponen diatur tata letaknya. <!----Taruh gambar disini----> {{< img alt="mengatur tata letak komponen" src="4.jpg" width="615" >}}</li></li><br/><li>Atur juga Atur juga <i>Room PCB</i> (bidang yang berwarna merah) dengan me-<i>resize</i>-nya lalu sesuaikan dengan lebar Layout PCB. Sehingga hasilnya seperti pada gambar berikut. <!----Taruh gambar disini----> {{< img alt="mengatur Room PCB" src="4a.jpg" width="615" >}}  </li></li></ul></li><li>Selanjutnya mengatur <i>Board Shape</i> (bidang yang berwarna hitam)  PCB dengan langkah-langkah sebagai berikut.  <ul><li>Klik “<b>Place</b>” dan pilih “<b>Line</b>”. <!----Taruh gambar disini----> {{< img alt="membuat line" src="5.jpg" width="615" >}} </li></li>  <li>Pilih <b>Keep-Out Layer</b> kemudian letakan <i>Line</i> Mengelilingi <i>Room PCB</i>. Klik kiri untuk memulai meletakan Line dan klik kanan untuk berhenti meletakan Line. Seperti gambar berikut. <!----Taruh gambar disini----> {{< img alt="meletakan line" src="5a.jpg" width="615" >}} </li></li><li>Selanjutnya klik kanan pada Line yang sebelumnya telah dibuat mengelilingi <i>Room PCB</i> dan pilih “<b>Find Similar Objects...</b>”. <!----Taruh gambar disini---->{{< img src="5b.jpg" width="615" height="350" >}} </li></li><li>Setelah itu akan terbuka jendela baru dan konfigurasi seperti gambar dibawah ini. Setelah selesai klik “<b>OK</b>”. <!----Taruh gambar disini----> {{< img alt="Klik OK" src="5c.jpg" width="615" >}} </li></li><li>Setelah itu akan muncul jendela baru "<b>PCB Inspector</b>". Tutup saja jendela tersebut. </li><li>langkah berikutnya, klik "<b>Design</b>" lalu pilih "<b>Board Shape</b>" dan pilih "<b>Define from selected objects</b>". <!----Taruh gambar disini----> {{< img alt="Board shape" src="5d.jpg" width="615" >}} </li></li><li>Hasilnya akan seperti gambar dibawah ini. <!----Taruh gambar disini----> {{< img alt="Hasil board shape" src="5e.jpg" width="615" >}} </li></li></ul></li><li>Langkah selanjutnya adalah <i>routing</i>, yaitu pembuatan jalur/penjaluran rangkaian pada perangkat PCB. Ada dua metode dalam melalukan proses <i>routing</i>, yaitu <i>Manual Route</i> (penjaluran mandiri oleh pengguna) dan <i>Auto Route</i> (penjaluran otomatis oleh komputer). <ul><h4>Manual Route</h4><li>Pilih tool "<b>Interactively Route Connections</b>" dengan mengklik ikon <img alt="Interactive Route Icon" height="30"  src="interactiveroute.jpg" width="30"/></li><li>klik kiri pada kaki komponen yang akan dilakukan penjaluran. Mulai hubungkan jalur ke komponen lainnya sesuai dengan Diagram skematik yang telah anda buat. klik kanan untuk menyudahi proses penjaluran. <!----Taruh gambar disini----> {{< img alt="menghubungkan kaki komponen" src="6.jpg" width="615" >}}</li></ul><ul><h4>Auto Route</h4><li>Klik “<b>Design</b>” pilih “<b>Rules</b>”. <!----Taruh gambar disini----></li>{{< img alt="rules" src="6a.jpg" width="615" >}} </li><li>Maka akan muncul jendela baru. Untuk mengatur lebar dari jalur pada PCB pilih “<b>Width</b>” seperti pada gambar berikut. <b>Preferred Width</b> digunakan untuk mengatur lebar jalur yang akan lebih diprioritaskan penggunaannya oleh komputer saat proses <i>Auto Route</i>, <b>Min Width</b> untuk mengatur lebar minimal dan <b>Max Width</b> digunakan untuk mengatur lebar jalur maksimal saat proses <i>Auto Route</i>.  {{< img alt="mengatur lebar jalur" src="6b.jpg" width="615" >}} </li><li>Selanjutnya atur jarak minimum jalur dengan <b>Pads</b>, <b>Vias</b>, dan antar jalur yang lain. Dengan mengubah pada bagian “<b>Clearance</b>” dan ubah nilai pada <b>Minimum Clearance</b>. Lalu klik “<b>OK</b>” untuk menyimpan konfigurasi. <!----Taruh gambar disini----> {{< img alt="mengatur jarak clearance" src="6c.jpg" width="615" >}} </li></li><li>Kemudian klik “<b>Auto Route</b>” dan pilih “<b>All...</b>”. <!----Taruh gambar disini----> {{< img alt="Auto Route" src="6d.jpg" width="615" >}}</li></li><li>Hasilnya akan muncul jendela baru seperti gambar dibawah ini.  <i>Routing Strategy</i>  “<b>Default 2 Layer Board</b>” (Untuk proses pembuatan PCB double layer), kemudian klik “<b>Route All</b>”. <!----Taruh gambar disini----> {{< img alt="Route All" src="6e.jpg" width="615" >}}</li></li><li>Setelah itu akan muncul jendela yang menunjukan proses <i>Auto Route</i>. Setelah proses sudah menunjukan 100% tutup jendela tersebut. <!----Taruh gambar disini----> {{< img alt="proses auto route" src="6f.jpg" width="615" >}}</li></li></ul></li><li>Hasil dari proses <i>Routing</i>. <!----Taruh gambar disini----> {{< img alt="hasil proses routing" src="7.jpg" width="615" >}} </li></li><li>Langkah terkahir dalam proses pembuatan <i>layout PCB</i> adalah pemberian <b>Polygon</b>. Berikut langkah-langkahnya: <ul><li>Klik “<b>Place</b>” kemudian pilih “<b>Polygon Pour...</b>”. <!----Taruh gambar disini----> {{< img alt="Polygon Pour" src="8.jpg" width="615" >}} </li></li><li>Maka akan muncul jendela baru seperti gambar dibawah berikut. Atur Layer dengan pilihan <b>Top Layer</b> untuk memberikan <i>Polygon</i> pada bagian atas <i>Layout PCB</i> sedangkan untuk memberi <i>Polygon</i> pada bagian bawah pilih <b>Bottom Layer</b>. Atur juga "<b>Connect to Net</b>" dengan "<b>GND</b>" agar <i>Polygon</i> menyatu dengan jalur <i>GND</i> dan pilih opsi "<b>Pour Over Same Net Polygons Only</b>" agar polygon di tuangkan pada area yang terdapat <i>Net</i> yang sama. Beri <i>checklist</i> pada "<b>Remove Dead Copper</b>" untuk menghilangkan bagian <i>Polygon</i> yang tidak tersambung ke <i>GND</i>. Jika sudah mengatur tampilan <i>Polygon</i> selanjutnya klik “<b>OK</b>”. <!----Taruh gambar disini----> {{< img alt="Mengatur polygon" src="8a.jpg" width="615" >}} </li></li><li>Letakan <i>Polygon</i> dengan meletakan mengelilingi area yang akan diberi Polygon. Klik kanan untuk mengakhiri pembuatan <i>Polygon</i>. <!----Taruh gambar disini----> {{< img alt="meletakan polygon di rangkaian" src="8b.jpg" width="615" >}} </li></li></ul></li><li>Hasil setelah diberi <b>Polygon</b> pada <i>Top layer</i> dan <i>Bottom Layer</i>  <!----Taruh gambar disini----> {{< img alt="Hasil keselurhan desain PCB" src="9.jpg" width="615" >}} </li></li></ol><p>Sekian tutorial ini semoga bermanfaat.</p>
  
  {{< bacajuga href="/2018/12/cara-menambahkan-library-di-altium.html" title="Cara Menambahkan/Install Library di Altium Designer" >}}