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
    "revision": "9ba42fad3f4e4471300a720b415f87e7"
  },
  {
    "url": "assets/css/0.styles.3034bf4a.css",
    "revision": "b56ee9c28671503f72cdb11126662a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b29143fa.js",
    "revision": "e9c67d989c61ffe9b94fed60b2ff08e4"
  },
  {
    "url": "assets/js/11.fe7e1854.js",
    "revision": "17d4affe3b9a7722ac626d5b994a4000"
  },
  {
    "url": "assets/js/12.c462ff2d.js",
    "revision": "3aaded204291c0802e2c4b955c4a5c6d"
  },
  {
    "url": "assets/js/13.0738a0dc.js",
    "revision": "3cdfc616a73acee60c235971796e59f0"
  },
  {
    "url": "assets/js/14.edc5eb1b.js",
    "revision": "5cbd28d72f543ba91c5ce882ace2aba6"
  },
  {
    "url": "assets/js/15.9a2dcf42.js",
    "revision": "9eb68a78dd2a7303a3919070eef06372"
  },
  {
    "url": "assets/js/16.a6729725.js",
    "revision": "e3a80820c6bcf3a1ee65cf7cee821c44"
  },
  {
    "url": "assets/js/2.08d24df0.js",
    "revision": "7beded00404e0e97d0b9d797713c1528"
  },
  {
    "url": "assets/js/3.eadc0b2c.js",
    "revision": "376530443e96236be87fa291897a75e2"
  },
  {
    "url": "assets/js/4.8c90be81.js",
    "revision": "8dcd3a3152bbe00a597eb585cff1be5f"
  },
  {
    "url": "assets/js/5.ca4c3fe1.js",
    "revision": "e0719ad3ccdb9b5e71383c6da078bb42"
  },
  {
    "url": "assets/js/6.c388e65c.js",
    "revision": "dafd14be1c0249938df855decb2b3d9b"
  },
  {
    "url": "assets/js/7.43897a48.js",
    "revision": "84e49554280eca17b3fb5ebfaba1a26d"
  },
  {
    "url": "assets/js/8.83f4ac57.js",
    "revision": "c24da7642f1245d09e17e0dbf50a84ab"
  },
  {
    "url": "assets/js/9.d4f9f30c.js",
    "revision": "c0b893eba760804be8194749775a3c93"
  },
  {
    "url": "assets/js/app.089da26f.js",
    "revision": "584706a6c1f39b246f31e163ea87c9fe"
  },
  {
    "url": "baodian/high.html",
    "revision": "c86bad1e4fd7db835618f2e755549188"
  },
  {
    "url": "baodian/index.html",
    "revision": "17b80b60a032bfa7b462387a566a5131"
  },
  {
    "url": "baodian/zero.html",
    "revision": "c9954d66f3ce79fe6b5216fafa4fa482"
  },
  {
    "url": "guide/index.html",
    "revision": "3353e5595bf85274cbe805b661b97315"
  },
  {
    "url": "img/logo.png",
    "revision": "fd621623e7fc3d9272bcf2d77f494d19"
  },
  {
    "url": "index.html",
    "revision": "a5af86c6ebe26d9a1707d4071bcecdaa"
  },
  {
    "url": "tool/homework.html",
    "revision": "f10a499d7d461c5bd4f58386ff1ab700"
  },
  {
    "url": "tool/index.html",
    "revision": "c79b6913fa14fcd0e12d9bc7aa371d6d"
  },
  {
    "url": "tool/software.html",
    "revision": "3cd7a79f7f14347dd8f28a83fa65d69b"
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
