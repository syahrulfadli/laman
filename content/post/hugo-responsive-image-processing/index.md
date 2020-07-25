---
title: "Cara Membuat Shortcode Gambar Responsive dengan Image Processing di Hugo"
date: 2020-07-19T18:55:07+08:00
hero: ["/upload/hugo-cover.jpg"]
excerpt:
draft: false
authors: ["Syahrul Fadli"]
tags: [Hugo, Tutorial, Pemograman]
---

*Shortcode* adalah fitur *content management* paling *powerfull* yang dimiliki oleh Hugo. Dan kali saya akan share *shortcode* untuk membuat gambar agar ukuran responsive dan resolusi gambar menyesuaikan dengan ukuran layar.

Kode dari tutorial ini saya comot dari blog Laura Kalbag[^1]. Jadi untuk Laura Kalbag terimakasih banyak atas kodenya ^_^ (For Laura Kalbag thank you so much for the code ^_^).

[^1]: [Laura Kalbag - Processing Responsive Images with Hugo](https://laurakalbag.com/processing-responsive-images-with-hugo/)

Kodenya saya edit dikit biar gambarnya *responsive*.

Alasan saya menulis ulang tutorial ini, yaa.. nambah tutorial Hugo berbahasa Indonesia.

## Page Bundles

Pertama-tama kita atur *page bundles* untuk halaman konten post kita.

Intermezzo dikit: *Page bundles* adalah cara untuk untuk mengatur hirarki konten dan sumber daya/*resource* (seperti gambar, video, pdf dll.) di Hugo[^2].

[^2]: [Hugo: Leaf and Branch Bundles | A Scripter's Notes](https://scripter.co/hugo-leaf-and-branch-bundles/)

Agar *image processing* dapat bekerja dengan baik kita harus mengatur *page bundles* **post** seperti berikut:

```html
content/
 |--- post/
 |    |--- nama-folder-post/
 |    |    |--- index.md
 |    |    |--- gambar1.jpg
 |    |    |--- gambar2.jpg
 |    |--- nama-folder-post-lainnya/
 |         |--- index.md
```

Jadi di `index.md` inilah isi **konten postingan**, sedangkan nama foldernya sebagai url menuju **konten postingan**. Lalu gambar-gambar yang akan di proses juga ditaruh di folder yang sama.

## Image Processing

Setelah kita mengatur **page bundles** untuk post selanjutnya kita membuat shortcode untuk membuat image processing.

Simpan shortcode untuk image processing dibawah ini di `layout/shortocde/img.html` (nama file shortcode-nya terserah sih..)

```html
{{/* get file that matches the filename as specified as src="" in shortcode */}}
{{ $srcUrl := .Get "src" | safeURL }}
{{ $src := .Page.Resources.GetMatch (printf "%s" $srcUrl) }}

{{/* set image sizes, these are hardcoded for now, x dictates that images are resized to this width */}}

{{ $tinyw := default "500x" }}
{{ $smallw := default "800x" }}
{{ $mediumw := default "1200x" }}
{{ $largew := default "1500x" }}

{{/* resize the src image to the given sizes */}}

{{ .Scratch.Set "tiny" ($src.Resize $tinyw) }}
{{ .Scratch.Set "small" ($src.Resize $smallw) }}
{{ .Scratch.Set "medium" ($src.Resize $mediumw) }}
{{ .Scratch.Set "large" ($src.Resize $largew) }}

{{/* add the processed images to the scratch */}}

{{ $tiny := .Scratch.Get "tiny" }}
{{ $small := .Scratch.Get "small" }}
{{ $medium := .Scratch.Get "medium" }}
{{ $large := .Scratch.Get "large" }}

{{/* only use images smaller than or equal to the src (original) image size, as Hugo will upscale small images */}}
{{/* set the sizes attribute to (min-width: 35em) 1200px, 100vw unless overridden in shortcode */}}

  <figure style="text-align: center;" class="{{ with .Get "position"}}{{ . }}{{ else -}} left {{- end }}" >
    <p style="text-align: center;">
    <img loading="lazy" style="width: 100%;max-width:{{ .Get "width" }};height:auto"
  srcset='
  {{ if ge $src.Width "500" }}
    {{ with $tiny.RelPermalink }}, {{.}} 500w{{ end }}
  {{ end }}
  {{ if ge $src.Width "800" }}
    {{ with $small.RelPermalink }}, {{.}} 800w{{ end }}
  {{ end }}
  {{ if ge $src.Width "1200" }}
    {{ with $medium.RelPermalink }}, {{.}} 1200w{{ end }}
  {{ end }}
  {{ if ge $src.Width "1500" }}
    {{ with $large.RelPermalink }}, {{.}} 1500w {{ end }}
  {{ end }}'
  {{ if .Get (print $medium) }}
    src="{{ $medium.RelPermalink }}"
  {{ else }}
    src="{{ $src.RelPermalink }}"
  {{ end }}

