(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{267:function(a,t,n){"use strict";n.r(t);var s=n(3),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"belajar-preact-hello-world"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#belajar-preact-hello-world"}},[a._v("#")]),a._v(" Belajar Preact: Hello World")]),a._v(" "),n("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),n("FeaturedImage",{attrs:{src:"/images/covers/belajar-preact-hello-world.jpg",author:"Julian Santa Ana",source:"unsplash.com",sourceLink:"https://unsplash.com/photos/FKqH1QhUqaw"}}),a._v(" "),n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),n("p",[a._v("Setelah kita melaukkan setup Project Preact, kita bisa langsung membuat aplikasi sederhana yang biasa dilakukkan ketika berkenalan dengan suatu program atau bahasa baru. Ya, tidak lain tidak bukan adalah "),n("code",[a._v("Hello World")]),a._v(". Kita mulai dengan sederhana dan bertahap, sebelum kita ke puncak tujuan kita, belajar Preact dan menggunakannya di project yang akan kita buat nantinya.")]),a._v(" "),n("p",[a._v("Dari project sederhana "),n("code",[a._v("Hello World")]),a._v(" ini kita akan berkenal dengan:")]),a._v(" "),n("ul",[n("li",[a._v("Component")]),a._v(" "),n("li",[a._v("Component Life Cycle")]),a._v(" "),n("li",[a._v("State dan Props")])]),a._v(" "),n("p",[a._v("Dari tiga hal diatas, kita akan bahas secara terpisah di series selanjutnya. Jadi kita akan berkenalan terlebih dahulu bagaiaman eksistensi dan peranan mereka dalam membangun Component UI di Preact.")]),a._v(" "),n("p",[a._v("Goal kita disini adalah membuat komponent "),n("code",[a._v("<HelloWorld />")]),a._v(" dengan menampilkan nama kita. jadi hasil akhirnya akan menampilkan "),n("code",[a._v("Hello World, dan Hi Nama Kamu")]),a._v(".")]),a._v(" "),n("h2",{attrs:{id:"membuat-komponen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#membuat-komponen"}},[a._v("#")]),a._v(" Membuat Komponen")]),a._v(" "),n("p",[a._v("Pertama kita akan membuat komponen "),n("code",[a._v("<HelloWorld />")]),a._v(" yang akan ditampilkan di halaman web kita.")]),a._v(" "),n("h3",{attrs:{id:"struktur-komponen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#struktur-komponen"}},[a._v("#")]),a._v(" Struktur Komponen")]),a._v(" "),n("p",[a._v("Kita akan membuat folder sendiri dimana component kita akan disimpan. Buat folder baru dengan nama "),n("code",[a._v("components")]),a._v(" di dalam folder "),n("code",[a._v("src")]),a._v(". Jadi kita akan menyimpan component kita disitu, setiap kali kita akan membuat component kita akan membuat folder component itu sendiri. Struktur folder nya akan seperti ini:")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("├── src/\n  ├── components/\n    ├── HelloWorld/    \n      ├── HelloWorld.jsx\n      ├── index.js\n      ├── style.css\n")])])]),n("p",[a._v("Kenapa kita memisah component menjadi banyak File dan Folder? karena dengan membedakan file-file tersebut kita akan dipermudah dengan path pemanggilan dan secara best practice ini adalah salah satunya untuk mengelolah project Preact.")]),a._v(" "),n("ul",[n("li",[n("code",[a._v("HelloWorld/")]),a._v(": Folder dengan nama component harus "),n("strong",[a._v("CamelCase")]),a._v(".")]),a._v(" "),n("li",[n("code",[a._v("HelloWorld.jsx")]),a._v(": kode Component UI")]),a._v(" "),n("li",[n("code",[a._v("index.js")]),a._v(": Re-exporter kode component UI untuk mempermudah pemanggilan dan menghindari "),n("em",[a._v("repeating name")]),a._v(" dalam penulisan path.")]),a._v(" "),n("li",[n("code",[a._v("style.css")]),a._v(": Tempat dimana kode style/css untuk Component tersebut.")])]),a._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[a._v("Catatan")]),a._v(" "),n("p",[a._v("Kode component yang melibatkan JSX didalamnya dan tidak pure memiliki syntax Javascript pakailah format "),n("code",[a._v(".jsx")]),a._v(" untuk mempermudah kita mengenali isi file tersebut tanpa harus membuka filenya.")])]),a._v(" "),n("h3",{attrs:{id:"kode-komponen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kode-komponen"}},[a._v("#")]),a._v(" Kode Komponen")]),a._v(" "),n("p",[a._v("Kita mulai dengan membuat kerangka UI kita dengan mengedit file "),n("code",[a._v("HelloWorld.jsx")]),a._v(" kita. Sesuikan file kalian dengan kode snippet dibawah ini:")]),a._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" Component "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'preact'")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" style "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./style.css'")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Component")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("render")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("componentDidMount")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("component Hello World berhasil dimuat")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[a._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("h1")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("heading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("Hello World, dan Hai ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("Kode diatas menggunakan "),n("code",[a._v("Classes Component")]),a._v(" jadi komponen dibuat dengan menggunakan Javascript Class.")]),a._v(" "),n("p",[a._v("Selanjutnya kita ke file "),n("code",[a._v("style.css")])]),a._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[a._v("@import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token url"}},[n("span",{pre:!0,attrs:{class:"token function"}},[a._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("'https://fonts.googleapis.com/css?family=Merriweather&display=swap'"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")])]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[a._v(".heading")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("font-family")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Merriweather'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" serif"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" #dfa612"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 2px solid #ffe297"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 8px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" inline-block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("padding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" 8px 16px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("font-weight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" normal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[a._v("Catatan")]),a._v(" "),n("p",[a._v("Secara default "),n("code",[a._v("preact-cli")]),a._v(" akan mengcompile semua file style dalam folder "),n("code",[a._v("components/")]),a._v(" menjadi "),n("code",[a._v("CSS Module")]),a._v(".")])]),a._v(" "),n("p",[a._v("Terakhir kita lanjut ke file "),n("code",[a._v("index.js")]),a._v(" sebagai re-exporter komponen kita.")]),a._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./HelloWorld.jsx'")]),a._v("\n")])])]),n("p",[a._v("Akhirnya, pada titik ini kalian sudah berhasil membuat Component "),n("code",[a._v("<HelloWorld />")]),a._v(". Kita lanjut menampilkannya pada file "),n("code",[a._v("index.js")]),a._v(".")]),a._v(" "),n("h2",{attrs:{id:"root-komponen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#root-komponen"}},[a._v("#")]),a._v(" Root Komponen")]),a._v(" "),n("p",[a._v("Seperti yang sudah saya mention sebelumnya, semua file yang menggunakan "),n("code",[a._v("JSX")]),a._v(" harus menggunakan type format "),n("code",[a._v(".jsx")]),a._v(". Jadi kita akan merubah format terlebih dahulu file "),n("code",[a._v("index.js")]),a._v(" yang ada pada "),n("code",[a._v("src/index.js")]),a._v(" menjadi "),n("code",[a._v("src/index.jsx")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br")]),n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("├── src/\n  ├── components/\n  ├── index.jsx\n")])])]),n("p",[a._v("Setelah rename file menjadi "),n("code",[a._v("index.jsx")]),a._v(" nya kita akan menambahkan komponent "),n("code",[a._v("<HelloWorld />")]),a._v(" yang sudah kita buat tadi. Sesuaikan perubahan sesuai dengan kode snippet dibawah ini:")]),a._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[a._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./style'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" HelloWorld "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./components/HelloWorld'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("App")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n    ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("name")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("Ryan Aunur"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n  ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),n("p",[a._v("Kode snippet diatas mungkin akan terlihat berbeda dari apa yang ada sebelumnya dari file "),n("code",[a._v("index.jsx")]),a._v(" kamu. Ya, disini penulis merubah component "),n("code",[a._v("App")]),a._v(" menjadi "),n("em",[a._v("Functional Component")]),a._v(" karena menurut "),n("code",[a._v("ESLint")]),a._v(" yang sudah terpasang di template "),n("code",[a._v("preact-cli")]),a._v(" yang sudah kita setup sebelumnya mengharuskan kita untuk merubahnya menjadi "),n("em",[a._v("Functional Component")]),a._v(" karena hanya menampilkan tampilan sederhana dan tidak membutuhkan fitur "),n("em",[a._v("life cycle")]),a._v(" yang ada pada "),n("em",[a._v("Classes Component")]),a._v(".")]),a._v(" "),n("p",[a._v("dan terakhir kita perlu menambahkan style untuk class "),n("code",[a._v(".container")]),a._v(" pada file "),n("code",[a._v("src/style.css")]),a._v(" kita dengan code snippet dibawah ini:")]),a._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[a._v(".container")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[a._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"konfigurasi-eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#konfigurasi-eslint"}},[a._v("#")]),a._v(" Konfigurasi ESLint")]),a._v(" "),n("p",[a._v("Konfigurasi ini mungkin menjadi langkah optional karena secara sederhannya "),n("code",[a._v("ESLint")]),a._v(" bertujuan untuk membuat koding kita lebih baik dan mudah dibaca dengan mengikuti standart aturan penulisan dari konfigurasi ESLint yang terpasang. Jika ada aturan yang dilanggar maka akan ada warning atau error yang muncul di text editor kalian seperti VS Code.")]),a._v(" "),n("p",[a._v("Untuk meng-"),n("em",[a._v("custom")]),a._v(" konfigurasi ESLint yang sudah ada, kita perlu membuat file "),n("code",[a._v(".eslintrc")]),a._v(" di-root folder project kita. Dan dibawah ini adalah contoh konfigurasi "),n("code",[a._v("ESLint")]),a._v(" penulis untuk project Hello World kita ini:")]),a._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v('"extends"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"eslint-config-synacor"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v('"no-console"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[a._v('"indent"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"error"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("p",[a._v("Selanjutnya kita perlu menghapus konfigurasi default ESLint yang ada pada file "),n("code",[a._v("package.json")]),a._v(".")]),a._v(" "),n("div",{staticClass:"language-git extra-class"},[n("pre",{pre:!0,attrs:{class:"language-git"}},[n("code",[n("span",{pre:!0,attrs:{class:"token deleted"}},[a._v('- "eslintConfig": {')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[a._v('-   "extends": "eslint-config-developit"')]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token deleted"}},[a._v("- },")]),a._v("\n")])])]),n("h2",{attrs:{id:"menjalankan-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#menjalankan-project"}},[a._v("#")]),a._v(" Menjalankan Project")]),a._v(" "),n("p",[a._v("Akhirnya kita bisa mencoba menjalankan Project kita dengan cara menjalankan perintah:")]),a._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[a._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" start\n")])])]),n("p",[a._v("Tunggu sampai prosess build selesai sampai muncul pesan pada Terminal,")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("You can view the application in browser.\n\nLocal:            http://0.0.0.0:8080\nOn Your Network:  http://192.168.100.xx:8080\n")])])]),n("p",[a._v("Dan kamu bisa membuka alamat tersebut di browser kalian, misalnya "),n("code",[a._v("http://localhost:8080")]),a._v(".")]),a._v(" "),n("h3",{attrs:{id:"preview-hasil"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#preview-hasil"}},[a._v("#")]),a._v(" Preview Hasil")]),a._v(" "),n("p",[a._v("Maka hasil akhirnya akan seperti berikut:")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/posts/screenshot-preact-hello-world.png",alt:"Preview Hasil Preact Hello World"}}),a._v(" "),n("em",[a._v("Tampilan hasil project Preact Hello World")])]),a._v(" "),n("h2",{attrs:{id:"github-repository"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-repository"}},[a._v("#")]),a._v(" Github Repository")]),a._v(" "),n("a",{staticClass:"link-preview",attrs:{href:"https://github.com/nyancodeid/preact-helloworld",target:"_blank"}},[n("div",{staticClass:"link-preview--content"},[n("p",{staticClass:"title"},[a._v("GitHub - nyancodeid/preact-helloworld: Preact Hello World [#3]")]),n("p",[a._v("Preact Hello World [#3]. Contribute to nyancodeid/preact-helloworld development by creating an account on GitHub.")]),a._v(" "),n("p",[a._v("github.com")])]),n("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://avatars1.githubusercontent.com/u/24630806?s=400&v=4)"}})]),n("h2",{attrs:{id:"kesimpulan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kesimpulan"}},[a._v("#")]),a._v(" Kesimpulan")]),a._v(" "),n("p",[a._v("Pada series kali ini kita bertujuan membuat Project "),n("strong",[a._v("Hello World")]),a._v(" sederhana yang mengenalkan pada kita cara membuat "),n("em",[a._v("Functional Component, Classes Component, Component Life Cycle, Props, dan Best Practise")]),a._v(" dalam mengorganisir Component kita. Dari series ini juga kita bisa membuat project Preact untuk pertama kita dengan "),n("code",[a._v("Preact-CLI")]),a._v(".")]),a._v(" "),n("p",[a._v("Penjelasan untuk Component, Props, dan Component Life Cycle akan dibahas terpisah pada series selanjutnya.")]),a._v(" "),n("Disqus")],1)}),[],!1,null,null,null);t.default=e.exports}}]);