---
title: "Membuat Custom XML Sitemap di Hugo untuk Submit Google Search Console"
date: 2020-08-04T07:24:36+08:00
hero: ["/upload/sitemap-hugo.jpg"]
excerpt: "Tutorial gimana cara sukses submit sitemap ke Google Search Console."
draft: false
authors: ["Syahrul Fadli"]
tags: ["Hugo","Tutorial"]
robotsdisallow: false
---

## Intro

Intro dulu biar artikelnya tambah panjang yeee kannn.

Kita awali dengan mengenal apa itu sitemap. Biar tau apa itu sitemap nggak cuman alasan *seo-seo* doang tapi gak tau fungsi sitemap untuk SEO itu apa. Lalu melihat masalah pada sitemap bawaan dari Hugo.

### Apa itu Sitemap?

Sitemap adalah cara *webmaster* untuk menginformasikan *search engines* tentang halaman pada suatu situs yang tersedia untuk di-*crawling*. Penjelasan sederhananya, Sitemap adalah sebuah file XML yang mendaftarkan URL-URL untuk sebuah situs bersamaan dengan tambahan metadata[^0] masing-masing URL (seperti kapan terakhir halaman di-*update*, berapa sering perubahan pada halaman tersebut, seberapa penting halaman tersebut, dan URL-URL lain yang terkait dengan situs tersebut) jadi *search engine* bisa lebih mudah untuk *crawl* data sebuah situs[^1].

