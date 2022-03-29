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
    "revision": "a70f3f03e71b6ba958d267377da57460"
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
    "url": "assets/js/10.39abef18.js",
    "revision": "f67513ffbfb94ded1cd010e05e64930d"
  },
  {
    "url": "assets/js/11.5a7a9c95.js",
    "revision": "e73f10e5df0a124ce2a38dc28abe0cc3"
  },
  {
    "url": "assets/js/12.ad9866c4.js",
    "revision": "f506663b7ae255159bf42e51e25eed3c"
  },
  {
    "url": "assets/js/13.7e451562.js",
    "revision": "34a3b34dcc95cb252fbd71d95c382a36"
  },
  {
    "url": "assets/js/14.543e855c.js",
    "revision": "82968a49702452ebe2edb2d0f64c10c1"
  },
  {
    "url": "assets/js/15.a8b21aa2.js",
    "revision": "bcec36e3341bbe54c949df161245db02"
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
    "url": "assets/js/app.aac16d31.js",
    "revision": "f16191ee65a8473eefb8b027417f1282"
  },
  {
    "url": "baodian/high.html",
    "revision": "352f628ea2b8821ace27d77350230ab6"
  },
  {
    "url": "baodian/index.html",
    "revision": "c154562b48d57a7781f1a9ab0cfd6c12"
  },
  {
    "url": "baodian/zero.html",
    "revision": "9a682d641f41e2d342ec27eeb76e70df"
  },
  {
    "url": "guide/index.html",
    "revision": "4d1bce407fcbcfe4a3eaed319b18cbc9"
  },
  {
    "url": "index.html",
    "revision": "83a6f5a23ff6a88dba7bfb1a11751df8"
  },
  {
    "url": "logo.png",
    "revision": "fd621623e7fc3d9272bcf2d77f494d19"
  },
  {
    "url": "tool/homework.html",
    "revision": "0d541dc995c933ee460c8ecf6964154a"
  },
  {
    "url": "tool/index.html",
    "revision": "cc43b0a563ecec35e5262ae0dd8e8b7e"
  },
  {
    "url": "tool/software.html",
    "revision": "7cd8c2b76763920f1a4a413a89f4e05f"
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
