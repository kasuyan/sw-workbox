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

importScripts("./js/workbox-v3.4.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "./js/workbox-v3.4.1"});

importScripts(
  "./js/precache-manifest.7dd716bb76052ff0c48e6b054ecb9f2d.js"
);

workbox.core.setCacheNameDetails({prefix: "shachiku-chan"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/.\/image\//, workbox.strategies.cacheFirst(), 'GET');
