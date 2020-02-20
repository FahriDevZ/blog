/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aac2bdaeb92f632d9207cfcab5fd2c80"
  },
  {
    "url": "assets/css/0.styles.e3bad6a3.css",
    "revision": "3f62731a10e357518fda14722efa870d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.46671c6b.js",
    "revision": "afd135548c26c3869e6d73d289e72ec7"
  },
  {
    "url": "assets/js/11.cb16ab3b.js",
    "revision": "101cb43b990486ab98c82deaeef6b540"
  },
  {
    "url": "assets/js/12.70c19123.js",
    "revision": "a5041afb3617e47a06e0d8eb68b4bcad"
  },
  {
    "url": "assets/js/13.a352abda.js",
    "revision": "a638bf8e99db1489f566a97e979cb320"
  },
  {
    "url": "assets/js/14.027847cf.js",
    "revision": "c44d1a2f99485d4c93963326ef31fee6"
  },
  {
    "url": "assets/js/15.8483e7cf.js",
    "revision": "9f4beab2be1a0c310c2508927839fe72"
  },
  {
    "url": "assets/js/16.a0ddd785.js",
    "revision": "a9ddfee2020f054e3334f490ad98638b"
  },
  {
    "url": "assets/js/17.ae37a612.js",
    "revision": "5fd077924c4ff388ab35df800fad172f"
  },
  {
    "url": "assets/js/18.0609acaf.js",
    "revision": "689334979ade31e48dd26a72266ce10a"
  },
  {
    "url": "assets/js/19.035dbc92.js",
    "revision": "ad36c98700854401ee44b249b13707a3"
  },
  {
    "url": "assets/js/2.abbe9cb6.js",
    "revision": "1014a8a951718887d9fbf393da9f91f0"
  },
  {
    "url": "assets/js/20.479c9c3e.js",
    "revision": "e6dfd145acbd3e920c1e17b0c3bbe204"
  },
  {
    "url": "assets/js/21.0d92ee9c.js",
    "revision": "661732686a2fcf92e22f0dab92240c84"
  },
  {
    "url": "assets/js/22.4e2f9f58.js",
    "revision": "c9b0c017154878f24eca17e4f396da07"
  },
  {
    "url": "assets/js/23.833c4406.js",
    "revision": "2f2b0afbac485ef86f94cf812349d9dc"
  },
  {
    "url": "assets/js/24.a72b2a6c.js",
    "revision": "5f9ab1efdfbae96d05ac84e3efdf393c"
  },
  {
    "url": "assets/js/25.24e90d51.js",
    "revision": "6cab08d92c6f61cdd72162d93324082e"
  },
  {
    "url": "assets/js/26.63c46b02.js",
    "revision": "69cd2cb13f56d1b5c4b87f7c981a0363"
  },
  {
    "url": "assets/js/27.b1790832.js",
    "revision": "f9ecfdcf433aba5708baa3c083cc8a75"
  },
  {
    "url": "assets/js/28.5cec7934.js",
    "revision": "5ea5a4b6d3b48e361d46b5620d68f275"
  },
  {
    "url": "assets/js/29.dcf81928.js",
    "revision": "a1a28b147002ca8f3247225e7bfe2019"
  },
  {
    "url": "assets/js/3.87454ec6.js",
    "revision": "007b92b4e1c1cfbc80a32d2c081bfa78"
  },
  {
    "url": "assets/js/30.91b04d0a.js",
    "revision": "0892bb47ea79108ccd126e192935d056"
  },
  {
    "url": "assets/js/31.13bfbbc5.js",
    "revision": "59e54d555c7b4f2f7b32d35c0cf4c6f9"
  },
  {
    "url": "assets/js/32.7eac1050.js",
    "revision": "88f80b12941556a7e8472ab4fd343dbe"
  },
  {
    "url": "assets/js/33.4c548d4a.js",
    "revision": "7fd7ad4ad791d038bab8fa0364303c52"
  },
  {
    "url": "assets/js/34.cb735a00.js",
    "revision": "b172d2249bb4f5d5a7acee3689953a6b"
  },
  {
    "url": "assets/js/35.d62d15ff.js",
    "revision": "e723ab0813672920ea833b4b0fa0f3c9"
  },
  {
    "url": "assets/js/36.e12e8f8c.js",
    "revision": "89ed14e2d671c9e77003b6d39a008086"
  },
  {
    "url": "assets/js/37.7c1c6f1e.js",
    "revision": "f081936d3606b133dfec350f7f9132d3"
  },
  {
    "url": "assets/js/4.e70ae272.js",
    "revision": "0e837274e1536ba0c6ead20c644ce04d"
  },
  {
    "url": "assets/js/5.16ee427d.js",
    "revision": "42303fae21f8697077c59128683184fd"
  },
  {
    "url": "assets/js/6.17a2e2ce.js",
    "revision": "7faa1c2122e90f1d189408a04a3e8768"
  },
  {
    "url": "assets/js/7.b59cf1ea.js",
    "revision": "6eca5a6e3f3cb9cee66f0bfa0ae2918f"
  },
  {
    "url": "assets/js/8.ea447abf.js",
    "revision": "0918fcb5d835ce4c9adad27158518556"
  },
  {
    "url": "assets/js/9.6c3aae6b.js",
    "revision": "4bc508d3eb1ac8ac7bb79f70ce45628f"
  },
  {
    "url": "assets/js/app.c01be4a7.js",
    "revision": "d1423712b063811a95755ffcdc9a77da"
  },
  {
    "url": "bookmark/harapan-adalah-candu-bagi-orang-orang-kalah.md.html",
    "revision": "0a1f6cea2b5b059f2334ab94cee55009"
  },
  {
    "url": "bookmark/index.html",
    "revision": "568188c47046e8275f3f816770429a0e"
  },
  {
    "url": "bookmark/lonely-poor-surabayan.html",
    "revision": "fdca0a547a52d1128ff32c778c8410cd"
  },
  {
    "url": "devops/index.html",
    "revision": "7221cfb786e58d4e92d234a0a6916940"
  },
  {
    "url": "fonts/charter-regular-webfont.woff",
    "revision": "0329ae93aa60383ea3f0029ead09fb67"
  },
  {
    "url": "fonts/charter-regular-webfont.woff2",
    "revision": "d23eb1a45378c78e4eb2f6c2048001af"
  },
  {
    "url": "fonts/charter-regular.otf",
    "revision": "6d2ccbe36a2dd3dd73c87780600b74f0"
  },
  {
    "url": "fonts/hasklig-regular.otf",
    "revision": "23605e016e3e71426f75af4691317e9b"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.eot",
    "revision": "aeca20ec65107a826245343143eee8a8"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.otf",
    "revision": "23605e016e3e71426f75af4691317e9b"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.svg",
    "revision": "a1163734e23f972ab6a7d4aa20167dc6"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.ttf",
    "revision": "3b4d87b0e411d79075dc472b97ee3c6d"
  },
  {
    "url": "fonts/hasklig/Hasklig-Regular.woff",
    "revision": "56a61640c6e7eb609d1430c72cdefe6d"
  },
  {
    "url": "fonts/keivit-bold-webfont.woff",
    "revision": "2b98b3d571b47ac9b66faee0ac51b18d"
  },
  {
    "url": "fonts/keivit-bold-webfont.woff2",
    "revision": "af20a363074555abfe3c299f3e9e712a"
  },
  {
    "url": "fonts/keivit-bold.otf",
    "revision": "6b39c3bc9dd0b080cd10337e0131c801"
  },
  {
    "url": "fonts/keivit-regular-webfont.woff",
    "revision": "60154a96c66965413e53f4378ed80b3c"
  },
  {
    "url": "fonts/keivit-regular-webfont.woff2",
    "revision": "c4edd4fa8c5e93a602a84da6944f9414"
  },
  {
    "url": "fonts/keivit-regular.otf",
    "revision": "50f4325b6fdab7b63d1f12399a50b4e8"
  },
  {
    "url": "fonts/medium.otf",
    "revision": "0dfd04903a45443a9cd24c9bb1413237"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "4455da30635d70c34f65b78c8cb5b0d4"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "7abd0f3a747f96d1eb58f57ec1babce4"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "26b34d01a77dab4f2f50d2ef993d7f94"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "07779725df3b12063d322a25b30d7287"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "3a48fde5fbb6fccfb9113950836d077d"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "bca78706a45758e1f3819393b00c41fe"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "3b1238e24554e7a717390e3803af1c9a"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "7b249f2ac7494579ad5913bdbbe3dfe1"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "0f82c33b2e083f254a3fafb4e0fe21d1"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "7abd0f3a747f96d1eb58f57ec1babce4"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "12adc447fd97e08218945f68cba73086"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "97e36a85aba2262697b469bfa6fcd6d2"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "2ccc54d2781cd501e8ab71655aab893f"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "3b72eb3d9d7bc9d23402f1ed681dfab4"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "bca78706a45758e1f3819393b00c41fe"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "a9276838b53933ae0ff74181c1249fe6"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "fe8ef35a1f3c8f3bc7caefbb4c945f3e"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "fe8ef35a1f3c8f3bc7caefbb4c945f3e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "e6bbc9b90ecc84c21ab3cc26e1921b7c"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "df83cddda2daf28ee6dc330d0e5f363e"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "3b1238e24554e7a717390e3803af1c9a"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "7abd0f3a747f96d1eb58f57ec1babce4"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "d68155d1e2d5b31d8620f431a4a8b95c"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "d080c32261b23f71014e640211766eab"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "3e7b6e63a1f0182fd56aa54c680beae5"
  },
  {
    "url": "images/covers/belajar-financial-literasi-nyandev-blog.jpg",
    "revision": "99a753acac185f0babfa380284ab77fb"
  },
  {
    "url": "images/covers/belajar-preact-bundler.jpg",
    "revision": "ada79aaa5c7bbb65f061a29b4c289022"
  },
  {
    "url": "images/covers/belajar-preact-hello-world.jpg",
    "revision": "a388897556a93437719d6c72042b2665"
  },
  {
    "url": "images/covers/belajar-preact-perkenalan.png",
    "revision": "eef8ff86d0350c60f8f533472a08c3ac"
  },
  {
    "url": "images/covers/cara-setup-nodejs-project-dengan-typescript.jpg",
    "revision": "1d6cf6d6329b480693368a507af384f3"
  },
  {
    "url": "images/covers/extract-meta-data--nyandev-blog.jpg",
    "revision": "c81f55975ac38dd2ae98362fc8dda7e4"
  },
  {
    "url": "images/covers/harapan-adalah-candu-bagi.jpg",
    "revision": "b306c4935eb5ab99c4ed4f7fd5e0b717"
  },
  {
    "url": "images/covers/infomasi-password-modem-telkom.jpg",
    "revision": "24e6eedc6e2ab8f19144dd9a46274350"
  },
  {
    "url": "images/covers/javascript-modules-bundler-nyandev-blog.jpg",
    "revision": "dd812d877d8b1ea9fbf4529ad3f7d570"
  },
  {
    "url": "images/covers/javascript-modules-bundler-nyandev-blog.png",
    "revision": "1d7f4d03e96b765b259a850c45ae628a"
  },
  {
    "url": "images/covers/javascript-virtual-dom-nyandev-blog.jpg",
    "revision": "05fed71bf5d98a899d32ba517c65dd5d"
  },
  {
    "url": "images/covers/javascript-virtual-dom-nyandev-blog.png",
    "revision": "ad514bf7085105c80e9474d18c705d1f"
  },
  {
    "url": "images/covers/lonely-poor-surabayan.jpg",
    "revision": "0c4939b3562aaa56cb42bd0e4feb4b99"
  },
  {
    "url": "images/covers/preact-cli--nyandev-blog.jpg",
    "revision": "3c3c76f0d5ae713a3fd88917f8309725"
  },
  {
    "url": "images/covers/preact-hooks--nyandev-blog.jpg",
    "revision": "c76a5880f6b953fb1aeab469fe394e66"
  },
  {
    "url": "images/covers/preact-unistore--nyandev-blog.png",
    "revision": "46b555477af76d7af988ccccefe0b92d"
  },
  {
    "url": "images/covers/programming-icons.jpg",
    "revision": "bbf5f5cd408ad74dca9f0666dff88f8b"
  },
  {
    "url": "images/covers/programming-icons.png",
    "revision": "22d19dec8b5bf7d0abeab138a950fcc2"
  },
  {
    "url": "images/covers/tips-login-wifiid-linux--nyandev-blog.jpg",
    "revision": "4b55074b3c3e99531c9ff5dcda981e69"
  },
  {
    "url": "images/covers/unistore-array-state.jpg",
    "revision": "d7366e5d6bd29abb82d8cb226637786f"
  },
  {
    "url": "images/posts/14a74b7b05be374ea53fe.png",
    "revision": "5651b95dd7287fd3680ca6b1f0b5180e"
  },
  {
    "url": "images/posts/16f03fc52e1f6cadee414.png",
    "revision": "50998a707fa0df7ff921929284093be7"
  },
  {
    "url": "images/posts/7755e0da64e4b66e6cbd4.png",
    "revision": "54f01ec5fc8bba407998c925a2410e54"
  },
  {
    "url": "images/posts/devtool-timeline.png",
    "revision": "51a414a1da85d8f84b31f6d5dcabcabd"
  },
  {
    "url": "images/posts/javascript-bundlers.png",
    "revision": "9900ae0bacccbc73e4b8aaea885e0745"
  },
  {
    "url": "images/posts/javascript-export-compatibility.png",
    "revision": "f1e6ea85b78f6df7a72b53cbfcce72c6"
  },
  {
    "url": "images/posts/javascript-import-compatibility.png",
    "revision": "d94ad04db1112dcbe6e02d32bfc44ef4"
  },
  {
    "url": "images/posts/modem-HG8245H.png",
    "revision": "8b82d5a2de6a6ab2440ece4f87be4010"
  },
  {
    "url": "images/posts/module-bundler.png",
    "revision": "0ff2a967e702cd0f4f007ad434363d58"
  },
  {
    "url": "images/posts/preact-bundle-pobia.png",
    "revision": "8db5680d7991f1af31e5e196df29d882"
  },
  {
    "url": "images/posts/schema-bundler.png",
    "revision": "2bf73464d7eebb6b4e5d2c0ef38112a8"
  },
  {
    "url": "images/profiles/avatar.jpg",
    "revision": "30e02b03e0fdfd856e8f85f0e425b32a"
  },
  {
    "url": "index.html",
    "revision": "ebb08e6eebb037ce67fcfa6ffbaf5219"
  },
  {
    "url": "informasi/belajar-finansial-literasi.html",
    "revision": "02466842cd7deb5d83b576847acc1279"
  },
  {
    "url": "informasi/index.html",
    "revision": "90ec61638db6dcf2e3fcee2db013874c"
  },
  {
    "url": "informasi/password-modem-telkom-hg8245h.html",
    "revision": "cc15c0c2aee196981a3695f9f0bfc052"
  },
  {
    "url": "javascript/index.html",
    "revision": "e8831dee6be1fbc3972560af0b38525d"
  },
  {
    "url": "javascript/modules-and-bundler.html",
    "revision": "8e84614d46ed90f3dbc42afad3ba94a6"
  },
  {
    "url": "javascript/setup-nodejs-project-dengan-typescript.html",
    "revision": "63e31fb94a18d8e93369b86a3673d804"
  },
  {
    "url": "javascript/virtual-dom.html",
    "revision": "0ce471a12a821d6dbce72a0e1eac86cc"
  },
  {
    "url": "logo.png",
    "revision": "b3539ff484fe4aaebcdae1f4a84c918e"
  },
  {
    "url": "logo.svg",
    "revision": "2baecf043886b72588aa50d30774fe8b"
  },
  {
    "url": "preact/belajar-preact/apa-itu-preact-js.html",
    "revision": "ce31655b7d95bd64ded342ebc82e6df4"
  },
  {
    "url": "preact/belajar-preact/index.html",
    "revision": "29c7445c063bfb8d4e9db692ec7f21a8"
  },
  {
    "url": "preact/belajar-preact/preact-hello-world.html",
    "revision": "8326bf9fe55becd79824284fd01c0497"
  },
  {
    "url": "preact/belajar-preact/setup-preact-app.html",
    "revision": "cddcc8233a9c61143cb87eedcd755ec1"
  },
  {
    "url": "preact/index.html",
    "revision": "75011ede55b5fdf1f926d596a9e8dbbe"
  },
  {
    "url": "preact/preact-cli.html",
    "revision": "6921a56af877088d1e4388b3659e7778"
  },
  {
    "url": "preact/preact-hooks.html",
    "revision": "e8348e08cc1369fd7ab819acf4bdd1cc"
  },
  {
    "url": "preact/preact-unistore.html",
    "revision": "c3be1aec9b51b00e2536ca1f35302e1f"
  },
  {
    "url": "preact/unistore-array.html",
    "revision": "ff0805f310f546cad19a9a448f712ceb"
  },
  {
    "url": "thumbnail/belajar-finansial-literasi--nyandev-blog.jpg",
    "revision": "cbcd1583416102117074fe0e43e30330"
  },
  {
    "url": "thumbnail/belajar-preact-bundler.jpg",
    "revision": "0461b49bc95a07d43240475fc30f5748"
  },
  {
    "url": "thumbnail/belajar-preact-hello-world.jpg",
    "revision": "e08a3bbfcd560f7b8b7e5e5f7aab9f89"
  },
  {
    "url": "thumbnail/belajar-preact-parcel-bundler.jpg",
    "revision": "9b4e04b11ab9ed185f038a18948d3a00"
  },
  {
    "url": "thumbnail/belajar-preact-perkenalan.jpg",
    "revision": "8327285aba0a69abfbd9cd9eaf89d38b"
  },
  {
    "url": "thumbnail/extract-meta-data--nyandev-blog.jpg",
    "revision": "433a308ce49fe75c3310cadfff68415a"
  },
  {
    "url": "thumbnail/javascript-modules-bundler-nyandev-blog.jpg",
    "revision": "0f358f8d2614900d593396208c9d2af2"
  },
  {
    "url": "thumbnail/javascript-virtual-dom-nyandev-blog.jpg",
    "revision": "05a1eba49d664dd8a8588f4baa85cdc0"
  },
  {
    "url": "thumbnail/lonely-poor-surabayan.jpg",
    "revision": "efeaefd21ac2d4d8419a9873f99b0248"
  },
  {
    "url": "thumbnail/preact-cli--nyandev-blog.jpg",
    "revision": "f4eb0eeb77d60724a65e22c1b768172a"
  },
  {
    "url": "thumbnail/preact-hooks--nyandev-blog.jpg",
    "revision": "08c4a0e3e72f82f6032843f1f1564f24"
  },
  {
    "url": "thumbnail/preact-unistore--nyandev-blog.jpg",
    "revision": "328acf1fdb2421dc39a5ef41712aef17"
  },
  {
    "url": "thumbnail/tips-login-wifiid-linux--nyandev-blog.jpg",
    "revision": "21a0aaf44636aa619338980baafc6639"
  },
  {
    "url": "tips/index.html",
    "revision": "8c4888800b5b6aa780b1b012184b99a7"
  },
  {
    "url": "tips/meta-data-extract.html",
    "revision": "9e8e7d8835b811e60d485640d4a711cf"
  },
  {
    "url": "tips/wifi-id-not-redirected.html",
    "revision": "8eb2508bd1e0d938c5ce399e47fdbc20"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
