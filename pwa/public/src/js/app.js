let deferredPrompt

if(!window.Promise) window.Promise = Promise

if('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js' /*, {scope: '/help/'}*/)
		.then(function() {
			console.log('sw.js registered')
		})
		.catch(function(err) {
			console.log(err)
		})
}

window.addEventListener('beforeinstallprompt', function(event) {
	console.log('beforeinstallprompt fired')
	event.preventDefault()
	deferredPrompt = event
	return false
})