---
title: "Membuat Breadcrumb dengan Markup Microdata Schema.org di Hugo"
date: 2020-09-10T21:20:20+08:00
hero: ["/upload/breadcrumb.jpg"]
excerpt: "Tutorial Hugo, membuat breadcrumb dengan data terstruktur berdasarkan markup schema.org."
draft: false
authors: ["Syahrul Fadli"]
tags: ["Tutorial","Hugo"]
imgattr: "Photo by Pierre Bamin on Unsplash"
imgattrlink: https://unsplash.com/@bamin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
---

Breadcrumb berguna untuk membantu pengguna memahami posisi halaman dari hierarki situs. Tidak hanya pengguna juga mesin pencari, jika menerapkan breadcrumb dengan markup schema.org maka hasil pencarian akan seperti berikut.

{{< img src="breadcrumb.jpg" alt="contoh breadrcumb dengan markup schema.org" width="603px" height="124px" >}}

Di artikel ini saya akan membagikan dua macam breadcrumb.

Yang pertama adalah breadcrumb dengan merepresentasikan jalur berdasarkan taxonomy `tag` di Hugo dan yang kedua adalah merepresentasikan berdasarkan struktur URL.

Katanya Google, sebaiknya kita membuat breadcrumb yang merepresentasikan jalur pengguna biasa/awam ke halaman website tersebut, daripada merepresentasikan struktur URL. Karena mungkin beberapa bagian dari *path* URL dianggap tidak membantu pengguna memahami situs kita[^1].

Jalur pengguna awam yang dimaksud (menurut pemahaman saya) adalah hierarki berdasarkan kategori atau tag dari halaman yang dituju sehingga memudahkan pengguna memahami dibagian mana ia dapat menemukan artikel serupa dari posisinya saat ini. Misal, Untuk artikel dengan judul "Film Avengers" maka terdapat pada tag "sci-fi", "action". Maka pada breadcrumb akan terlihat seperti berikut:

Beranda ![chevron-right](/images/chevron-right.svg) sci-fi ![chevron-right](/images/chevron-right.svg) action ![chevron-right](/images/chevron-right.svg) Film Avengers

Dari breadcrumb di atas pengguna mengetahui di halaman mana ia bisa menemukan Film Avengers, atau film serupa dengannya.

Tapi kalo saya sendiri (saat artikel ini dibuat) menggunakan breadcrumb berdasarkan struktur URL.

