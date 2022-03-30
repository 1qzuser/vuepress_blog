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
    "revision": "e4e2985307a0de67e725457f22409c3c"
  },
  {
    "url": "assets/css/0.styles.c07ceffb.css",
    "revision": "d683336eb4d0cd33c6054a66dc16da2f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f2dc3f2.js",
    "revision": "0b2782bfe102f7af763e68f7f2aa7201"
  },
  {
    "url": "assets/js/11.597980a3.js",
    "revision": "7e9a179cf6cf4cf8ca39a22d325ce566"
  },
  {
    "url": "assets/js/12.25835084.js",
    "revision": "4f0260a4e773735a35fc38d1b69e848c"
  },
  {
    "url": "assets/js/13.bbc4f99b.js",
    "revision": "558e54806557443b40c4a35129933687"
  },
  {
    "url": "assets/js/14.b48c9b9d.js",
    "revision": "304e78b29782963806a444ce8d5f8bc6"
  },
  {
    "url": "assets/js/15.b9d03525.js",
    "revision": "65eb528c16b211f6740a96258271924f"
  },
  {
    "url": "assets/js/16.ae637dfb.js",
    "revision": "f8a52f8bafce7501e3badedcf5fb7273"
  },
  {
    "url": "assets/js/17.5c9c240e.js",
    "revision": "cb42332d4e5a5d86c1e5fe5cc1c8d982"
  },
  {
    "url": "assets/js/18.6e3ae2e6.js",
    "revision": "d0cb1bafa5c04729835edc27c7dd9e37"
  },
  {
    "url": "assets/js/2.95bea993.js",
    "revision": "56b82a114238122f868ec10286ec2326"
  },
  {
    "url": "assets/js/3.2e70e5ab.js",
    "revision": "c9ee619d49eff9bfd3e9528d00fdf2fc"
  },
  {
    "url": "assets/js/4.b0d758b0.js",
    "revision": "e4ce545d0124ffb3bf21554f3cd2ea72"
  },
  {
    "url": "assets/js/5.6801c71d.js",
    "revision": "f73cae7c0e79714f4b27722a69d0ca35"
  },
  {
    "url": "assets/js/6.31e50a51.js",
    "revision": "a284115d9e6b2e2185f67d0ddfb7c95c"
  },
  {
    "url": "assets/js/7.9d151818.js",
    "revision": "e2cb3f2cfadfad444e0bd58350dd6f44"
  },
  {
    "url": "assets/js/8.d0b342ff.js",
    "revision": "c7db780407187a53e65c95aa2fcf1a45"
  },
  {
    "url": "assets/js/9.beba1416.js",
    "revision": "fd5d414d52e0a6638495a6141cbd6ab0"
  },
  {
    "url": "assets/js/app.545367d6.js",
    "revision": "ce44fa69b11aa589160a95765e686f62"
  },
  {
    "url": "baodian/high.html",
    "revision": "d1c3e87846e9706583f357b859759418"
  },
  {
    "url": "baodian/index.html",
    "revision": "0943fa4afc18bbd967766ba55ffd70f4"
  },
  {
    "url": "baodian/zero.html",
    "revision": "125944432f1214be1a2c22a711976c24"
  },
  {
    "url": "css/style.css",
    "revision": "00546627fd27f5964ec36b3d33d21bcc"
  },
  {
    "url": "guide/back.html",
    "revision": "0f11244f5c40c36ce375807cf3f7e10b"
  },
  {
    "url": "guide/end.html",
    "revision": "4581cdd708e941a1d229fcd84aaf77e3"
  },
  {
    "url": "guide/index.html",
    "revision": "e8b6b2aafc43e43eba031dbd64d8c224"
  },
  {
    "url": "img/logo.png",
    "revision": "fd621623e7fc3d9272bcf2d77f494d19"
  },
  {
    "url": "index.html",
    "revision": "244192179f570e890905f24a1b671119"
  },
  {
    "url": "js/style.js",
    "revision": "ae27a2dd2f846e28619493117aea60d5"
  },
  {
    "url": "tool/homework.html",
    "revision": "417ee68b354d9ce3fe7106129dffc108"
  },
  {
    "url": "tool/index.html",
    "revision": "e487ea8d6c890c9c56fb81381dc3dd47"
  },
  {
    "url": "tool/software.html",
    "revision": "69b9a1d31c505867cb0095c5b81b35ca"
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
