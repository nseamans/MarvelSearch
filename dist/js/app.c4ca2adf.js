(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)r=o[u],s[r]&&h.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"202f8977"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"8774ab85"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){l=h[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.request=n,delete r[t],d.parentNode.removeChild(d),a(i)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[t]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00ae":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0740":function(t,e,a){"use strict";var n=a("00ae"),r=a.n(n);r.a},"0782":function(t,e,a){"use strict";var n=a("c366"),r=a.n(n);r.a},4730:function(t,e,a){"use strict"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n,r,s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2"}),a("div",{staticClass:"col-sm-8",attrs:{id:"navfeatures"}},[a("nav",{staticClass:"navbar navbar-expand-sm "},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("h4",[a("router-link",{attrs:{to:"/intro"}},[t._v("App Intro")])],1)]),t._m(1),a("li",{staticClass:"nav-item"},[a("h4",[a("router-link",{attrs:{to:"/search"}},[t._v("Search")])],1)]),t._m(2),a("li",{staticClass:"nav-item"},[a("h4",[a("router-link",{attrs:{to:"/list"}},[t._v("Full List")])],1)])])])]),a("div",{staticClass:"col-sm-2"})]),a("hr"),a("router-view")],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row nav"},[a("div",{staticClass:"col-sm-2"}),a("div",{staticClass:"col-sm-8"},[a("h1",{staticClass:"nav",staticStyle:{"text-align":"left"}},[t._v("Marvel Character Bible")])]),a("div",{staticClass:"col-sm-2"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("h4",[t._v("   |   ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("h4",[t._v("   |   ")])])}],c=(a("034f"),a("2877")),l={},u=Object(c["a"])(l,i,o,!1,null,null,null),h=u.exports,d=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Intro")],1)},m=[],v={},p=Object(c["a"])(v,n,r,!1,null,null,null),b=(p.exports,a("c106")),g=a("a380"),y=(a("bc3a"),{name:"home",components:{Search:b["default"],Intro:g["default"]}}),_=y,C=Object(c["a"])(_,f,m,!1,null,null,null),w=C.exports;s["a"].use(d["a"]);var E=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/search",name:"search",component:function(){return a.e("about").then(a.bind(null,"c106"))}},{path:"/fulllist",name:"fulllist",component:function(){return a.e("about").then(a.bind(null,"8ee2"))}},{path:"/list",name:"list",component:function(){return a.e("about").then(a.bind(null,"0471"))}},{path:"/character/id",name:"character",component:function(){return a.e("about").then(a.bind(null,"e5a5"))}},{path:"/Intro",name:"intro",component:function(){return a.e("about").then(a.bind(null,"a380"))}}]}),x=a("2f62");s["a"].use(x["a"]);var S=new x["a"].Store({state:{},mutations:{},actions:{}});a("4989"),a("ab8b");s["a"].config.productionTip=!1,new s["a"]({router:E,store:S,render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,a){},a380:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",{attrs:{id:"resultsection"}}),a("div",{staticClass:"row",attrs:{id:"avglist"}},[a("div",{staticClass:"col-sm-2"}),a("div",{staticClass:"col-sm-2"},[a("table",{staticClass:"table-bordered"},[t._m(0),t._l(t.character,function(e){return a("tr",[a("td",[t._v(" "+t._s(e)+" ")])])})],2)]),t._m(1),a("div",{staticClass:"col-sm-2"})])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Avengers Example Data")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-6",staticStyle:{"text-align":"left"}},[a("h4",[t._v("\n                    About \n                ")]),a("p",[t._v("\n                   The Marvel Character Bible functions as a search engine for the Marvel Character API.\n                ")]),a("h4",[t._v("\n                    How to use\n                ")]),a("p",[t._v("\n                    The search function returns names based on the search result given, clicking the clear button empties the search results. \n                    The full list provides all the characters in the Marvel extended universe sorted by letter. Clicking a name in either option\n                    will provide a summary of the character. \n                ")]),a("h4",[t._v("\n                    Some notes and limitations of the Marvel API\n                ")]),a("p",[t._v("\n                    First, it is important to note that there are several restrictions in how data can be called from the API. Requests can only contain 100 results\n                    (in otherwords, 100 characters can be called at a time). Second, Marvel limits an account to 3,000 calls a day. Retriving all of the names \n                    and performing searches on the database quickly ranks up the amount of requests made. I ask you to use other means fdor now to research marvel \n                    and to just view this site as an extention to my portfolio.\n                ")])])}],s=(a("7f7f"),a("ac6a"),a("bc3a")),i=a.n(s),o={name:"character",data:function(){return{character:[]}},mounted:function(){this.start()},methods:{linkCode:function(t){for(var e=this,a=(name,t),n="",r=a.length,s=0;s<r;s++)i.a.get("https://gateway.marvel.com:443/v1/public/characters/"+a[s]+"?apikey=19fe13a0b0fa0ca0574ec10a9458cbda").then(function(t){t.data.data.results.forEach(function(t){n=" "+t.name,e.character.push(n)})}).catch(function(t){console.log("ERROR"),console.log(t),document.getElementById("resultsection").innerHTML="Sorry, the amount of searches to the Marvel database allowed in one day have been exceeded by this site.",document.getElementById("navfeatures").style.visibility="hidden",document.getElementById("avglist").style.visibility="hidden"})},start:function(){var t=["1010338","1009220","1009664","1009351","1009338","1009187","1009610","1009282","1010801","1010991","1009297","1009697","1009562","1010733","1010763","1010735","1010744","1011026","1010365"];this.linkCode(t)}}},c=o,l=(a("0740"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=u.exports},c106:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",{attrs:{id:"resultsection"}}),t._m(0),a("div",[a("div",{staticClass:"row",attrs:{id:"resulttable"}},[a("div",{staticClass:"col-sm-2"}),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("table",{staticClass:"table table-bordered table-striped mb-0"},[a("tr",[t._m(1),a("td",[a("div",{staticClass:"input-group mb-3"},[a("input",{staticClass:"form-control",attrs:{type:"text",id:"search"}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-success",attrs:{type:"submit"},on:{click:function(e){return t.startSearch(20)}}},[t._v("Display Results")])])])])]),a("tr",[a("th",[t._v("Results:")]),a("td",[a("div",{staticStyle:{height:"120px",width:"360px",overflow:"auto"}},t._l(t.searchResults,function(e){return a("div",{attrs:{id:"charInfo"}},[a("router-link",{attrs:{to:{name:"character",params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" \n                                        ")])],1)}),0)])])])])]),a("div",{staticClass:"col-sm-2"})])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"resulttext"}},[a("div",{staticClass:"col-sm-3"}),a("div",{staticClass:"col-sm-6"},[a("p",{staticClass:"infotext"},[t._v("\n                    This page contains the records of all Marvel characters referenced in the Marvel API. Clicking a characters name will \n                    Open a display giving the characters name, description, and a thumbnail if avalible for the character. \n                ")]),a("p",{staticClass:"infotext"},[t._v("\n                    Note: Marvel's api has a dailey limit on the amount of calls that can be made. This means that when my daily call amount has been exhausted\n                    no more results will be displayed. \n                ")])]),a("div",{staticClass:"col-sm-3"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("label",{attrs:{for:"search"}},[t._v("Search Characters:")])])}],s=(a("7f7f"),a("6762"),a("2fdb"),a("ac6a"),a("4730"),a("bc3a")),i=a.n(s),o={name:"Characters",size:0,data:function(){return{searchResults:[],characters:[],txtInput:""}},mounted:function(){},methods:{start:function(t){var e=0,a=0;for(e=0;e<t;e++)this.getCharacters(a),a+=100},toggle:function(){return 0==this.toggleState?(document.getElementById("searchmth").innerHTML="Use Search Bar",this.toggleState=1,1):1==this.toggleState?(document.getElementById("searchmth").innerHTML="View List",this.toggleState=0,0):void 0},startSearch:function(t){var e=0,a=0,n=document.getElementById("search").value;for(e=0;e<t;e++)this.searchCharacter(a,n),a+=100},searchCharacter:function(t,e){var a=this,n="http://gateway.marvel.com/v1/public/characters?apikey=19fe13a0b0fa0ca0574ec10a9458cbda&limit=100&offset="+t;i.a.get(n).then(function(t){t.data.data.results.forEach(function(t){t.name.includes(e)&&a.searchResults.push(t)})}).catch(function(t){console.log(t),document.getElementById("resultsection").innerHTML="Sorry, the amount of searches to the Marvel database allowed in one day have been exceeded by this site.",document.getElementById("resulttable").style.visibility="hidden",document.getElementById("resulttext").style.visibility="hidden"})}}},c=o,l=(a("0782"),a("2877")),u=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=u.exports},c366:function(t,e,a){}});
//# sourceMappingURL=app.c4ca2adf.js.map