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
    "revision": "86c21ba368a6d4b68fe7efec334dc182"
  },
  {
    "url": "assets/css/0.styles.8ec9f3ed.css",
    "revision": "658060e5bc7e036efc5de99f84b88d49"
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
    "url": "assets/js/11.a0a71c05.js",
    "revision": "abbd7bb5bceaf79ff8dcb8fb520cf662"
  },
  {
    "url": "assets/js/12.25835084.js",
    "revision": "4f0260a4e773735a35fc38d1b69e848c"
  },
  {
    "url": "assets/js/13.0f436771.js",
    "revision": "4b7345c79048a92f7d8f01b1c19d5e68"
  },
  {
    "url": "assets/js/14.025ebaf1.js",
    "revision": "f39fada4512fde6a8801dcd246ea78e8"
  },
  {
    "url": "assets/js/15.b9d03525.js",
    "revision": "65eb528c16b211f6740a96258271924f"
  },
  {
    "url": "assets/js/16.93a12f97.js",
    "revision": "201f95cdf873c4080747056f05538481"
  },
  {
    "url": "assets/js/17.87ff2a76.js",
    "revision": "5d3f30c39b93bcd5c63b46cb31c4a867"
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
    "url": "assets/js/4.15abfba3.js",
    "revision": "51055d857759e95d28d040fc3659c7f4"
  },
  {
    "url": "assets/js/5.81c25606.js",
    "revision": "f8f691caad4bd61f0b03245e282f5d0e"
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
    "url": "assets/js/app.d1e9869b.js",
    "revision": "177c6ff6b0864854a42a4ddb7ff9159e"
  },
  {
    "url": "baodian/high.html",
    "revision": "f2047883eb38d3cbf0334652257a9c0d"
  },
  {
    "url": "baodian/index.html",
    "revision": "c21833e3c96acfc60e8f610f2f548d79"
  },
  {
    "url": "baodian/zero.html",
    "revision": "844a927a55f1112f4c97529bda585b8a"
  },
  {
    "url": "css/style.css",
    "revision": "00546627fd27f5964ec36b3d33d21bcc"
  },
  {
    "url": "guide/back.html",
    "revision": "8038054adb0c4046c6754b5084555838"
  },
  {
    "url": "guide/end.html",
    "revision": "91709d35e386a68072651a2adc0853a6"
  },
  {
    "url": "guide/index.html",
    "revision": "fd616a77959c55c1378428dd26ca9b89"
  },
  {
    "url": "img/logo.png",
    "revision": "fd621623e7fc3d9272bcf2d77f494d19"
  },
  {
    "url": "index.html",
    "revision": "11a6ef3b30a2cb587361228871a711c5"
  },
  {
    "url": "js/style.js",
    "revision": "ae27a2dd2f846e28619493117aea60d5"
  },
  {
    "url": "tool/homework.html",
    "revision": "581a79f4b6151683dd95029390fcb0f3"
  },
  {
    "url": "tool/index.html",
    "revision": "34bf3188a3216614ffe0f4405a45c884"
  },
  {
    "url": "tool/software.html",
    "revision": "c42248b606c105fb71ea42c75fcc00cb"
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
