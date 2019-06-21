// eslint-disable-next-line no-unused-vars
function hvision () {
	var images = document.querySelectorAll('img')

	images.forEach(function (element) {
		if (!element.hasAttribute('alt')) {
			hProcessImage(element)
		} else {
			var caption = element.getAttribute('alt').trim()
			if (!caption) {
				hProcessImage(element)
			}
		}
	})
}

function hProcessImage (img) {
	// TODO: src pode ou não contem o caminho completo do site
	var sourceImageUrl = img.getAttribute('src')

	// TODO: subscriptionKey no Init do projeto + ocultar a da demo
	var subscriptionKey = '94e8fd9a573d4027bdf4e525be6b1a28'

	// Free trial subscription keys are generated in the "westus" region.
	// If you use a free trial subscription key, you shouldn't need to change
	// this region.
	var uriBase = 'https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze'
	var data = '{"url": ' + '"' + sourceImageUrl + '"}'
	var headers = new Headers()

	headers.append('Content-Type', 'application/json')
	headers.append('Ocp-Apim-Subscription-Key', subscriptionKey)

	fetch(uriBase + '?visualFeatures=Description&details=&language=en', {
		method: 'POST',
		headers: headers,
		body: data
	}).then(function (response) {
		if (!response.ok) {
			throw Error(response.statusText)
		}
		img.setAttribute('alt', response.description.captions[0].text)
		console.log(JSON.stringify(response, null, 2))
	}).catch(function (error) {
		// TODO: get the error code from the response
		console.log('There was an error with your request. Check if you are not using a local image. Error: ' + error)
	})
}