{{ with .Get "alt" }} alt="{{ . | plainify }}" {{ end }} {{ with .Get "style" }} style="{{ . | safeCSS }}" {{ end }} />
</p>
    {{ if .Get "caption" }}
    <p>
      <figcaption class="{{ with .Get "captionPosition"}}{{ . }}{{ else -}} center {{- end }}" {{ with .Get "captionStyle" }} style="{{ . | safeCSS }}" {{ end }}>{{ .Get "caption" }}</figcaption>
    {{ end }}
    </p>
  </figure>
```

Kode diatas akan menghasilkan output gambar dengan opsi empat ukuran **panjang** gambar 500px, 800px, 1200px, 1500px sedangkan untuk **tinggi** dari masing-masing output gambar akan menyesuaikan dengan ratio gambar sebenarnya (sesuai dengan fungsi `.Resize [nilai]x`).

Terdapat atribut `scrset` yang menyimpan gambar hasil *resize* oleh *image processing*. Gambar yang ditampilkan nanti akan disesuaikan dengan dengan lebar layar perangkat.

Supaya responsive saya menambahkan atribut `style` dengan properti `max-width:{{ .Get "width" }}` agar nilai pada `max-width` mendapatkan nilai panjang gambar asli. Jadi saat penulisan *shortcode* kita harus menambahkan atribut `width` lalu nilainya diisi panjang asli gambar.

Biar lebih optimal udah ditambah juga dengan `lazyload`.

## Shortcode
Ok, kode diatas dapat dipanggil dengan shortcode berikut.

```html
{{< raw >}}{{&lt; img src=&quot;namagambar.jpg&quot; width=&quot;1366px&quot; alt=&quot;Deskripsi gambar&quot; caption=&quot;Caption Gambar&quot; &gt;}}
{{< /raw >}}
```

output html kode diatas sebagai berikut.

```html
<figure style="text-align: center;" class="left">
    <p style="text-align: center;">
    <img loading="lazy" style="width: 100%;max-width:1366px;height:auto" srcset="
  
    , /nama-folder-artikel/namagambar_kodeacakpanjang_kodeacaklainnya_500x0_resize_q75_box.JPG 500w
  
  
    , /nama-folder-artikel/namagambar_kodeacakpanjang_kodeacaklainnya_800x0_resize_q75_box.JPG 800w
  
  
    , /nama-folder-artikel/namagambar_kodeacakpanjang_kodeacaklainnya_1200x0_resize_q75_box.JPG 1200w
  " src="/nama-folder-artikel/namagambar_kodeacak_kodeacaklainnya.JPG" alt="Deskripsi gambar">
</p>
    
    <p>
      </p><figcaption class="center">Caption gambar</figcaption>
    
    <p></p>
  </figure>
  ```

  Dari output kode diatas atribut `srcset` memiliki tiga sumber dari 500px hingga 1200px, sedangkan sumber dengan panjang 1500px dikecualikan karena gambar asli mempunyai panjang 1366px.

  Kondisi lain, ketika gambar asli mempunyai gambar dengan panjang ≤ 500 maka `srcset` tidak digunakan dan langsung mengambil url asli gambar. 

  Hasil *resize* gambar disimpan di folder `resource/`. Gambar akan di resize saat proses *build*.

## Kondisi `srcset`
1. Ketika lebar layar ≤ 500 maka `src` akan mengambil hasil resize dengan lebar 500px
2. Ketika lebar layar ≤ 800 maka `src` akan mengambil hasil resize dengan lebar 800px
3. Ketika lebar layar ≤ 1200 maka `src` akan mengambil hasil resize dengan lebar 1200px
4. Ketika lebar layar ≤ 1500 maka `src` akan mengambil hasil resize dengan lebar 1500px

Dah itu aja kayaknya, maaf ya kalo saya gak bisa jelasin cara untuk mendapatkan *resource* gambarnya karena saya juga baru belajar. Maaf juga kalo agak belibet jelasinnya.

Sekian, semoga bermanfaat.