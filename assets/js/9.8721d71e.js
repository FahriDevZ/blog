(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{377:function(t,e,n){"use strict";n.r(e);n(9);var s={name:"Gist",props:{id:{type:String,required:!0},file:{type:String,required:!1}},data:function(){return{content:"Loading"}},mounted:function(){this.fetchGistData(this.id)},methods:{fetchGistData:function(t){var e,n=this,s="https://cors-anywhere.herokuapp.com/https://gist.github.com/".concat(t,".json");this.file&&(s+="?file=".concat(this.file)),(e=s,new Promise((function(t,n){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(4===s.readyState&&s.status>=200&&s.status<300)try{var e=JSON.parse(s.responseText);t(e)}catch(t){n(t)}},s.onerror=n,s.open("GET",e),s.send()}))).then((function(t){if(n.content=t.div,!document.getElementById("gist-stylesheet")){var e=document.createElement("link");e.id="gist-stylesheet",e.href=t.stylesheet,e.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(e)}}))}}},i=n(26),a=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"gist-area"}},[e("p",{domProps:{innerHTML:this._s(this.content)}})])}),[],!1,null,null,null);e.default=a.exports}}]);