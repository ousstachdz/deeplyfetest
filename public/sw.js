const urlsToCache = [
  'http://subdomain.localhost.localhost/',
  'https://randomuser.me/api/?results=50',
  'http://subdomain.localhost.localhost/@react-refresh',
  'http://subdomain.localhost.localhost/src/App.jsx',
  'http://subdomain.localhost.localhost/node_modules/.vite/deps/axios.js?v=0acd1260',
  'http://subdomain.localhost.localhost/node_modules/.vite/deps/chunk-FOVBMOLE.js?v=0acd1260',
  'http://subdomain.localhost.localhost/node_modules/.vite/deps/chunk-RSJERJUL.js?v=0acd1260',
  'http://subdomain.localhost.localhost/@vite/client',
  'http://subdomain.localhost.localhost/node_modules/vite/dist/client/env.mjs',
  'http://subdomain.localhost.localhost/@id/__x00__react/jsx-dev-runtime',
  'http://subdomain.localhost.localhost/src/main.jsx',
  'http://subdomain.localhost.localhost/node_modules/.vite/deps/react-dom_client.js?v=0acd1260',
  'http://subdomain.localhost.localhost/node_modules/.vite/deps/react.js?v=0acd1260',
  'http://subdomain.localhost.localhost/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=0acd1260',
  'http://subdomain.localhost.localhost/src/swDev.js',
  'http://subdomain.localhost.localhost/src/componsents/UserCard.jsx',
  'https://cdn.jsdelivr.net/npm/daisyui@2.51.5/dist/full.css',
]
// 'https://cdn.tailwindcss.com/',
// 'https://cdn.jsdelivr.net/npm/daisyui@2.51.5/dist/full.css',
const cacheData = 'v1'

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(cacheData)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
      .catch((e) => {
        console.log(e)
      })
  )
})
this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    if (
      event.request.url === 'http://subdomain.localhost.localhost/src/main.jsx'
    ) {
      event.waitUntil(
        this.registration.showNotification('Internet', {
          body: 'internet not working',
        })
      )
    }
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
        let requestUrl = event.request.clone()
        fetch(requestUrl)
      })
    )
  }
})
