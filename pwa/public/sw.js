self.addEventListener('install', function(event) {
	console.log('[sw] installing sw...', event)
	event.waitUntil(
		caches.open('static')
			.then(function(cache) {
				console.log('[Service Worker] Precaching App Shell')
				cache.add('/src/js/app.js')
			})
	)
})

self.addEventListener('activate', function(event) {
	console.log('[sw] activating sw...', event)
	return self.clients.claim()
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				if(response) return response
				else return fetch(event.request)
			})
	)
})