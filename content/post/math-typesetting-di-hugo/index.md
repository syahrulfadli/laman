---
title: "Math Typesetting di Hugo"
date: 2020-08-24
hero: ["/upload/ODRAT50.jpg"]
excerpt: Cara menggunakan Math Typesetting/Mathematical Notation (Matematika Notasi) di Hugo.
draft: false
math: true
authors: ["Syahrul Fadli"]
tags: ["Hugo","Tutorial"]
imgattr: "Background photo created by bedneyimages - www.freepik.com"
imgattrlink: https://www.freepik.com/photos/background
robotsdisallow: false
---

Ada dua Javascript untuk mengolah formula matematika yang populer, MathJax dan KaTeX. Kedua modul ini juga ditulis dengan cara/format yang sama, yaitu **Tex Mathematical Expression**.

Khusus untuk Hugo, cara terbaik menurut penulis untuk implementasi *Math Typesetting* dengan menggunakan MathJax. Kenapa? Karena untuk saat ini (saat artikel dibuat), KaTeX hanya dapat dijalankan di *markup* **Blackfriday** di Hugo dengan *content format* `.mmark` atau dengan *set* `mmark = true` pada *archetypes*.

Sedangkan dari versi Hugo 0.60.0 ke atas `markup` *default* dari Hugo sudah menjadi **Goldmark** dan pengembang Hugo mengatakan bahwa `mmark`  fitur udah *depreciated*[^1] dan akan dihapus pada versi Hugo selanjutnya[^2].

[^1]:[Definition - What does Deprecation mean?](https://www.techopedia.com/definition/28957/deprecation)

[^2]: [Content Format - List of content formats](https://gohugo.io/content-management/formats/)

Karena kita orangnya *edgy* (ya gak?) kita ikutin aja sesuai "Aturan" baru, Yaitu pake MathJax. 

Untuk memasang MathJax kita harus meletakan javascript MathJax dibawah ini di dalam tag `<head>`.

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

Agar penggunaan  lebih maksimal, ada bagusnya untuk menggunakan tag conditional, agar Javascript hanya di-*load* saat MathJax dibutuhkan halaman.

Sehingga seperti berikut.

```html
{{ if or .Page.Params.math .Site.Params.math }}
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
{{ end }}
```

Lalu jika halaman membutuhkan MathJax, tinggal beri parameter `math: true`(yaml) pada archetypes.

Contoh cara penulisan seperti berikut.

```mathematica
$$\bigg({1\over2}+{1\over2}\bigg)\times 2^2 = 4$$
```

Hasilnya:

$$ \bigg({1\over2}+{1\over2}\bigg)\times 2^2 = 4$$ 

Jadi untuk penulisan ekspresi matematikanya harus diantara `$$`. Dan untuk formula dan notasi matematika lainnya bisa dilihat di dokumentasi/tutorial yang terkait **Tex** atau **LaTex** **Mathematical Expression**, banyak kok internet .

Selain *support* penulisan Tex &mdash; juga **support** AsciiMath[^3] dan MathML[^4].

[^3]: [AsciiMath Support — MathJax 3.0 documentation](http://docs.mathjax.org/en/latest/input/asciimath.html#asciimath-support)

[^4]: [MathML Support — MathJax 3.0 documentation](http://docs.mathjax.org/en/latest/input/mathml.html)

Sekian, semoga bermanfaat.

