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
    "revision": "4c6148264c268162db7bee6b3e306faf"
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
    "url": "assets/js/10.7b8ea083.js",
    "revision": "806c737e673ad8aa84eb4db023ec2d76"
  },
  {
    "url": "assets/js/11.5a7a9c95.js",
    "revision": "e73f10e5df0a124ce2a38dc28abe0cc3"
  },
  {
    "url": "assets/js/12.0527f988.js",
    "revision": "d89164b745677323ccfb33bdfce8f1aa"
  },
  {
    "url": "assets/js/13.cbe86be2.js",
    "revision": "a7e7ebe9f8e7e70566eb9349ca492b3d"
  },
  {
    "url": "assets/js/14.42eee1a9.js",
    "revision": "07c0e79780c6e1c3fc007b574395f171"
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
    "url": "assets/js/app.c1f523d6.js",
    "revision": "736f09c16f7fb1eecb235381f4615121"
  },
  {
    "url": "baodian/high.html",
    "revision": "39870eaaa9b32ddf8446375f65857d6b"
  },
  {
    "url": "baodian/index.html",
    "revision": "dc022fbf77f0a660918657a55e6bbd9f"
  },
  {
    "url": "baodian/zero.html",
    "revision": "5c1e8185d45822a7c839d548cd5a376a"
  },
  {
    "url": "guide/index.html",
    "revision": "74fcc7f9cedfafb993f6cdf6b8de3bc1"
  },
  {
    "url": "index.html",
    "revision": "6be6892546bfca04c331cc0204e20733"
  },
  {
    "url": "logo.png",
    "revision": "fd621623e7fc3d9272bcf2d77f494d19"
  },
  {
    "url": "tool/homework.html",
    "revision": "43d0a84dc2d98b63a0ddd2a18e80b248"
  },
  {
    "url": "tool/index.html",
    "revision": "c3b51da65acb61ffdf7f547f936a45cc"
  },
  {
    "url": "tool/software.html",
    "revision": "214b1b90c0a777b26a81d3b795d9d8e3"
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
