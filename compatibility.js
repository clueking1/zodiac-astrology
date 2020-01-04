var userId = '';
var apiKey = '';
var data = 'JSON Request Data';
var request = $.ajax({
    url: "https://json.astrologyapi.com/v1/" + apiKey,
    method: "POST",
    dataType: 'json',
    headers: {
        "authorization": "Basic " + btoa(userId + ":" + apiKey),
        "Content-Type": 'application/json'
    },
    data: JSON.stringify(data)
}).then( res => console.log(res))