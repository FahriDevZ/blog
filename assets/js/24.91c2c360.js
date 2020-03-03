(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{260:function(a,t,n){"use strict";n.r(t);var e=n(3),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"berkenalan-dengan-virtual-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#berkenalan-dengan-virtual-dom"}},[a._v("#")]),a._v(" Berkenalan dengan Virtual DOM")]),a._v(" "),n("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),n("FeaturedImage",{attrs:{src:"/images/covers/javascript-virtual-dom-nyandev-blog.jpg",author:"Leo Foureaux",source:"unsplash.com",sourceLink:"https://unsplash.com/photos/inQCuuA1MMo"}}),a._v(" "),n("h2",{attrs:{id:"apa-itu-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apa-itu-dom"}},[a._v("#")]),a._v(" Apa itu DOM?")]),a._v(" "),n("p",[a._v("Sebelum kita membahas tentang Virtual-DOM, tidak etis kalau kita tidak kenal dengan DOM terlebih dahulu.")]),a._v(" "),n("p",[n("strong",[a._v("DOM")]),a._v(" adalah singkatan dari "),n("em",[a._v("Document Object Model")]),a._v(". Ini adalah cara untuk merepresentasikan dokumen terstruktur melalui sebuah Object. DOM juga merupakan konvensi untuk lintas platform dan bahasa independen untuk berinteraksi dengan data dalam HTML, XML dan lain lain. Web Browser lah yang menangani implementasi detail DOM yang memungkinkan berinteraksi dengan Javascript dan CSS. Kita dapat mencari "),n("code",[a._v("node")]),a._v(" dan mengubah detailnya, menghapusnya dan menambahkan node baru.")]),a._v(" "),n("p",[a._v("Sampai hari ini DOM API sudah hampir cross-platform dan cross-browser. Lalu apa masalahnya?")]),a._v(" "),n("h3",{attrs:{id:"dom-problem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom-problem"}},[a._v("#")]),a._v(" DOM Problem?")]),a._v(" "),n("p",[a._v("Masalah utama dari DOM adalah tidak pernah dioptimalkan untuk membuat Dynamic UI (Tampilan yang dinamis).")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://telegra.ph/file/55d8cb709a4728caa8d17.png",alt:"parsing HTML and building a DOM tree - developers.google.com"}}),a._v(" "),n("em",[a._v("parsing HTML and building a DOM tree - "),n("a",{attrs:{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part3",target:"_blank",rel:"noopener noreferrer"}},[a._v("developers.google.com"),n("OutboundLink")],1)])]),a._v(" "),n("p",[a._v("Kita bisa menggunakan Javascript atau library seperti jQuery. Tapi jQuery hanya membantu sedikit mengurangi masalah tersebut. Tapi bayangkan untuk kedepannya misalnya kita memiliki 1000 div element pada website kita yang pastinya akan menyebabkan performa issue kan, kita tidak ingin pengguna website kita merasa terganggu dengan adanya masalah ini.")]),a._v(" "),n("p",[a._v("Untuk sekarang W3C Group sedang mengerjakan standart baru "),n("strong",[a._v("Shadow DOM")]),a._v(".")]),a._v(" "),n("p",[a._v("Shadow DOM masih dalam draft untuk standart baru DOM dari W3C. Spesifikasi ini menjelaskan metode menggabungkan beberapa DOM Tree ke dalam satu hierarki dan bagaimana DOM Trees ini berinteraksi satu sama lain dalam dokumen, sehingga memungkinkan komposisi DOM yang lebih baik.")]),a._v(" "),n("p",[a._v("Opsi yang lain adalah Virtual-DOM. Virtual DOM masih menggunakan Standard DOM tapi menggunakan seminim mungkin dan sangat efisien.")]),a._v(" "),n("h2",{attrs:{id:"virtual-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[a._v("#")]),a._v(" Virtual DOM")]),a._v(" "),n("p",[a._v("Ketika kita ingin berinteraksi dengan DOM maka kita harus bersentuhan langsung dengan node tersebut, namun dari pada bersentuhan langsung, kita bisa membuat abstraknya yang artinya kita membuat salinan DOM yang lebih ringan. Jadi kita bisa berinteraksi dengan salinan DOM ini dengan sangat cepat dan efisien sehingga kita bisa membandingkan node mana saja yang memiliki perubahan antara DOM Tree asli dan juga Virtual DOM kita yang akhirnya alih alih me-render semua node kita hanya merender node mana yang berubah.")]),a._v(" "),n("p",[a._v("Cara ini dinilai lebih cepat dan efisien dari pada bekerja langsung dengan DOM. Namun cara ini akan tepat jika bekerja dengannya dengan cara yang benar. Ada dua masalah yang harus dipecahkan: Ketika merender ulang DOM dan Cara melakukannya secara efisien.")]),a._v(" "),n("h3",{attrs:{id:"apa-yang-membuat-virtual-dom-sangat-cepat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#apa-yang-membuat-virtual-dom-sangat-cepat"}},[a._v("#")]),a._v(" Apa yang membuat Virtual-DOM sangat cepat?")]),a._v(" "),n("p",[a._v("Ada beberapa faktor yang mempengaruhi kenerja Virtual-DOM, antara lain:")]),a._v(" "),n("ul",[n("li",[a._v("Efficient diff algorithms.")]),a._v(" "),n("li",[a._v("Batching DOM read/write operations.")]),a._v(" "),n("li",[a._v("Efficient update of sub-tree only.")])]),a._v(" "),n("p",[a._v("Seperti yang kita tau bahwa faktor diatas tidaklah mudah untuk diterapkan, atau malah bukan solusi yang anda dapat. Ada beberapa library yang membantu kamu untuk menerapkan penggunaan Virtual-DOM dan yang paling terkenal adalah "),n("strong",[a._v("ReactJS")]),a._v(" oleh Facebook.")]),a._v(" "),n("h2",{attrs:{id:"reactjs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactjs"}},[a._v("#")]),a._v(" ReactJS")]),a._v(" "),n("p",[a._v("React JS - adalah javascript library untuk membangun user interfaces yang dikembangkan oleh Facebook. Yang mempopulerkan konsep Virtual-DOM adalah React JS sendiri. React menciptakan lightweight tree dari javascript object yang meniru DOM Tree yang asli. React adalah "),n("em",[a._v("library")]),a._v(" dan bukan "),n("em",[a._v("framework")]),a._v(", jadi tidak bisa dibandingkan dengan Angular atau Ember.")]),a._v(" "),n("p",[a._v("Contoh library atau framework lainnya adalah:")]),a._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/Matt-Esch/virtual-dom",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[a._v("virtual-dom")]),n("OutboundLink")],1),a._v(" - A JavaScript Virtual DOM and diffing algorithm.")]),a._v(" "),n("li",[n("a",{attrs:{href:"http://lhorie.github.io/mithril/",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[a._v("Mithril")]),n("OutboundLink")],1),a._v(" - A Javascript Framework for Building Brilliant Applications.")]),a._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Bobris/Bobril",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[a._v("Bobril")]),n("OutboundLink")],1),a._v(" - Component oriented framework inspired by Mithril and ReactJs.")]),a._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/joelrich/citojs",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[a._v("cito.js")]),n("OutboundLink")],1),a._v(" - JavaScript framework for building fast, scalable and modularized web applications.")])]),a._v(" "),n("h2",{attrs:{id:"jadi-seperti-apa-dom-dan-virtual-dom-itu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jadi-seperti-apa-dom-dan-virtual-dom-itu"}},[a._v("#")]),a._v(" Jadi seperti apa DOM dan Virtual-DOM itu?")]),a._v(" "),n("p",[a._v("Kita ambil contoh kode HTML dibawah ini, bagaimana kedua nya memperlakukkan code HTML:")]),a._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token doctype"}},[a._v("<!DOCTYPE html>")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("html")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("lang")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("en"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("ul")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("li")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("list__item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("List item"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("body")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),n("p",[a._v("Dokumen di atas bisa direpresentasikan sebagai DOM Tree sebagai berikut:")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/posts/dom-element.png",alt:"DOM Tree"}})]),a._v(" "),n("p",[a._v("Sedangkan untuk Virtual-DOM akan terlihat kurang lebih seperti ini:")]),a._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" vdom "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  tagName"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"html"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  children"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      tagName"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"head"')]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      tagName"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"body"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      children"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          tagName"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ul"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          attributes"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"class"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"list"')]),a._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          children"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n              tagName"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"li"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n              attributes"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"class"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"list__item"')]),a._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n              textContent"),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[a._v('"List item"')]),a._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// end li")]),a._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// end ul")]),a._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// end body")]),a._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),n("h2",{attrs:{id:"bagaimana-virtual-dom-kedepannya"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bagaimana-virtual-dom-kedepannya"}},[a._v("#")]),a._v(" Bagaimana Virtual-DOM kedepannya?")]),a._v(" "),n("p",[a._v("Ini menarik karena untuk tahun ini ada petarung baru dalam dunia Javascript yang muncul dengan konsep baru, yaitu "),n("strong",[a._v("Svelte")]),a._v(". Bertolak belakang dengan React, Svelte tidak mengusung konsep Virtual-DOM karena mereka percaya bahwa memang Virtual DOM cepat, namun ada cara lain untuk mengelolah DOM sendiri menjadi lebih cepat.")]),a._v(" "),n("blockquote",[n("p",[a._v('"Unlike traditional UI frameworks, Svelte is a compiler that knows at build time how things could change in your app, rather than waiting to do the work at run time." - svelte.dev')])]),a._v(" "),n("p",[a._v("Untuk lebih lanjut membahas Virtual DOM menurut developer Svelte, mereka menyediakan page kusus untuk membahas masalah ini:")]),a._v(" "),n("a",{staticClass:"link-preview",attrs:{href:"https://svelte.dev/blog/virtual-dom-is-pure-overhead",target:"_blank"}},[n("div",{staticClass:"link-preview--content"},[n("p",{staticClass:"title"},[a._v("Virtual DOM is pure overhead")]),n("p",[a._v("Let's retire the 'virtual DOM is fast' myth once and for all")]),a._v(" "),n("p",[a._v("svelte.dev")])]),n("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://svelte.dev/images/twitter-card.png)"}})]),n("p",[a._v("Sebuah teknik akan cocok diterapkan dengan cara dan penggunaan yang tepat, mungkin Virtual DOM cocok di library ReactJS sedangkan dari Svelte mungkin tidak karena konsep mereka berbeda dengan ReactJS dalam menangani DOM dan pandangan mereka tentang optimasi untuk Front End.")]),a._v(" "),n("h2",{attrs:{id:"kesimpulan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kesimpulan"}},[a._v("#")]),a._v(" Kesimpulan")]),a._v(" "),n("p",[a._v("Virtual-DOM adalah sebuah teknik dan sebuah set algoritma yang memungkinkan kita untuk meningkatkan performa front-end dengan cara menghindari bekerja langsung dengan DOM dan hanya bekerja dengan Javascript Object ringan yang meniru DOM Tree asli. Walaupun ini bukan teknik lama tapi ide dari virtual dom sudah lama namun dikarenakan implementasinya yang sulit menjadikannya kurang populer sebelum adanya library React yang membuat semuanya menjadi mudah.")]),a._v(" "),n("Disqus")],1)}),[],!1,null,null,null);t.default=s.exports}}]);