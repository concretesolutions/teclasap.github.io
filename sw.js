if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,t)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=t(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1wJ8bY0Mtj5wFtSr7wV5c/_buildManifest.js",revision:"76afbdc6493bf7f8e7d9e80f56a23551"},{url:"/_next/static/1wJ8bY0Mtj5wFtSr7wV5c/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/234a0c7befce6cd42d1e2cbc781c0b4248d0398a.28539b112f514cc8de20.js",revision:"390e79d02ae6c6ddcedba8d08f93ac14"},{url:"/_next/static/chunks/b2e8804c9d5f6502350ae06d0bc31abe13b59614.8c91a3985fc984314159.js",revision:"39f7912bed48ba0d319a76c5db775fe8"},{url:"/_next/static/chunks/commons.9528123feb626448eb3f.js",revision:"8e41ebc5b1631ebcb2dee900308c4bcd"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"4438ad9ce98b74a68995705631ec1479"},{url:"/_next/static/chunks/main-b2a70fe4eb08822b58c2.js",revision:"2c0dcbc3fe1aae307291486d80f6a064"},{url:"/_next/static/chunks/pages/_app-08850c6da13810a5d754.js",revision:"4d80320aaa54e8fba6ec076e2c88a856"},{url:"/_next/static/chunks/pages/_error-b27b0bebfa66d37ab470.js",revision:"951bebc07c4d4a3aa121df26a3426e57"},{url:"/_next/static/chunks/pages/index-027db5d9fb4b518ca9ce.js",revision:"ceef249970290d668a74aecf29060779"},{url:"/_next/static/chunks/pages/posts/17-dicas-otimizacao-javascript-86b8037b2d1c7f51594a.js",revision:"1973d7dce8a55a90f5a3bc6f04ec29ad"},{url:"/_next/static/chunks/pages/posts/lazy-loading-nativo-de-imagens-sem-javascript-5879dbcf914a67d8701c.js",revision:"40066eced5dc4db34cb2409d1cf72c48"},{url:"/_next/static/chunks/polyfills-81bd132d8cf44e5a14d7.js",revision:"1ed7e39a21fc69e23998baa40fc21db6"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/3dc6b466b6c8ad5e6656.css",revision:"5591bbe97e6aa2ae484bd152390f3715"},{url:"/_next/static/css/adfdbe743760f9d59860.css",revision:"c51bb741b4ed5d752a61eeaf14e84edd"},{url:"/_next/static/css/e7d59fb9281a950cfb2e.css",revision:"0da72095f5766d5ff0aac39a37908c78"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/logo_high.png",revision:"3d2d294a66e8e16d950588c45cb6721e"},{url:"/logo_low.png",revision:"aec05256aa1d03e07243a0e8d75e8a13"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
