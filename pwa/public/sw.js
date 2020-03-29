self.addEventListener('install', function(event) {
	console.log('[sw] installing sw...', event)
})

self.addEventListener('activate', function(event) {
	console.log('[sw] activating sw...', event)
	return self.clients.claim()
})

self.addEventListener('fetch', function(event) {
	console.log('[sw] fetching something...', event)
	event.respondWith(fetch(event.request))
})