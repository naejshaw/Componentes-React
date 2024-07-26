// Nome da cache
const cacheName = 'meu-pwa-app-v1';

// Arquivos a serem armazenados em cache
const arquivosEmCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  '/offline.html',
  '/css/main.css',
  '/js/app.js',
  '/images/logo.png',
  'https://api.exemplo.com/dados.json' // Adicione URLs de APIs aqui
];

// Evento de instalação do Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        console.log('Cache aberto:', cacheName);
        return cache.addAll(arquivosEmCache);
      })
  );
});

// Evento de busca (fetch)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log('Retornando do cache:', event.request.url);
          return response;
        }
        return fetch(event.request)
          .then(function(response) {
            if (!response || !response.ok) {
              return response;
            }

            caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, response);
              });

            console.log('Adicionando ao cache:', event.request.url);
            return response;
          });
      })
  );
});

// Sincronização de cache entre diferentes service workers
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName !== cacheName) {
              console.log('Removendo cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});