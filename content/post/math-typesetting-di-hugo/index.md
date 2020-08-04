---
title: "Math Typesetting Di Hugo"
date: 2020-07-29T21:24:52+08:00
hero: ["/upload/hugo-cover.jpg"]
excerpt:
draft: true
authors: ["Syahrul Fadli"]
tags: ["Hugo","Tutorial"]
---

Ada dua Javascript modul untuk mengolah formula matematika yang populer, MathJax dan KaTeX. Kedua modul ini juga ditulis dengan cara/format yang sama, yaitu **Tex mathematical expression** sehingga menghasilkan formula matematika.

Khusus untuk Hugo, cara terbaik untuk implementasi *Math Typesetting* dengan menggunakan MathJax. Kenapa? Karena untuk saat ini (saat artikel dibuat), KaTeX hanya dapat dijalankan di *markup* **Blackfriday** di Hugo dengan format `.mmark` atau dengan *set* `mmark = true`. Sedangkan dari versi Hugo 0.60.0 ke atas `markup` *default* dari Hugo sudah menjadi **Goldmark** dan pengembang Hugo mengatakan bahwa `mmark`  fitur udah *depreciated* dan akan dihapus pada versi Hugo selanjutnya.

Jadi kalau mau pake KaTeX, *markup* Hugo harus diatur agar menggunakan **Blackfriday**. Tapi karena kita orangnya *edgy* kita ikutin aja sesuai "Aturan" baru.

Untuk memasang MathJax kita harus meletakan javascript MathJax dibawah ini di dalam tag `<head>`.

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

Contoh cara penulisannya seperti berikut.

```mathematica
$$ 1\over2 $$
```

Hasilnya:

$$1\over2$$

Lainnya untuk contoh notasi matematika.

```mathematica
$$ \beta \times \alpha $$
```

Hasilnya:

$$ \beta \times \alpha $$

$$ {1\over2}+2 $$

Lainnya lagi.

```mathematica
$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$
```

Hasilnya:
$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$
Jadi untuk penulisan ekspresi matematikanya harus diantara `$$` (Just like LaTeX). Dan untuk formula dan notasi matematika lainnya bisa dilihat di dokumentasi **Latex Mathematical Expression**.

Sekian, semoga bermanfaat.