[^1]:Breadcrumb - [developers.google.com](https://developers.google.com/search/docs/data-types/breadcrumb#example)

## Breadcrumb Berdasarkan Taxonomy Tag

```html
 <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
      {{ $.Scratch.Set "posisi" 1 }}
    <li itemprop="itemListElement" itemscope
    itemtype="https://schema.org/ListItem">
    <a itemprop="item" href="/">
    <span itemprop="name">Beranda</span>
    <meta itemprop="position" content="{{ $.Scratch.Get "posisi" }}" />  
    </a>
  	</li> 
    {{- with .Params.tags -}}
    {{- range . -}}
    {{ $.Scratch.Add "posisi" 1 }}
    <li itemprop="itemListElement" itemscope
    itemtype="https://schema.org/ListItem">
    <a itemprop="item" href="{{ "/tags/" | relLangURL }}{{ . | urlize }}">
    <span itemprop="name">{{ . }}</span>
    </a>
    <meta itemprop="position" content="{{ $.Scratch.Get "posisi" }}" />
    {{- end -}}
    {{- end -}}
    <li itemprop="itemListElement" itemscope
    itemtype="https://schema.org/ListItem">
      {{ $.Scratch.Add "posisi" 1 }}
      <span itemprop="name">{{ .Params.title }}</span>
      <meta itemprop="position" content="{{ $.Scratch.Get "posisi" }}" />
    </li>
    </ol>
```

Sesuaikan `/tags/` dengan taxonomy tag kamu, atau kamu bisa menggunakan taxonomy yang lain.

Untuk demo silahkan buka [link ini](https://hugobyexample.netlify.app/for-seven-post-goal/).

Untuk hasil tes dengan Google Rich Result Test silahkan klik link [ini](https://search.google.com/test/rich-results?id=Je33ZH3N7HO5k27lTze2Xw).

## Breadcrumb Berdasarkan Struktur URL

Breadcrumb ini harus dibuat secara partial.

1. Buat file partial untuk breadcrumb html , contoh `/layout/partial/breadcrumb.html`,

2. Copy kode di bawah ini lalu paste ke `breadcrumb.html`,

   ```html
   <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
       {{ template "breadcrumbnav" (dict "p1" . "p2" .) }}
     </ol>
     {{ define "breadcrumbnav" }}
     {{ $scratch := newScratch }}
     {{ $scratch.Set "posisi" 1 }}
     {{ if .p1.Parent }}
     {{ template "breadcrumbnav" (dict "p1" .p1.Parent "p2" .p2 )  }}
     {{ $scratch.Add "posisi" 1 }}
     {{ else if not .p1.IsHome }}
     {{ template "breadcrumbnav" (dict "p1" .p1.Site.Home "p2" .p2 )  }}
     {{ end }}
     <li itemprop="itemListElement" itemscope
     itemtype="https://schema.org/ListItem">
     {{ if eq .p1 .p2 }}
     {{ $scratch.Add "posisi" 1 }}
       <span itemprop="name">{{ .p1.Title }}</span>
           <meta itemprop="position" content="{{ $scratch.Get "posisi" }}" />
   {{ else if eq (1) ($scratch.Get "posisi") }}
   <a itemprop="item" href="{{ .p1.Permalink }}"><span itemprop="name">Beranda</span> 
     <meta itemprop="position" content="{{ $scratch.Get "posisi" }}" />    
   </a>
     {{ else if ne .p1 .p2 }}
     <a itemprop="item" href="{{ .p1.Permalink }}" href="{{ .p1.Permalink }}"><span itemprop="name">{{ .p1.Title }}</span> 
       <meta itemprop="position" content="{{ $scratch.Get "posisi" }}" />    
   </a>
   {{ end }}
     </li>
     {{ end }}
   ```

3. Panggil kode partial breadcrumb dengan kode dibawah ini.

   ```html
   {{ partial "breadcrumb.html" . }}
   ```

Kode diatas modifikasi dari halaman dokumentasi resmi Hugo[^2]. Untuk lebih lengkap terkait kode diatas silahkan kunjungi halaman dokumentasinya [disini](https://gohugo.io/content-management/sections/#example-breadcrumb-navigation).

[^2]: Example: Breadcrumb Navigation - [gohugo.io](https://gohugo.io/content-management/sections/#example-breadcrumb-navigation)

Untuk demo silahkan klik link [berikut](https://hugobyexample.netlify.app/post-with-quite-long-title-for-testing-the-cards/).

Untuk hasil tes dengan Google Rich Result Test silahkan klik link [ini](https://search.google.com/test/rich-results?id=W_AaCGlAs9MnRZekJegsxw).

## Pake Telor

Ini CSS untuk styling html diatas.

```css
.breadcrumb {
	color: #ddd;
	font-size: 14px;
	list-style: none
}
.breadcrumb a {
	color: #ddd;
}
.breadcrumb li {
	display: inline-block
}
.breadcrumb li::before {
	content: ""
}
.breadcrumb li::after {
	content: "";
	mask: url(/images/chevron-right.svg);
	-webkit-mask: url(/images/chevron-right.svg);
	mask-size: cover;
	-webkit-mask-size: cover;
	width: 16px;
	height: 16px;
	background-color: #ddd;
	display: inline-block;
	vertical-align: middle
}
.breadcrumb li:last-child::after {
	display: none
}
```

Simpan juga file SVG "![chevron-right](/images/chevron-right.svg)" ini lalu simpan di dalam folder `/static/images/`. Gambar *chevron* ini berfungsi sebagai separator antar hierarki breadcrumb.

Sekian, semoga bermanfaat.