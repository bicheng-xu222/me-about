"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/aboutMe/index.html","ed58e34e253150331102d0bd345bb983"],["/aboutMe/static/css/main.58e00227.css","7d17ef20eb532ff72cdb0f32bf29b4d1"],["/aboutMe/static/js/0.c5bed069.chunk.js","4d49cbd99bcf21ced671b4ff68b209ef"],["/aboutMe/static/js/1.0fb9a744.chunk.js","73ab10d031da591ebf0776b2468051f0"],["/aboutMe/static/js/main.f1c8ba65.js","c98a8b5f238f2b5a3eed184b3bd7ee95"],["/aboutMe/static/media/ChronicleDisplay-Bold.308a1789.ttf","308a1789c23b80181c8ade53a59b20f3"],["/aboutMe/static/media/ChronicleDisplay-Bold.64fbeeb2.woff","64fbeeb29ce743e365a8c6e8fe983f02"],["/aboutMe/static/media/ChronicleDisplay-Bold.78c53a8c.svg","78c53a8c4b683f002af6daa16c89d052"],["/aboutMe/static/media/ChronicleDisplay-Bold.97bbe797.woff2","97bbe797904530dc63bb350f3bd2d734"],["/aboutMe/static/media/ChronicleDisplay-Bold.9ee791ef.eot","9ee791ef2a8760d96e4a9cb8199e8798"],["/aboutMe/static/media/Gotham-Bold.4ea1f970.ttf","4ea1f970232ff0727e05299200356e39"],["/aboutMe/static/media/Gotham-Bold.660ab37f.woff2","660ab37fc3211e13e7bef1437a5a3c06"],["/aboutMe/static/media/Gotham-Bold.7052290b.woff","7052290b609b88c45f32a792d2eef733"],["/aboutMe/static/media/Gotham-Bold.7074fbe2.svg","7074fbe2bc791a29c745643253e860c8"],["/aboutMe/static/media/Gotham-Bold.ef6f2052.eot","ef6f2052a78156ee99dad264b32a2dfa"],["/aboutMe/static/media/Gotham-Book.4fede062.ttf","4fede062c3fff8e0a15bae5ec6a67fc3"],["/aboutMe/static/media/Gotham-Book.54696801.woff2","546968010731e9c1257220f68b7fbfe4"],["/aboutMe/static/media/Gotham-Book.6e3044b2.svg","6e3044b27547659cdbe4b38c093b6d1f"],["/aboutMe/static/media/Gotham-Book.9faee9d3.woff","9faee9d3428fed390e8cf415ff67dfdc"],["/aboutMe/static/media/Gotham-Book.c68b0986.eot","c68b098649ad7e7a661f8665ed78dcf7"],["/aboutMe/static/media/Gotham-Medium.299a4a41.svg","299a4a41312654169822f9f68ce6f679"],["/aboutMe/static/media/Gotham-Medium.b282b74e.ttf","b282b74eca7e3189e00ff886d287ceb7"],["/aboutMe/static/media/Gotham-Medium.bfd6fd34.woff2","bfd6fd34c255f0c15809efc35e0814ae"],["/aboutMe/static/media/Gotham-Medium.e019318a.eot","e019318a2e4a3832655f9a90f2bfa5c1"],["/aboutMe/static/media/Gotham-Medium.fabf4aeb.woff","fabf4aeb39575ac6b9ae930b6d86afe5"],["/aboutMe/static/media/contact-lg.030ac3f4.jpg","030ac3f4ccc949fa5cb57d6ff81e6cac"],["/aboutMe/static/media/contact-md.ae3f9a55.jpg","ae3f9a556f2bfee4f74f98ccd861752e"],["/aboutMe/static/media/contact-sm.d7f81cae.jpg","d7f81cae09cadb1da45435febed490ba"],["/aboutMe/static/media/contact-xl.030ac3f4.jpg","030ac3f4ccc949fa5cb57d6ff81e6cac"],["/aboutMe/static/media/contact-xs.d7f81cae.jpg","d7f81cae09cadb1da45435febed490ba"],["/aboutMe/static/media/experience-lg.70eb78e4.jpg","70eb78e46eba7a11e0014bdc5e2abbcb"],["/aboutMe/static/media/experience-md.70eb78e4.jpg","70eb78e46eba7a11e0014bdc5e2abbcb"],["/aboutMe/static/media/experience-sm.70eb78e4.jpg","70eb78e46eba7a11e0014bdc5e2abbcb"],["/aboutMe/static/media/experience-xl.70eb78e4.jpg","70eb78e46eba7a11e0014bdc5e2abbcb"],["/aboutMe/static/media/experience-xs.70eb78e4.jpg","70eb78e46eba7a11e0014bdc5e2abbcb"],["/aboutMe/static/media/intro-lg.b4e3acce.jpg","b4e3accee1ce23c79c95f4d1322285f5"],["/aboutMe/static/media/intro-md.6c292ca2.jpg","6c292ca2efd1a1349ec07f439fda7777"],["/aboutMe/static/media/intro-sm.930f9841.jpg","930f98414e6bcc5d5e2653ddbf8add2d"],["/aboutMe/static/media/intro-xl.b4e3acce.jpg","b4e3accee1ce23c79c95f4d1322285f5"],["/aboutMe/static/media/intro-xs.930f9841.jpg","930f98414e6bcc5d5e2653ddbf8add2d"],["/aboutMe/static/media/services-lg.f09ece88.jpg","f09ece887f8c7e71fe9f676dda26afdf"],["/aboutMe/static/media/services-md.35707fa0.jpg","35707fa02048679ca1d0a7e0fc627963"],["/aboutMe/static/media/services-sm.c9c852b9.jpg","c9c852b9da375ffc79e6140392be0caf"],["/aboutMe/static/media/services-xl.65fb3976.jpg","65fb39760e6bb0423f959ea46c3d0cbc"],["/aboutMe/static/media/services-xs.1d9a95ae.jpg","1d9a95ae5ba8c3ce2b46879adf3deb61"],["/aboutMe/static/media/whitney-bold.2db30ceb.woff","2db30ceba5f35fe8a743f370da61362d"],["/aboutMe/static/media/whitney-bold.5fb8ce4d.woff2","5fb8ce4dd89eee1e0e718083613841c6"],["/aboutMe/static/media/whitney-bold.adcf172b.ttf","adcf172b8d1374ca9542f788a364052e"],["/aboutMe/static/media/whitney-book.41850454.woff2","418504548dcd0b0105cf4147a7a1a8aa"],["/aboutMe/static/media/whitney-book.863f387f.woff","863f387f4f19e06fcd5f50e4c2c068ef"],["/aboutMe/static/media/whitney-book.a014fb8b.ttf","a014fb8b5149e7a9d86ec137f96d479b"],["/aboutMe/static/media/whitney-bookitalic.458811d1.woff","458811d16733dd6aff6388fb88f7a515"],["/aboutMe/static/media/whitney-bookitalic.e78fc143.ttf","e78fc143012ea992dad20812be0dacbb"],["/aboutMe/static/media/whitney-bookitalic.f23fc877.woff2","f23fc877e71943a7118aa26e28077c9c"],["/aboutMe/static/media/whitney-medium.2375cf68.woff2","2375cf68b209f31704abe58f02434096"],["/aboutMe/static/media/whitney-medium.9b6ff201.ttf","9b6ff2017c96fe006dfa27d9862f8ff7"],["/aboutMe/static/media/whitney-medium.edf9053c.woff","edf9053c222c3f13f426bdcc24efd37e"],["/aboutMe/static/media/whitney-mediumitalic.012998a9.woff2","012998a99db37f2b48fa897d7f6e5875"],["/aboutMe/static/media/whitney-mediumitalic.08c899b4.ttf","08c899b4e7bc2772db62e504118716be"],["/aboutMe/static/media/whitney-mediumitalic.0b707628.woff","0b707628808f964b494f622bf635cb8a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var f=new URL(e);return c&&f.pathname.match(c)||(f.search+=(f.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),f.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),f=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),f]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var f="/aboutMe/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(f,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});