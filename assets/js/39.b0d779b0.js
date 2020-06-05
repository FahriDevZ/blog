(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{259:function(a,t,e){"use strict";e.r(t);var n=e(19),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"tips-reduce-bundle-size-of-laravel-mix-vue-2-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips-reduce-bundle-size-of-laravel-mix-vue-2-project"}},[a._v("#")]),a._v(" Tips: Reduce Bundle Size of Laravel Mix + Vue 2 Project")]),a._v(" "),e("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),e("FeaturedImage",{attrs:{src:"/images/covers/reduce-bundle-size-laravel-mix-vue.jpeg",author:"Markus Spiske",source:"unsplash.com",sourceLink:"https://unsplash.com/photos/wkieEIVb1pA"}}),a._v(" "),e("h2",{attrs:{id:"diclaimer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#diclaimer"}},[a._v("#")]),a._v(" Diclaimer")]),a._v(" "),e("p",[a._v("Sebelum kita masuk ke dalam pembahasan, perlu diketahui bahwa project yang kali ini kita bahas adalah "),e("strong",[a._v("Web App")]),a._v(" (bukan website) yang dimana tujuan dari meminimalkan bundle size adalah untuk meningkatkan kecepatan loading dan minimalkan library yang tidak dibutuhkan.")]),a._v(" "),e("h2",{attrs:{id:"table-of-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#table-of-content"}},[a._v("#")]),a._v(" Table of Content")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#diclaimer"}},[a._v("Diclaimer")])]),e("li",[e("a",{attrs:{href:"#table-of-content"}},[a._v("Table of Content")])]),e("li",[e("a",{attrs:{href:"#ukuran-sebelum-di-optimalkan"}},[a._v("Ukuran sebelum di optimalkan")])]),e("li",[e("a",{attrs:{href:"#penerapan"}},[a._v("Penerapan")]),e("ul",[e("li",[e("a",{attrs:{href:"#extract-vue-style"}},[a._v("Extract Vue Style")])]),e("li",[e("a",{attrs:{href:"#laravel-mix-extract"}},[a._v("Laravel Mix Extract")])]),e("li",[e("a",{attrs:{href:"#tailwindcss-variants-coreplugin-and-purge"}},[a._v("TailwindCSS Variants, CorePlugin, and Purge")])]),e("li",[e("a",{attrs:{href:"#es2015-import-transform-cherry-pick"}},[a._v("ES2015 Import Transform Cherry-Pick")])]),e("li",[e("a",{attrs:{href:"#use-luxon-not-moment-js"}},[a._v("Use Luxon, not Moment.js")])])])]),e("li",[e("a",{attrs:{href:"#moment-of-truth-a-k-a-result"}},[a._v("Moment of Truth a.k.a Result")])]),e("li",[e("a",{attrs:{href:"#update-1-1-0"}},[a._v("Update 1.1.0")])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"ukuran-sebelum-di-optimalkan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ukuran-sebelum-di-optimalkan"}},[a._v("#")]),a._v(" Ukuran sebelum di optimalkan")]),a._v(" "),e("p",[a._v("Supaya ada gambaran ukuran file dan apa saja file nya berikut adalah hasil menjalankan perintah yarn prod.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/2d683ddff0ce4f9f191f6.png",alt:"Webpack Bundle Result"}}),a._v(" "),e("em",[a._v("Webpack Bundle Result")])]),a._v(" "),e("p",[a._v("Kita akan memperkecil dan membagi kembali file CSS dan JS yang sudah dibundle menjadi beberapa part supaya memaksimalkan prosess load dalam website. Sebelumnya ukuran file vendor.js ini parah banget bisa sampai 2MB lebih.")]),a._v(" "),e("p",[a._v("Oke kita akan melakukkan beberapa langkah untuk memperkecil ukuran file-file diatas. Berikut teknik atau tips yang akan kita gunakan:")]),a._v(" "),e("ol",[e("li",[a._v("Extract Vue Styles")]),a._v(" "),e("li",[a._v("Laravel Mix Extract (Code Splitting Build In)")]),a._v(" "),e("li",[a._v("TailwindCSS Variants and CorePlugin selection.")]),a._v(" "),e("li",[a._v("TailwindCSS Purge")]),a._v(" "),e("li",[a._v("ES2015/ES6 Import Transform Cherry-Pick")]),a._v(" "),e("li",[a._v("Use Luxon, not Moment.js")])]),a._v(" "),e("p",[a._v("Dan library yang cukup dikenal yang dipakai pada project ini adalah "),e("strong",[a._v("Vue, Leaflet, Luxon, Lodash, TaildwindCSS, Axios, Geolib")]),a._v(" dan beberapa plugin vue lainnya.")]),a._v(" "),e("p",[a._v("Oke sekarang kita petakkan mana library yang paling besar dampaknya terhadap ukuran file bundlenya dan yang bisa kita diminimalisir ukurannya. Dan ternyata "),e("strong",[a._v("Lodash")]),a._v(" dan "),e("strong",[a._v("TailwindCSS")]),a._v(" bisa, sedangkan yang lainnya sudah jadi ukuran fixed atau bisa dibilang sudah pas.")]),a._v(" "),e("p",[a._v("Selanjutnya kita bisa langsung eksekusi dengan memanfaatkan Tips diatas yang sudah kita pilih dan bisa diterapkan.")]),a._v(" "),e("blockquote",[e("p",[a._v("Screenshot diatas diambil setelah melakukkan teknik/tips optimasi nomor 2, 3, 4, dan 6")])]),a._v(" "),e("h2",{attrs:{id:"penerapan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#penerapan"}},[a._v("#")]),a._v(" Penerapan")]),a._v(" "),e("p",[a._v("Setelah diteliti metode atau teknik apa yang cocok, maka langsung saja kita terapkan satu persatu pada project kita.")]),a._v(" "),e("h3",{attrs:{id:"extract-vue-style"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extract-vue-style"}},[a._v("#")]),a._v(" Extract Vue Style")]),a._v(" "),e("p",[a._v("Vue sendiri pada default nya memiliki template file yang berekstensi .vue yang mana memiliki 3 elemen didalamnya, yaitu template, style, script. Nah kita akan mengeleminasi style supaya di extract keluar dari file bundle-nya yaitu app.js . Jadi secara default file vue akan di-bundle (CSS dan JS nya) menjadi satu file yang pada project ini yaitu app.js. Kita tidak mau itu terjadi dan akan mengeluarkan setiap style yang ada di file Vue menjadi file CSS sendiri.")]),a._v(" "),e("p",[a._v("Kita bisa melakukkan nya dengan menambahkan opsi di file "),e("code",[a._v("webpack.mix.js")]),a._v(" kita.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("mix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("options")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n  extractVueStyles"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'public/css/app-ui.css'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[a._v("Nah hasil style nya akan di berada di "),e("code",[a._v("public/css/app-ui.css")]),a._v(". Jangan lupa untuk menambahkan di Laravel View nya untuk memuat file css diatas.")]),a._v(" "),e("h3",{attrs:{id:"laravel-mix-extract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#laravel-mix-extract"}},[a._v("#")]),a._v(" Laravel Mix Extract")]),a._v(" "),e("p",[a._v("Laravel Mix sendiri punya mekanisme untuk memisahkan antara Logical App/Web dan Vendor atau library yang kita gunakan. Gunanya apa dipisah? untuk mencegah browser men-download ulang file vendor kembali ketika cache di browser dimuat ulang. Kita tidak mau ketika kita melakukkan perubahan pada Logical Web kita membuat browser memuat kembali library/vendor yang tidak kita ubah. Jadi kita pisah supaya yang dimuat ulang oleh browser adalah Logical web kita saja sedangkan file vendor tetap akan mengambil dari file yang sudah disimpan sebagai cache oleh browser.")]),a._v(" "),e("p",[a._v("Kita bisa melakukkan nya dengan menambahkan opsi di file "),e("code",[a._v("webpack.mix.js")]),a._v(" kita.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("mix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("extract")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("mix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("inProduction")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  mix"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Untuk memaksimalkan fitur extract ini kita bisa menambahkan versioning pada production build.")]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://laravel-mix.com/docs/5.0/extract",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("Library Code Splitting | Laravel Mix Documentation")]),e("p",[a._v("Documentation for Laravel Mix.")]),a._v(" "),e("p",[a._v("laravel-mix.com")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://telegra.ph/file/73935aea4865c151c4c70.png)"}})]),e("h3",{attrs:{id:"tailwindcss-variants-coreplugin-and-purge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tailwindcss-variants-coreplugin-and-purge"}},[a._v("#")]),a._v(" TailwindCSS Variants, CorePlugin, and Purge")]),a._v(" "),e("p",[e("strong",[a._v("TailwindCSS")]),a._v(" memiliki ukuran yang sedikit brutal karena semua style akan kita pakai semua jika kita tidak melakukkan "),e("em",[a._v("purgecss")]),a._v(" (mengeliminasi style yang tidak terpakai secara otomatis) dan memilih secara manual style mana yang kita pakai atau kita keep nantinya.")]),a._v(" "),e("p",[a._v("Pada file "),e("code",[a._v("tailwind.config.js")]),a._v(" kita akan menambahkan beberapa konfigurasi dan pastikan bahwa anda sudah mengkonfigurasi Laravel Mix anda dengan TailwindCSS sesuai dengan dokumentasi tailwind yang ada.")]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://tailwindcss.com/docs/installation/",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("Installation - Tailwind CSS")]),e("p",[a._v("Quick start guide for installing and configuring Tailwind CSS.")]),a._v(" "),e("p",[a._v("tailwindcss.com")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://tailwindcss.com/img/twitter-large-card.png)"}})]),e("p",[a._v("Berikut adalah beberapa contoh konfigurasi Tailwind yang dipakai pada project ini.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  purge"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./resources/js/**.*.vue'")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  corePlugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    float"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    fill"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    objectFit"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  variants"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    appearance"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    backgroundColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    borderColor"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("Untuk versi lengkapnya bisa ke Gist Github ini:\nhttps://gist.github.com/nyancodeid/19e2402d3f006a3d68f816ca5f59d977#file-tailwind-config-js")]),a._v(" "),e("h3",{attrs:{id:"es2015-import-transform-cherry-pick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es2015-import-transform-cherry-pick"}},[a._v("#")]),a._v(" ES2015 Import Transform Cherry-Pick")]),a._v(" "),e("p",[a._v("Untuk meng-import sebuah library di project biasanya kita melakukkan cara berikut:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" _ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'lodash'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" geolib "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'geolib'")]),a._v("\n")])])]),e("p",[a._v("Dengan melakukkan import dengan cara diatas, artinya kita meng-import seleuruh fitur dan method ada ada pada "),e("em",[a._v("library/package")]),a._v(" tersebut. Untuk meminimalisir ukuran bundle biasakan untuk meng-import method atau function yang diperlukan saja. Cara nya dengan import yang diperlukan atau biasa disebut "),e("strong",[a._v("Cherry-Pick")]),a._v(" (choose and take only).")]),a._v(" "),e("p",[a._v("Contoh penerapan untuk library diatas adalah sebagai berikut:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" uniqBy "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'lodash/uniqBy'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" getDistance "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'geolib/es/getDistance'")]),a._v("\n")])])]),e("p",[a._v("pada script diatas kita hanya ingin method "),e("strong",[a._v("uniqBy")]),a._v(" pada lodash dan method "),e("strong",[a._v("getDistance")]),a._v(" pada geolib. Kita bisa hemat banyak space dengan memakai yang kita perlu saja.")]),a._v(" "),e("p",[a._v("Setiap cara atau fitur yang dipakai pasti punya kekurangan dan kelebihannya, misalnya jika kita menggunakan "),e("em",[a._v("cherry-pick")]),a._v(" kita akan kesulitan untuk "),e("em",[a._v("maintenance")]),a._v(" jika kita perlu banyak method lain yang dimana kita harus meng-import satu per satu nya.")]),a._v(" "),e("p",[a._v("Untuk memudahkan pekerjaan kita, kita bisa menggunakan plugin untuk babel yang bernama "),e("code",[a._v("babel-plugin-lodash")]),a._v(" yang secara otomatis men-transform lodash yang di import seluruhnya menjadi method yang diperlukan. Contohnya seperti berikut:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/a8e3b51b2be1da2c9f608.png",alt:"babel-plugin-lodash - A simple transform to cherry-pick Lodash modules so you don’t have to."}}),a._v(" "),e("em",[a._v("babel-plugin-lodash - A simple transform to cherry-pick Lodash modules so you don’t have to.")])]),a._v(" "),e("a",{staticClass:"link-preview",attrs:{href:"https://www.npmjs.com/package/babel-plugin-lodash",target:"_blank"}},[e("div",{staticClass:"link-preview--content"},[e("p",{staticClass:"title"},[a._v("babel-plugin-lodash-npm")]),e("p",[a._v("Modular Lodash builds without the hassle.")]),a._v(" "),e("p",[a._v("www.npmjs.com")])]),e("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png)"}})]),e("p",[a._v("Kamu hanya perlu membuat file konfigurasi babel yaitu "),e("code",[a._v(".babelrc")]),a._v(" pada root folder project. Laravel Mix akan secara otomatis akan melakukkan merge pada konfigurasi babel milik Laravel Mix dengan custom config babel kita buat tadi.")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"plugins"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"lodash"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h3",{attrs:{id:"use-luxon-not-moment-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-luxon-not-moment-js"}},[a._v("#")]),a._v(" Use Luxon, not Moment.js")]),a._v(" "),e("p",[a._v("Project ini sebelumnya menggunakan Moment untuk memudahkan bekerja dengan Tanggal dan Waktu. Setelah mengetahui bahwa Moment juga membuat library yang serupa tapi dengan method dan penulisan yang lebih mudah dipahami kini kita memilih Luxon sebagai library yang menangani Waktu dan Tanggal.")]),a._v(" "),e("p",[a._v("Menurut situs "),e("strong",[a._v("BundlePhobia")]),a._v(" sendiri Moment.js memiliki ukuran bundle sebesar "),e("strong",[a._v("278KB")]),a._v(" sedangkan Luxon memiliki ukuran "),e("strong",[a._v("69KB")]),a._v(". Dari segi ukuran bundle sudah terlihat bahwa Luxon lebih unggul.")]),a._v(" "),e("p",[a._v("Tidak hanya keuntungan dari sisi ukuran saja yang lebih kecil, tapi penulisan kode jadi lebih mudah dipahami. Perbedaan paling jelas terlihat dari penulisan kode keduanya adalah Moment.js menerima tipe data apapun kedalam pemanggilan fungsi nya, sedangkan Luxon memisahkan hal tersebut. Berikut adalah contoh perbedaan penulisan Moment.js dan Luxon")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/1f93e51fd4c5e4b2ba8d7.png",alt:"Moment.js and Luxon Creation example"}}),a._v(" "),e("em",[a._v("Moment.js and Luxon Creation example")])]),a._v(" "),e("p",[a._v("Gimana? mudah di baca kan. Mungkin awalnya sedikit ribet tapi keuntungan yang tak dirasakan diawal akan dirasakan ketika anda tidak melihat kodingan anda selama beberapa hari.")]),a._v(" "),e("h2",{attrs:{id:"moment-of-truth-a-k-a-result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#moment-of-truth-a-k-a-result"}},[a._v("#")]),a._v(" Moment of Truth a.k.a Result")]),a._v(" "),e("p",[a._v("Setelah melakukkan beberapa optimasi diatas berikut adalah uji hasil bundle production:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/4fa783f5a900759e7cece.png",alt:"Result"}})]),a._v(" "),e("p",[a._v("File vendor.js turun sebanyak 29% , file app.js turun sebanyak 15%, di ikuti kenaikan file css yang tidak berdampak banyak dengan performa web kita jadi tidak masalah kalau file css sedikit lebih besar.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/53d67284002708f67c025.png",alt:"Webpack Bundle Analyzer"}}),a._v(" "),e("em",[a._v("Webpack Bundle Analyzer")])]),a._v(" "),e("p",[a._v("Done, kita sepakat bahwa hasilnya cukup memuaskan. Kita bisa mengurangi ukuran dari file bundle kita dengan cara cara yang lain yang mungkin anda tau. Kita sangat menantikan cara cara brilian lainnya untuk membuat web lebih dan lebih baik lagi.")]),a._v(" "),e("h2",{attrs:{id:"update-1-1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-1-1-0"}},[a._v("#")]),a._v(" Update 1.1.0")]),a._v(" "),e("p",[a._v("Ada beberapa perubahan yang saya lakukkan yang cukup banyak berdampak pada ukuran bundle nya. Ternyata terdapat library yang masuk kedalam file app.js yang tentu ini tidak diharapkan karena library seharusnya masuk ke vendor.js")]),a._v(" "),e("p",[a._v("Jadi perubahan tersebut adalah:")]),a._v(" "),e("ol",[e("li",[a._v("Move all required style into app.scss (sebelumnya di-import pada app.js inisialiasi Vue)")]),a._v(" "),e("li",[a._v("Temporary Disable JavascriptObfuscate for this article cases")]),a._v(" "),e("li",[a._v("Vue Plugin import fixed")])]),a._v(" "),e("p",[a._v("Berikut ukuran terakhir yang didapat:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/06dda2e9862d835e25151.png",alt:"Result Update 1.1.0"}})]),a._v(" "),e("p",[a._v("Detail hasil dari Webpack Bundle Analyzer")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://telegra.ph/file/cbe7c454e2bcf3ebf04a9.png",alt:"Bundle Analyzer"}}),a._v(" "),e("em",[a._v("Webpack Bundle Analyzer update 1.1.0 results")])]),a._v(" "),e("p",[a._v("Akhir kata semoga ilmu nya bermanfaat, sekian terima kasih.")]),a._v(" "),e("Disqus")],1)}),[],!1,null,null,null);t.default=s.exports}}]);