[^0]: Definisi metadata: Data yang menyediakan informasi data lainnya - [Merriam-Webster.com](https://www.merriam-webster.com/dictionary/metadata) 
[^1]: What are Sitemaps? - [sitemap.org](//www.sitemap.org)

Dengan mengatahui apa itu sitemap sekarang kita udah punya alasan kenapa membuat sitemap yang di *approve* oleh **Google Search Console** dan tahu apa "tugas" dari sitemap ini.

Membuat Sitemap tidak sekonyong-konyong membuat situs kita menjadi "SANGAT SEO" dan melesat ke peringkat pertama halaman pencarian. Tanpa membuat sitemap-pun dengan keniscayaan-nya Google dapat menemukan situs kita.

Banyak tahapan dan cara agar website lebih SEO, tapi saya gak akan bahas disini, karena...

{{< img src="pardede-mli.gif" alt="Saya Tidak Tahu..." caption="AKU TIDAK TAHU...." >}}

### Sitemap di Hugo

Hugo sudah menyediakan template XML sitemap secara default, Namun template yang disediakan secara *default* oleh Hugo akan *error* jika kita *submit* ke Google Search Console.

Karena di template sitemap yang disediakan oleh Hugo, sitemap me-*list* seluruh URL yang terkait dengan situs termasuk taxonomy (seperti tag, series, dan category); URL direktori `content` lainnya juga ikut dalam sitemap seperti direktori post sehingga pada sitemap URL www.example.com/post/ juga ikut terdaftar pada sitemap.  

URL-URL tersebut tidak dikehendaki untuk berada pada sitemap Google Search Console sehingga menyebabkan *error* saat *submit* sitemap.

Cara agar URL-URL yang dikehendaki saja yang muncul pada sitemap dengan cara membuat *custom sitemap* sendiri.

## Membuat Custom Sitemap di Hugo

Tutorial ini saya dapatkan dari thread di forum Hugo[^2].

[^2]: Custom Robots.txt and sitemap.xml Templates - [discourse.gohugo.io](https://discourse.gohugo.io/t/custom-robots-txt-and-sitemap-xml-templates/11869/17)

1. Buat file `sitemap.xml` letakan dalam di folder `layout`, isi file `sitemap.xml` dengan kode di bawah ini,

   ```xml
   {{ printf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\" ?>" | safeHTML }}
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
     xmlns:xhtml="http://www.w3.org/1999/xhtml">
     {{ range .Data.Pages }} {{ if not .Params.robotsdisallow }}
     <url>
       <loc>{{ .Permalink }}</loc>{{ if not .Lastmod.IsZero }}
       <lastmod>{{ safeHTML ( .Lastmod.Format "2006-01-02T15:04:05-07:00" ) }}</lastmod>{{ end }}{{ with .Sitemap.ChangeFreq }}
       <changefreq>{{ . }}</changefreq>{{ end }}{{ if ge .Sitemap.Priority 0.0 }}
       <priority>{{ .Sitemap.Priority }}</priority>{{ end }}{{ if .IsTranslated }}{{ range .Translations }}
       <xhtml:link
                   rel="alternate"
                   hreflang="{{ .Lang }}"
                   href="{{ .Permalink }}"
                   />{{ end }}
       <xhtml:link
                   rel="alternate"
                   hreflang="{{ .Lang }}"
                   href="{{ .Permalink }}"
                   />{{ end }}
     </url>
     {{ end }} {{ end }}
   </urlset>
   ```

2. Letakan kode meta berikut dalam tag `<head>`,

   ```go-html-template
   {{ with .Params.robotsdisallow }}
   <meta name="robots" content="noindex, nofollow, noarchive">
   {{ end }}
   ```

3. Tambahkan *parameter* `robotsdisallow: true` (untuk TOML disesuaikan saja) pada **archetypes** halaman yang kita inginkan untuk tidak muncul di sitemap.xml.
   Contoh, saya tidak ingin menampilkan halaman taxonomy "tags" dan segala URL turunannya. Caranya sebagai berikut,

   * Buat halaman `content/tags/_index.md`,

   * Tambahkan `robotsdisallow: true` pada archetypes file `_index.md` seperti berikut,
     {{< img src="tags-index.jpg" width="450px" alt="contoh langkah 2.1" >}}
     
   * Buat juga file `_index.md` untuk url turunan dari taxonomy "tags", contohnya saya punya tag dengan nama "Hugo", maka dalam di dalam folder "tags" saya akan membuat file di dalam folder `content/tags/hugo/_index.md` lalu tambahkan lagi `robotsdisallow: true`, contohnya seperti berikut.
     {{< img src="tags-hugo-index.jpg" width="450px" alt="contoh langkah kedua 2.3" >}}
     
     Atau bisa juga diterapkan ke seluruh situs secara *default* dengan memberikan `robotsdisallow: true` pada config file (TOML, YAML, JSON) situs; lalu pada file ***archetypes*** direktori konten lainnya (yang ingin ditampilkan di sitemap) bisa menambahkan `robotsdisallow: false`. Dengan catatan kamu harus mengubah sedikit pada kode kondisional di`sitemap.xml` seperti berikut dan *tag* meta.
     * Ubah kode `{{ if not .Params.robotsdisallow }}` (lihat pada langkah pertama) menjadi `{{ if eq .Params.robotsdisallow false }}`,
     * Ubah kode `{{ with .Params.robotsdisallow }}` (lihat pada langkah kedua)  menjadi `{{ if ne .Params.robotsdisallow false }}`.

4. Simpan dan *submit* ke Google.

## Submit ke Google Search Console

Agar sitemap sukses saat di-*submit* ke Google Search Console, Saya sendiri memberi parameter tersebut di semua halaman taxonomy dan halaman-halaman tertentu lainnya (seperti halaman Tentang, Kontak, dan Arsip ). Sehingga URL yang muncul pada file sitemap.xml hanya URL halaman artikel dan beranda saja.

Langkah terakhir tinggal *submit* sitemap Google Search Console.

Berikut *screenshoot* hasil submit menggunakan metode ini. Sitemap meng-indeks 16 halaman, dimana 15 Halaman artikel dan 1 halaman beranda.

{{< img src="screenshoot-sitemap.jpg" alt="Screenshot Sukses Submit ke Google Search Console" width="750px" >}}

Sekian artikel ini, semoga bermanfaat.