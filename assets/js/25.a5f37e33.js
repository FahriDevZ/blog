(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{248:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"preact-hooks-untuk-functional-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#preact-hooks-untuk-functional-component"}},[a._v("#")]),a._v(" Preact Hooks: untuk Functional Component")]),a._v(" "),s("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),s("FeaturedImage",{attrs:{src:"/images/covers/preact-hooks--nyandev-blog.jpg"}}),a._v(" "),s("blockquote",[s("p",[a._v("Hooks is a new concept that allows you to compose state and side effects. They allow you to reuse stateful logic between components.")])]),a._v(" "),s("p",[a._v("Ketika kita membuat component kita akan berfikir apakah component ini akan menggunakan Function atau Class. Kedua nya memang berbeda dan memiliki keuntungan dan kekurangan masing masing. Misalnya, kita ingin membuat sebuah component yang sederhana dan hanya menampilkan nilai dari props saja. Tapi ditengah jalan kita merasa bahwa component ini membutuhkan lifecycle methods atau state yang akhirnya kita melakukkan refactor component tersebut menjadi class component.")]),a._v(" "),s("p",[a._v("Permasalahan ini ada bahkan untuk pengguna React sekalipun. Kabar baiknya untuk React versi "),s("code",[a._v("16.8")]),a._v(" mulai diperkenalkan fitur "),s("code",[a._v("React Hooks")]),a._v(". Tentu saja Preact juga mengadaptasi fitur luar biasa ini, bagaimana tidak. Fitur ini memungkinkan kita untuk berinteraksi dengan Lifecycle dan State dalam Functional Component. Kali ini kita akan berkenalan lebih dekat dengan fitur yang diusung oleh Developer React yang ada pada Preact.")]),a._v(" "),s("h2",{attrs:{id:"table-of-contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#table-of-contents"}},[a._v("Table of Contents")])]),s("li",[s("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#import-hooks-features"}},[a._v("Import hooks features")])]),s("li",[s("a",{attrs:{href:"#stateful-hooks"}},[a._v("Stateful hooks")]),s("ul",[s("li",[s("a",{attrs:{href:"#usestate"}},[a._v("useState")])]),s("li",[s("a",{attrs:{href:"#usereducer"}},[a._v("useReducer")])])])]),s("li",[s("a",{attrs:{href:"#memorization"}},[a._v("Memorization")]),s("ul",[s("li",[s("a",{attrs:{href:"#usememo"}},[a._v("useMemo")])]),s("li",[s("a",{attrs:{href:"#usecallback"}},[a._v("useCallback")])])])]),s("li",[s("a",{attrs:{href:"#referensi"}},[a._v("Referensi")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),s("p",[s("code",[a._v("Hook")]),a._v(" adalah sebuah konsep baru yang memungkinkan kita untuk mengubah state dan side effects. Hook juga memungkinkan kita untuk menggunakan kembali ("),s("em",[a._v("reuse")]),a._v(") stateful logic antar component.")]),a._v(" "),s("p",[a._v("Cara paling mudah untuk memahami Hook adalah membandingkan antara component berbasis Class. Dibawah ini adalah contoh component penghitung sederhana yang dibuat menggunakan Classes Component.")]),a._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Counter")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Component")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  state "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    value"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("increment")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("prev")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" value"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" prev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n        Counter: ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("button")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("onClick")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("increment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("Increment")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Dan dibawah ini adalah component dengan fungsi yang sama namun ditulis menggunakan Functional Component.")]),a._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Counter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" setValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" increment "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n      Counter: ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("button")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("onClick")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("increment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("Increment")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[a._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("Pada point ini mungkin ada kesamaan antara kedua nya namun kenyataanya Hook membuat component lebih rapi dan simpel.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),s("p",[a._v("Mungkin ini terlihat aneh, tenang kamu tidak sendiri. Penulis awalnya juga berfikiran begitu. Butuh pembiasaan dan study case untuk bisa menerima dan memahami konsep Hook yang luar biasa.")])]),a._v(" "),s("p",[a._v("Kata kunci yang paling penting dalam memahami Hook menurut penulis adalah, "),s("code",[a._v("Array Destructuring")]),a._v(", "),s("code",[a._v("Syntax")]),a._v(", dan "),s("code",[a._v("Side Effect")]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"import-hooks-features"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-hooks-features"}},[a._v("#")]),a._v(" Import hooks features")]),a._v(" "),s("p",[a._v("Untuk menggunakan API Hooks dalam project Preact, kamu harus import module tersebut terlebih dahulu. Cara nya adalah sebagai berikut.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" useState "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'preact/hooks'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"stateful-hooks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stateful-hooks"}},[a._v("#")]),a._v(" Stateful hooks")]),a._v(" "),s("h3",{attrs:{id:"usestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usestate"}},[a._v("#")]),a._v(" useState")]),a._v(" "),s("p",[a._v("Pada contoh diatas, kita menggunakan "),s("code",[a._v("useState")]),a._v(". useState adalah sebuah Hook, dan akan mengembalikan nilai dari state (pada contoh diatas: value) dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut (setValue). Fungsi setValue disini mirip dengan cara kerja "),s("code",[a._v("this.setState")]),a._v(" jadi bayangkan bahwa kalau state ditampung pada object state nah kita disini membuatnya lebih kecil dengan membuat state yang lebih kecil dengan methode setState nya sendiri.")]),a._v(" "),s("p",[a._v("useState memiliki parameter yang harus diisi, yaitu init value atau value awal. Contohnya disini parameter kita adalah "),s("code",[a._v("0")]),a._v(", jadi nilai awal dari state "),s("code",[a._v("value")]),a._v(" adalah "),s("code",[a._v("0")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" stateName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" setStateName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("INITIAL_VALUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("increment")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setStateName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("stateName "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// You can also pass a callback to the setter")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("decrement")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("setStateName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("currentCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" currentCount "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("Walaupun kamu bebas menggunakan variabel apa untuk mendefinsikan state kamu. Pastikan untuk mengikuti aturan atau best practice nya untuk memudahkan Team membaca kodingan kamu. Untuk "),s("code",[a._v("stateName")]),a._v(" pastikan menggunakan nama yang mempresentasikan nama value tersebut, misalnya "),s("code",[a._v("value")]),a._v(", "),s("code",[a._v("name")]),a._v(", "),s("code",[a._v("isLoading")]),a._v(". Dan untuk "),s("code",[a._v("setStateName")]),a._v(" gunakan format yang sama dengan "),s("code",[a._v("stateName")]),a._v(" namun dengan menambahkan "),s("code",[a._v("set")]),a._v(" didepannya, misalnya "),s("code",[a._v("setValue")]),a._v(", "),s("code",[a._v("setName")]),a._v(", "),s("code",[a._v("setIsLoading")]),a._v(". Dan pastikan bahwa kamu menggunakan Camel Case pada setiap pemberian nama variable untuk menunjukkan konsistensi kamu.")]),a._v(" "),s("h3",{attrs:{id:"usereducer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usereducer"}},[a._v("#")]),a._v(" useReducer")]),a._v(" "),s("p",[a._v("Hook useReducer memiliki kemiripan dengan redux. Dibandingkan dengan "),s("code",[a._v("useState")]),a._v(" lebih mudah digunakan ketika kamu memiliki complex state logic yang dimana state selanjutnya bergantung pada state sebelumnya.")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" initialState "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("reducer")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("switch")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'increment'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'decrement'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'reset'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Unexpected action'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Counter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Returns the current state and a dispatch function to")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// trigger an action")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" initialState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'increment'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'decrement'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'reset'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("reset"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"memorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memorization"}},[a._v("#")]),a._v(" Memorization")]),a._v(" "),s("p",[a._v("Untuk menyimpan secara sementara (cache) perubahan pada state kita dibantu oleh beberapa hook berikut untuk meringankan kerja UI untuk nilai dependency yang tidak mengalami perubahan maka function tidak dikerjakan.")]),a._v(" "),s("h3",{attrs:{id:"usememo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usememo"}},[a._v("#")]),a._v(" useMemo")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" memoized "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useMemo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("expensive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Only re-run the expensive function when any of these")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// dependencies change")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"usecallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usecallback"}},[a._v("#")]),a._v(" useCallback")]),a._v(" "),s("p",[a._v("Hook "),s("strong",[a._v("useCallback")]),a._v(" dapat digunakan untuk memastikan bahwa fungsi yang dikembalikan akan tetap sama secara referensi selama tidak ada dependensi yang berubah. Ini dapat digunakan untuk mengoptimalkan pembaruan child component ketika mereka bergantung pada referensi yang sama untuk melewati pembaruan (misalnya. "),s("strong",[a._v("ShouldComponentUpdate")]),a._v(").")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" onClick "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("useCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("valueA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" valueB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("valueA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" valueB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("useCallback memiliki 2 argument, yaitu "),s("strong",[a._v("Function")]),a._v(" dan "),s("strong",[a._v("Dependency")]),a._v(". Untuk bisa mengakses "),s("code",[a._v("valueA")]),a._v(" dan "),s("code",[a._v("valueB")]),a._v(" maka kedua variable tersebut dipassing pada argument ke-2 method "),s("code",[a._v("useCallback")]),a._v(" yang dibungkus kedalam Array.")]),a._v(" "),s("h2",{attrs:{id:"referensi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referensi"}},[a._v("#")]),a._v(" Referensi")]),a._v(" "),s("a",{staticClass:"link-preview",attrs:{href:"https://medium.com/codelabs-unikom/mengenal-react-hooks-63aafde79da0",target:"_blank"}},[s("div",{staticClass:"link-preview--content"},[s("p",{staticClass:"title"},[a._v("Mengenal React Hooks - UNIKOM Codelabs - Medium")]),s("p",[a._v("Ketika membuat component di React, kita akan mempertimbangkan apakah harus menggunakan class atau function? karena ketika membuat function component maka kita tidak akan bisa menggunakan state atau…")]),a._v(" "),s("p",[a._v("medium.com")])]),s("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://miro.medium.com/max/1200/1*yPmUyz7rwQTcI1FLkoZBQQ.png)"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);