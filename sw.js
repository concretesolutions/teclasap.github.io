if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/XcMZU4lqav6f5kGEvF4I2/_buildManifest.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/XcMZU4lqav6f5kGEvF4I2/_ssgManifest.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/234a0c7befce6cd42d1e2cbc781c0b4248d0398a.73911cd0e91d1cfcc34e.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/b2e8804c9d5f6502350ae06d0bc31abe13b59614.8c91a3985fc984314159.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/commons.f4926135e9b0ceeb7419.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/main-f33ee848384c36c9a4aa.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/pages/_app-34df0d9d90ce2064959e.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/pages/_error-81cfa623b52ab6ac1c6d.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/pages/index-027db5d9fb4b518ca9ce.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/pages/posts/17-dicas-otimizacao-javascript-d04cea309219f9a558ee.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/pages/posts/lazy-loading-nativo-de-imagens-sem-javascript-caf362d974ea0846dc02.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/polyfills-81bd132d8cf44e5a14d7.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/css/3dc6b466b6c8ad5e6656.css",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/css/40b8ad549e1fe4906645.css",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/_next/static/css/e7d59fb9281a950cfb2e.css",revision:"XcMZU4lqav6f5kGEvF4I2"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/logo_high.png",revision:"3d2d294a66e8e16d950588c45cb6721e"},{url:"/logo_low.png",revision:"aec05256aa1d03e07243a0e8d75e8a13"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
