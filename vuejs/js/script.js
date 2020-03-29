new Vue({
	el: "#app",
	data: {
		title: "Hiadsda",
		link: 'https://www.google.com',
		finishedLink: '<a href="https://www.google.com">Google<a>'
	},
	methods: {
		sayHello: function() {
			this.title = 'hello'
			return this.title
		}
	}
})