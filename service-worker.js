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
    "revision": "33c52e03fd7d18e9703a5cbb032f5606"
  },
  {
    "url": "assets/css/0.styles.7caba77b.css",
    "revision": "3e5126f51fe69b863c356d99eed50843"
  },
  {
    "url": "assets/img/aboba.9afd0d8a.png",
    "revision": "9afd0d8a856a1d456ca9093c518f9168"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serverstart.ff4803ea.png",
    "revision": "ff4803eade13c133df6802529031fce3"
  },
  {
    "url": "assets/img/userdelete200.e2fced21.png",
    "revision": "e2fced21680349e0cfb0e2b3300d0acf"
  },
  {
    "url": "assets/img/userget200.7ffcb3f3.png",
    "revision": "7ffcb3f37d62d39ba68f5ae5cd9021c8"
  },
  {
    "url": "assets/img/userget400.8ce4988a.png",
    "revision": "8ce4988a96c25146db8a08d4b74a4f42"
  },
  {
    "url": "assets/img/usergetid200.fcdd6c35.png",
    "revision": "fcdd6c35dc72ab3ccc5157b28821f362"
  },
  {
    "url": "assets/img/usergetid400.0b9e36fc.png",
    "revision": "0b9e36fcde0ff270098c7eb31f2cbc59"
  },
  {
    "url": "assets/img/userpost200.9932e8ef.png",
    "revision": "9932e8ef7d4d7fef333fed397ef69ebe"
  },
  {
    "url": "assets/img/userpost400.d14aaee5.png",
    "revision": "d14aaee5c1bddedb86c651e68dae1c04"
  },
  {
    "url": "assets/img/userput200.78aa08f0.png",
    "revision": "78aa08f0e36bc2986e861f1c4ea76f67"
  },
  {
    "url": "assets/js/10.4f9dcece.js",
    "revision": "044fbbe5fa3629fd1462efc080394c1d"
  },
  {
    "url": "assets/js/11.5b3a880f.js",
    "revision": "2bcb07b11f958b82fdc20cdbf1e38198"
  },
  {
    "url": "assets/js/12.7af6f1fb.js",
    "revision": "0018e9ad2aa782ac88dcbc8d03feb676"
  },
  {
    "url": "assets/js/13.12c7cf1e.js",
    "revision": "5789c8251ca4f141b68d9cad59616371"
  },
  {
    "url": "assets/js/14.1ef9e106.js",
    "revision": "fe29c22c40b86d8b6507c8979ac9e73d"
  },
  {
    "url": "assets/js/15.65813135.js",
    "revision": "e549b130b1db4f16ceedf0f36f0e6467"
  },
  {
    "url": "assets/js/16.f7b85732.js",
    "revision": "0104261ecf4e0f21c092dc1104448532"
  },
  {
    "url": "assets/js/17.20c8f7ce.js",
    "revision": "795da39ed6e599a44f9ecaa1685f1add"
  },
  {
    "url": "assets/js/18.99656196.js",
    "revision": "59101f0b7fd88cbc62fc1ce0c9c12e8c"
  },
  {
    "url": "assets/js/19.855f0a2f.js",
    "revision": "cbe503c29e6ad51785cf422b58e8bc9a"
  },
  {
    "url": "assets/js/2.e7af2488.js",
    "revision": "aa6fe3dcfc573a6474566605081f04be"
  },
  {
    "url": "assets/js/20.30d32d34.js",
    "revision": "a2e259f29292f34796ff35dad619e138"
  },
  {
    "url": "assets/js/21.6ef395e4.js",
    "revision": "98ba60be3befbf4d101d48eb698ade87"
  },
  {
    "url": "assets/js/22.96bb87fc.js",
    "revision": "2d431d784093c2a8208228091445b427"
  },
  {
    "url": "assets/js/23.616ae896.js",
    "revision": "95286c802966c8e82ab43ed06d5833bb"
  },
  {
    "url": "assets/js/24.06538dad.js",
    "revision": "4c92dabd905f644ee328bff4de7cfdd9"
  },
  {
    "url": "assets/js/26.6d52418c.js",
    "revision": "f119f42f31b145fdd016c40aadeab537"
  },
  {
    "url": "assets/js/3.a65f8448.js",
    "revision": "b93c96a946a4155a5696c547868bd1ad"
  },
  {
    "url": "assets/js/4.0fd82d86.js",
    "revision": "4e65f3e8f245c0f90c6ff7c9bd582e16"
  },
  {
    "url": "assets/js/5.0183cd2d.js",
    "revision": "34df083cbd0dc0506df76ace20350c72"
  },
  {
    "url": "assets/js/6.37ffbbe9.js",
    "revision": "30802658554190c6dabbfa86c8251bd7"
  },
  {
    "url": "assets/js/7.1dbca0e9.js",
    "revision": "3d6d0b025515a286dd0513064dca4f30"
  },
  {
    "url": "assets/js/8.1dc9239d.js",
    "revision": "09256e52f33fb70a797f6d299feeb43e"
  },
  {
    "url": "assets/js/9.06a604d1.js",
    "revision": "d440ccdf5d18e2a8bcef51c081450e6d"
  },
  {
    "url": "assets/js/app.bcd6ce7b.js",
    "revision": "cd9298f467ffa5c1d31450ef115fd403"
  },
  {
    "url": "conclusion/index.html",
    "revision": "486c26070c5b1a33820fab8bf9dbaf45"
  },
  {
    "url": "design/index.html",
    "revision": "a0c582d66f12bafd4b97946c660a2921"
  },
  {
    "url": "index.html",
    "revision": "753825abf1920ece1122738ba0390fa0"
  },
  {
    "url": "intro/index.html",
    "revision": "118317ba584a715d651c7f5dbb1f1874"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "49a9364c3406004751f42389b444c32c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "1aab56ac796dee6d64bd67ef8600fd63"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "527d2a042ab77e99da39a54cc548d188"
  },
  {
    "url": "software/index.html",
    "revision": "a792709f878ab653c3702bcb75dd02c8"
  },
  {
    "url": "test/index.html",
    "revision": "fea540769dcfdc9098535a244a9da0a2"
  },
  {
    "url": "use cases/index.html",
    "revision": "3fd0fcdbdfe0e90644b697f20108a7e3"
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
