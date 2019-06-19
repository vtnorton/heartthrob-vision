/* eslint-disable no-undef */
$(document).ready(function () {
  $.each($('img'), function () {
    if (!$(this).attr('alt').trim()) {
      processImage(this)
    }
  })
})

function processImage (img) {
  // TODO: src pode ou não contem o caminho completo do site
  var sourceImageUrl = $(img).attr("src")
  
  var subscriptionKey = '94e8fd9a573d4027bdf4e525be6b1a28'
  
  // Free trial subscription keys are generated in the "westus" region.
  // If you use a free trial subscription key, you shouldn't need to change
  // this region.
  var uriBase = 'https://eastus.api.cognitive.microsoft.com/vision/v2.0/analyze'
  var params = {
    'visualFeatures': 'Description',
    'details': '',
    'language': 'en'
  }
  
  $.ajax({
    url: uriBase + '?' + $.param(params),
    beforeSend: function (xhrObj) {
      xhrObj.setRequestHeader('Content-Type', 'application/json')
      xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey)
    },
    type: 'POST',
    data: '{"url": ' + '"' + sourceImageUrl + '"}'
  })
  
  .done(function (data) {
    $(img).attr('alt', data.description.captions[0].text)
    console.log(JSON.stringify(data, null, 2))
  })
  
  .fail(function (jqXHR, textStatus, errorThrown) {
    // Display error message.
    var errorString = (errorThrown === '') ? 'Error. '
    : errorThrown + ' (' + jqXHR.status + '): '
    errorString += (jqXHR.responseText === '') ? ''
    : jQuery.parseJSON(jqXHR.responseText).message
    alert(errorString)
  })
};
