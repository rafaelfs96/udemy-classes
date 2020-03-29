let deferredPrompt

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js' /*, {scope: '/help/'}*/).then(function() {
		console.log('sw.js registered')
	})
}

window.addEventListener('beforeinstallprompt', function(event) {
	console.log('beforeinstallprompt fired')
	event.preventDefault()
	deferredPrompt = event
	return false
})