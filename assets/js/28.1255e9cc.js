(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{251:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"tips-cara-extract-meta-data-pada-halaman-website"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tips-cara-extract-meta-data-pada-halaman-website"}},[t._v("#")]),t._v(" Tips: Cara Extract Meta Data pada Halaman Website")]),t._v(" "),s("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),t._v(" "),s("FeaturedImage",{attrs:{src:"/images/covers/extract-meta-data--nyandev-blog.jpg"}}),t._v(" "),s("p",[t._v("Kalau kamu sering banget baca artikel di medium.com mungkin kalian tidak asing dengan tampilan priview berikut ini. Link preview ini mengambil data meta di web dan di tampilkan dalam bentuk card menarik.")]),t._v(" "),s("h2",{attrs:{id:"vuepress-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin"}},[t._v("#")]),t._v(" Vuepress Plugin")]),t._v(" "),s("p",[t._v("Untuk membuat custom element markdown ini kita perlu plugin bernama "),s("code",[t._v("vuepress-plugin-container")]),t._v(" . Plugin ini memungkinkan kita bikin custom render element di markdown kita. Plugin ini memakai module bernama "),s("code",[t._v("markdown-it")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("h3",{attrs:{id:"instalasi-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instalasi-plugin"}},[t._v("#")]),t._v(" Instalasi Plugin")]),t._v(" "),s("p",[t._v("Install plugin di folder project vuepress kamu dengan mengetikkan perintah")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-container\n")])])]),s("p",[t._v("jika kamu menggunakan yarn, install plugin dengan perintah berikut")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-container\n")])])]),s("h3",{attrs:{id:"mendifinisikan-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mendifinisikan-component"}},[t._v("#")]),t._v(" Mendifinisikan Component")]),t._v(" "),s("p",[t._v("Sebelum kita membuat component kita harus mendefiniskan terlebih dahulu format pemanggilan dan apa yang akan di render. Dengan menambahkannya di file "),s("code",[t._v("./vuepress/config.js")]),t._v(" di bagian plugins.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preview'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('<a href="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("link"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" target="_blank" class="link-preview">')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        after"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</a>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preview-content'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("title")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div class="link-preview--content"><p class="title">')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("</p>")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        after"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</div>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-plugin-container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preview-thumbnail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("link")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('<div class="link-preview--thumbnail" style="background-image: url(')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("link"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(');">')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        after"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'</div>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"menambahkan-style-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#menambahkan-style-css"}},[t._v("#")]),t._v(" Menambahkan Style (CSS)")]),t._v(" "),s("p",[t._v("Karena vuepress menggunakan "),s("code",[t._v("stylus")]),t._v(" maka syntax akan sedikit berbeda dengan css yang kita ketahui tapi format nya tetap lah sama.")]),t._v(" "),s("div",{staticClass:"language-styl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-styl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".link-preview")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("rem "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token func"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inset "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token func"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:hover")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-decoration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".link-preview--content")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token func"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),t._v("px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:last-child")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p:not(.title)")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("px")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token func"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.54")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("word-break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" break-word")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-height")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("px")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p.title")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),t._v(" CustomSansSerif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lucida Grande'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Arial"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sans-serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),t._v(" bold")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#212121")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("px")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("px")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".link-preview--thumbnail")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("170")]),t._v("px")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),t._v(" auto")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-height")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("167")]),t._v("px")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-size")]),t._v(" cover")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-repeat")]),t._v(" no-repeat")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-position")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50%")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property-declaration"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),t._v(" inset "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("px "),s("span",{pre:!0,attrs:{class:"token func"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n")])])]),s("h3",{attrs:{id:"penggunaan"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#penggunaan"}},[t._v("#")]),t._v(" Penggunaan")]),t._v(" "),s("p",[t._v("Contoh penggunaan dalam file markdown "),s("code",[t._v(".md")])]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v(":::: preview https://medium.com/@MFaridZia/belajar-state-management-pada-vue-js-dengan-vuex-ef6d0571bc0e\n\n::: preview-content Belajar State Management pada Vue.js...\nHallo semuanya, malem ini saya ada kesempatan nulis\n\nmedium.com\n:::\n::: preview-thumbnail https://miro.medium.com/max/800/1*X5Oziwil9"),s("span",{pre:!0,attrs:{class:"token italic"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("Wsslbwku")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("FSQ.jpeg\n:::\n::::\n")])])]),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("a",{staticClass:"link-preview",attrs:{href:"https://medium.com/@MFaridZia/belajar-state-management-pada-vue-js-dengan-vuex-ef6d0571bc0e",target:"_blank"}},[s("div",{staticClass:"link-preview--content"},[s("p",{staticClass:"title"},[t._v("Belajar State Management pada Vue.js...")]),s("p",[t._v("Hallo semuanya, malem ini saya ada kesempatan nulis artikel lagi nih mumpung di luar lagi hujan hehe, di tulisan kali ini saya akan nulis tentang…")]),t._v(" "),s("p",[t._v("medium.com")])]),s("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://miro.medium.com/max/800/1*X5Oziwil9_Wsslbwku_FSQ.jpeg)"}})]),s("h2",{attrs:{id:"command-prompt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-prompt"}},[t._v("#")]),t._v(" Command Prompt")]),t._v(" "),s("p",[t._v("Untuk memudahkan dalam extrak meta maka dibuatlah suatu API yang berjalan di runkit.io")]),t._v(" "),s("h3",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[t._v("#")]),t._v(" Script")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@runkit/runkit/express-endpoint/1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" extract "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meta-extractor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/fetch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extract")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" uri"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        link"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        thumbnail"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ogImage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-image'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        description"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("twitterDescription\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderResult")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(":::: preview ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("link"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n\\n::: preview-content ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n:::\\n::: preview-thumbnail ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thumbnail"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n:::\\n::::")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"pemanggilan-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pemanggilan-api"}},[t._v("#")]),t._v(" Pemanggilan API")]),t._v(" "),s("p",[t._v("Pemanggilan bisa di lakukkan dengan cara mengunjungi alamat endpoint yang sudah di buat di runkit.io sebelumnya. Dengan format parameter "),s("code",[t._v("url")]),t._v(" untuk alamat yang akan di ambil informasi meta tag nya.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("http https://untitled-okej29pce04f.runkit.sh/fetch?url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("URL_WEB\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or using curl")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://untitled-okej29pce04f.runkit.sh/fetch?url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("URL_WEB\n")])])]),s("p",[t._v("Hasil nya akan nampak seperti berikut")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://telegra.ph/file/fa5790f00cb63af08f6b3.png",alt:"Hasil Pemanggilan API di Terminal",title:"Hasil Pemanggilan API di Terminal"}}),t._v(" "),s("em",[t._v("Hasil Pemanggilan API di Terminal")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);