(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{248:function(a,e,t){"use strict";t.r(e);var n=t(19),r=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"preact-cli-command-line-bikin-semua-jadi-mudah"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preact-cli-command-line-bikin-semua-jadi-mudah"}},[a._v("#")]),a._v(" Preact-CLI: Command Line Bikin Semua Jadi Mudah")]),a._v(" "),t("Author",{attrs:{name:"Ryan Aunur Rassyid"}}),a._v(" "),t("FeaturedImage",{attrs:{src:"/images/covers/preact-cli--nyandev-blog.jpg",author:"Antenna",source:"unsplash.com",sourceLink:"https://unsplash.com/photos/FDV1BaKNKEo"}}),a._v(" "),t("blockquote",[t("p",[a._v("Preact CLI helps you get started building a blazing-fast Preact PWA in just a few seconds.")])]),a._v(" "),t("p",[a._v("Untuk membuat project baru dengan teknologi dan struktur folder dan component yang sama memang sedikit menyusahkan. Bagaimana mana tidak?, kita membuat struktur folder dari awal, "),t("em",[a._v("set-up")]),a._v(" semua dependency dan mengatur bundle tool agar bekerja dengan baik. Ditambah lagi kita harus mengatur dan mempersiapkan coding kita agar memiliki kriteria "),t("em",[a._v("production-ready")]),a._v(" yang diharapkan ketika aplikasi di deploy dapat diakses dengan cepat, efisien, dan optimal.")]),a._v(" "),t("p",[a._v("Dengan dihadirkannya fitur "),t("strong",[a._v("PWA")]),a._v(" ("),t("em",[a._v("Progressive Web App")]),a._v(") di Google Chrome membuat para developer ingin agar web app miliknya juga support penuh dengan fitur ini. Namun konfigurasi nya terkadang begitu menyebalkan, kita harus menorganisir semua asset dan berurusan dengan "),t("em",[a._v("versioning")]),a._v(" untuk setiap assets.")]),a._v(" "),t("h2",{attrs:{id:"table-of-content"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-content"}},[a._v("#")]),a._v(" Table of Content")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#table-of-content"}},[a._v("Table of Content")])]),t("li",[t("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),t("li",[t("a",{attrs:{href:"#fitur"}},[a._v("Fitur")])]),t("li",[t("a",{attrs:{href:"#instalasi"}},[a._v("Instalasi")])]),t("li",[t("a",{attrs:{href:"#penggunaan"}},[a._v("Penggunaan")]),t("ul",[t("li",[t("a",{attrs:{href:"#official-templates"}},[a._v("Official Templates")])])])]),t("li",[t("a",{attrs:{href:"#cli-options"}},[a._v("CLI Options")]),t("ul",[t("li",[t("a",{attrs:{href:"#preact-create"}},[a._v("preact create")])]),t("li",[t("a",{attrs:{href:"#preact-build"}},[a._v("preact build")])]),t("li",[t("a",{attrs:{href:"#preact-watch"}},[a._v("preact watch")])]),t("li",[t("a",{attrs:{href:"#preact-list"}},[a._v("preact list")])])])]),t("li",[t("a",{attrs:{href:"#referensi"}},[a._v("Referensi")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),t("p",[a._v("Preact CLI adalah aplikasi berbasis Command Line yang mengatur dan menghandle setup dan coding kamu secara instant dan "),t("em",[a._v("painless")]),a._v(". Yang menarik adalah project kita sudah "),t("em",[a._v("production-ready")]),a._v(" sekaligus PWA Support.")]),a._v(" "),t("p",[a._v("Preact CLI ini sendiri adalah salah satu project dari Preact Team yang open-source di "),t("a",{attrs:{href:"https://github.com/preactjs/preact-cli",target:"_blank",rel:"noopener noreferrer"}},[a._v("github.com"),t("OutboundLink")],1),a._v(" yang bisa kamu intip coding nya, mungkin untuk kamu yang ingin tau apa saya yang dilakukkan open aplikasi ini selama mengatur project kamu.")]),a._v(" "),t("h2",{attrs:{id:"fitur"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fitur"}},[a._v("#")]),a._v(" Fitur")]),a._v(" "),t("p",[a._v("Berikut adalah fitur fitur yang ada pada Preact CLI sekaligus keunggulannya.")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("100/100 Lighthouse score")]),a._v(", right out of the box ("),t("a",{attrs:{href:"https://googlechrome.github.io/lighthouse/viewer/?gist=142af6838482417af741d966e7804346",target:"_blank",rel:"noopener noreferrer"}},[a._v("proof"),t("OutboundLink")],1),a._v(")")]),a._v(" "),t("li",[a._v("Fully "),t("strong",[a._v("automatic code splitting")]),a._v(" for routes")]),a._v(" "),t("li",[a._v("Transparently code-split any component with an ["),t("code",[a._v("async!")]),a._v("] prefix")]),a._v(" "),t("li",[a._v("Auto-generated [Service Workers] for offline caching powered by [sw-precache]")]),a._v(" "),t("li",[a._v("[PRPL] pattern support for efficient loading")]),a._v(" "),t("li",[a._v("Zero-configuration pre-rendering / server-side rendering hydration")]),a._v(" "),t("li",[a._v("Support for CSS Modules, LESS, Sass, Stylus; with Autoprefixer")]),a._v(" "),t("li",[a._v("Monitor your bundle/chunk sizes with built-in tracking")]),a._v(" "),t("li",[a._v("Automatic app mounting, debug helpers & Hot Module Replacement")]),a._v(" "),t("li",[a._v("In just "),t("strong",[a._v("4.5kb")]),a._v(" you get a productive environment:\n"),t("ul",[t("li",[a._v("[preact]")]),a._v(" "),t("li",[a._v("[preact-router]")]),a._v(" "),t("li",[a._v("1.5kb of conditionally-loaded polyfills for [fetch] & [Promise]")])])])]),a._v(" "),t("p",[a._v("Semua yang dibutuhkan untuk membuat project kamu cepat ada pada Preact CLI. Fitur yang penulis sangat terbantu adalah "),t("em",[a._v("code-split")]),a._v(" dan "),t("em",[a._v("auto-generated SW")]),a._v(". Fitur tersebut memungkinkan kita memisah code javascript yang dibutuhkan dan tidak dibutuhkan oleh halaman yang diakses. Misalnya kita navigate ke halaman login di "),t("code",[a._v('"/login"')]),a._v(", maka website akan memuat file javascript yang berhubungan atau yang dibutuhkan pada halaman tersebut. Jadi file javascript lain tidak akan dimuat.")]),a._v(" "),t("h2",{attrs:{id:"instalasi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instalasi"}},[a._v("#")]),a._v(" Instalasi")]),a._v(" "),t("blockquote",[t("p",[a._v("Important: Node.js > V6.x is a minimum requirement.")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g preact-cli\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" preact-cli\n")])])]),t("h2",{attrs:{id:"penggunaan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#penggunaan"}},[a._v("#")]),a._v(" Penggunaan")]),a._v(" "),t("p",[a._v("Setelah preact-cli di install secara global, seharusnya kamu sudah bisa menuliskan perintah "),t("code",[a._v("preact")]),a._v(" di terminal atau command-line kamu.")]),a._v(" "),t("p",[a._v("Untuk memulai project preact kamu menggunakan Preact CLI kamu bisa menggunakan perintah "),t("code",[a._v("create")]),a._v(" dengan syntax dibawah ini.")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ preact create "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("template-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("project-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("Contohnya")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ preact create default my-project\n")])])]),t("h3",{attrs:{id:"official-templates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#official-templates"}},[a._v("#")]),a._v(" Official Templates")]),a._v(" "),t("p",[a._v("Preact team menyediakan sejumlah template official yang bisa kamu gunakan untuk memulai sebuah project sesuai dengan kebutuhkan fitur-nya.")]),a._v(" "),t("p",[a._v("Template project yang tersedia yaitu:")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("default")]),a._v(" - Default template dengan semua fitur yang ada pada preact-cli seperti yang disebutkan di atas.")]),a._v(" "),t("li",[t("strong",[a._v("material")]),a._v(" - Material template yang sudah tersedua "),t("code",[a._v("preact-material-components")]),a._v(".")]),a._v(" "),t("li",[t("strong",[a._v("simple")]),a._v(" - Template paling simple untuk yang ingin coba atau start dengan template yang minimalis.")]),a._v(" "),t("li",[t("strong",[a._v("netlify")]),a._v(" - Template untuk CMS Netlify.")]),a._v(" "),t("li",[t("strong",[a._v("typescript")]),a._v(" - Default template dengan implementasi typescript.")]),a._v(" "),t("li",[t("strong",[a._v("widget")]),a._v(" - Template untuk widget yang akan dipasang/diembed pada website lain.")])]),a._v(" "),t("h2",{attrs:{id:"cli-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-options"}},[a._v("#")]),a._v(" CLI Options")]),a._v(" "),t("h3",{attrs:{id:"preact-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preact-create"}},[a._v("#")]),a._v(" preact create")]),a._v(" "),t("p",[a._v("Untuk memulai membuat project preact kamu bisa menggunakan perintah ini, dibandingkan dengan membuat folder dan setup semua dari awal. Perintah "),t("code",[a._v("create")]),a._v(" memiliki opsi opsi yang harusnya tidak kamu lewatkan, misalnya opsi "),t("code",[a._v("--name")]),a._v(" dan "),t("code",[a._v("--yarn")]),a._v(". Opsi tersebut memang optional dan diberikan langsung default nilainya, contohnya "),t("code",[a._v("--name")]),a._v(" akan mengikuti nama folder yang diberikan dan "),t("code",[a._v("--yarn")]),a._v(" secara default akan menggunakan "),t("code",[a._v("npm")]),a._v(" sebagai default package manager.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ preact create <template-name> <project-name>\n\n  --name        The application name.\n  --cwd         A directory to use instead of $PWD.\n  --force       Force option to create the directory for the new app  [boolean] [default: false]\n  --yarn        Installs dependencies with yarn.                      [boolean] [default: false]\n  --git         Initialize version control using git.                 [boolean] [default: false]\n  --install     Installs dependencies.                                [boolean] [default: true]\n")])])]),t("p",[a._v("Catatan: Jika kamu tidak memberikan data yang spesifik untuk perintah "),t("code",[a._v("preact create")]),a._v(", akan muncul pertanyaan ketika kamu menjalankan-nya.")]),a._v(" "),t("h3",{attrs:{id:"preact-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preact-build"}},[a._v("#")]),a._v(" preact build")]),a._v(" "),t("p",[a._v("Membuat versi production untuk project kamu.")]),a._v(" "),t("p",[a._v("Ada beberapa opsi yang akan diberikan nilai default "),t("code",[a._v("true")]),a._v(". Opsi tersebut adalah adanya service worker, ESM, dan inline-css. Maka untuk memberikan nilai "),t("code",[a._v("false")]),a._v(" terhadap opsi tersebut maka kamu perlu menambahkan prefix ketika menjalankan perintah "),t("code",[a._v("preact build")]),a._v(" yaitu "),t("code",[a._v("--no-<opsi>")]),a._v(", contohnya")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("preact build --no-sw --no-esm --no-inline-css\n")])])]),t("p",[a._v("Daftar opsi perintah "),t("code",[a._v("preact build")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ preact build\n\n    --src              Specify source directory  (default src)\n    --dest             Specify output directory  (default build)\n    --cwd              A directory to use instead of $PWD  (default .)\n    --sw               Generate and attach a Service Worker  (default true)\n    --json             Generate build stats for bundle analysis\n    --template         Path to custom HTML template\n    --preload          Adds preload tags to the document its assets  (default false)\n    --analyze          Launch interactive Analyzer to inspect production bundle(s)\n    --prerenderUrls    Path to pre-rendered routes config  (default prerender-urls.json)\n    -c, --config       Path to custom CLI config  (default preact.config.js)\n    --esm              Builds ES-2015 bundles for your code.  (default true)\n    --brotli           Adds brotli redirects to the service worker.  (default false)\n    --inline-css       Adds critical css to the prerendered markup.  (default true)\n    -v, --verbose      Verbose output\n    -h, --help         Displays this message\n")])])]),t("h3",{attrs:{id:"preact-watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preact-watch"}},[a._v("#")]),a._v(" preact watch")]),a._v(" "),t("p",[a._v("Menjalankan development server dengan fitur "),t("code",[a._v("hot-module-replacement")]),a._v(" dan "),t("code",[a._v("module-watcher")]),a._v(" sehingga ketika ada perubahan terjadi maka preact-cli akan secara otomatis meng-compile code kita. Mungkin akan terasa lama saat menjalankan perintah "),t("code",[a._v("preact watch")]),a._v(" namun ketika ada perubahan terdeteksi maka prosess compile akan jauh lebih cepat.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ preact watch\n\n    --src           Specify source directory  (default src)\n    --cwd           A directory to use instead of $PWD  (default .)\n    --esm           Builds ES-2015 bundles for your code.  (default true)\n    --sw            Generate and attach a Service Worker  (default false)\n    --rhl           Enable react hot loader  (default false)\n    --json          Generate build stats for bundle analysis\n    --https         Run server with HTTPS protocol\n    --key           Path to PEM key for custom SSL certificate\n    --cert          Path to custom SSL certificate\n    --cacert        Path to optional CA certificate override\n    --prerender     Pre-render static content on first run\n    --template      Path to custom HTML template\n    -c, --config    Path to custom CLI config  (default preact.config.js)\n    -H, --host      Set server hostname  (default 0.0.0.0)\n    -p, --port      Set server port  (default 8080)\n    -h, --help      Displays this message\n")])])]),t("p",[a._v("Catatan:")]),a._v(" "),t("ol",[t("li",[a._v("kamu dapat menjalankan development server dengan protocol "),t("code",[a._v("HTTPS")]),a._v(" dengan cara menambahkan env variable "),t("code",[a._v("HTTPS=true")]),a._v(" saat menjalankan "),t("code",[a._v("preact watch")]),a._v(". contoh "),t("code",[a._v("HTTPS=true preact watch")]),a._v(".")]),a._v(" "),t("li",[a._v("Dan kamu juga bisa custom "),t("code",[a._v("PORT")]),a._v(" melalui env variable dengan cara "),t("code",[a._v("PORT=8091 preact watch")]),a._v(".")])]),a._v(" "),t("h3",{attrs:{id:"preact-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preact-list"}},[a._v("#")]),a._v(" preact list")]),a._v(" "),t("p",[a._v("Menampilkan daftar template official dari preact js team untuk preact-cli.")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("$ preact list\n")])])]),t("h2",{attrs:{id:"referensi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#referensi"}},[a._v("#")]),a._v(" Referensi")]),a._v(" "),t("a",{staticClass:"link-preview",attrs:{href:"https://github.com/preactjs/preact-cli",target:"_blank"}},[t("div",{staticClass:"link-preview--content"},[t("p",{staticClass:"title"},[a._v("GitHub - preactjs/preact-cli: 😺 Your next Preact PWA starts in 30 seconds.")]),t("p",[a._v("😺 Your next Preact PWA starts in 30 seconds. Contribute to preactjs/preact-cli development by creating an account on GitHub.")]),a._v(" "),t("p",[a._v("github.com")])]),t("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://avatars0.githubusercontent.com/u/26872990?s=400&v=4)"}})]),t("a",{staticClass:"link-preview",attrs:{href:"https://preactjs.com/cli/",target:"_blank"}},[t("div",{staticClass:"link-preview--content"},[t("p",{staticClass:"title"},[a._v("Introduction – Preact CLI")]),t("p",[a._v("Preact is a fast 3kB alternative to React with the same modern API.")]),a._v(" "),t("p",[a._v("preactjs.com")])]),t("div",{staticClass:"link-preview--thumbnail",staticStyle:{"background-image":"url(https://preactjs.com/assets/app-icon.png)"}})]),t("Disqus")],1)}),[],!1,null,null,null);e.default=r.exports}}]);