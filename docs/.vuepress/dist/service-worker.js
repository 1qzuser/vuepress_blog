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
    "revision": "be0b884cc053e2dbd693869adf96d20a"
  },
  {
    "url": "assets/css/0.styles.8a85c355.css",
    "revision": "4a8ebaf9e78f132f89d94b757f8e2bc1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3d28151.js",
    "revision": "c342e49898a6cb30dd082f316b3faffc"
  },
  {
    "url": "assets/js/11.69cea2d2.js",
    "revision": "e4d220c2fca48ac70e0eccda4d8ba106"
  },
  {
    "url": "assets/js/12.02822ca1.js",
    "revision": "7203c8c7c20f5a51e13830c7170d7345"
  },
  {
    "url": "assets/js/13.1f70c413.js",
    "revision": "c9a27a8e295f764f951fd050444ba493"
  },
  {
    "url": "assets/js/14.dcd7fa89.js",
    "revision": "88016252f41380d5aad6a35a3b349915"
  },
  {
    "url": "assets/js/15.20056b47.js",
    "revision": "04fc7932aa6d560328193d750f173abe"
  },
  {
    "url": "assets/js/16.8caa63ea.js",
    "revision": "e339cec88e74dafe2ca63d527e82560d"
  },
  {
    "url": "assets/js/2.0d7de6f4.js",
    "revision": "071827f66975512b098269bf4d63c81c"
  },
  {
    "url": "assets/js/3.6a7f72af.js",
    "revision": "f39d299fb9a21b7a074bd5f3ee412a48"
  },
  {
    "url": "assets/js/4.cd949e83.js",
    "revision": "7f453fb069e5207c60a83622cdbdac48"
  },
  {
    "url": "assets/js/5.ef8a9f6f.js",
    "revision": "11138a692ae720331010695d69589055"
  },
  {
    "url": "assets/js/6.b58a28fa.js",
    "revision": "ae288b9a924a249e77dc159a6e055a82"
  },
  {
    "url": "assets/js/7.615a948e.js",
    "revision": "89faf9fbb386d5a66a7600112e5453aa"
  },
  {
    "url": "assets/js/8.de8115b2.js",
    "revision": "9e198b2886edbb2299b82b4f01829b67"
  },
  {
    "url": "assets/js/9.e53a751b.js",
    "revision": "3c37d103c35dc85f55833bdc353955e7"
  },
  {
    "url": "assets/js/app.3ff49f26.js",
    "revision": "2abfa2560593d861c912fcbdb6abf69e"
  },
  {
    "url": "baodian/high.html",
    "revision": "7c3b7975ab6d3db6126956d974b5a1bc"
  },
  {
    "url": "baodian/index.html",
    "revision": "a653921c3eac46069918b9844146b3b0"
  },
  {
    "url": "baodian/zero.html",
    "revision": "9ca984a651bf805d021343eaddda3963"
  },
  {
    "url": "css/style.css",
    "revision": "87541cc1b68cdab48770b5764a369773"
  },
  {
    "url": "guide/index.html",
    "revision": "2cee952655ed08740947d4852cddecab"
  },
  {
    "url": "img/logo.png",
    "revision": "fd621623e7fc3d9272bcf2d77f494d19"
  },
  {
    "url": "index.html",
    "revision": "77428fa37e6a6fe2bff8fa33b07969e2"
  },
  {
    "url": "js/style.js",
    "revision": "ae27a2dd2f846e28619493117aea60d5"
  },
  {
    "url": "tool/homework.html",
    "revision": "91bd01797b9886c641ab4fe8e639d1cf"
  },
  {
    "url": "tool/index.html",
    "revision": "c9121a6cac517c80c10ed9672433edec"
  },
  {
    "url": "tool/software.html",
    "revision": "4c44a2fddff97d06c7faeefc1ffe6bdb"
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
