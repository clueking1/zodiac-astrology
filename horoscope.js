const astroDict = {
    'Aries': {},
    'Taurus':{},
    'Gemini':{},
    'Cancer':{},
    'virgo':{},
    'Aquarius':{},
    'Pisces':{},
    'Leo':{},
    'Libra':{},
    'Scorpio':{},
    'sagittarius':{},
    'capricorn':{},
}

$("button").on("click", function () {
$.ajax({
    type: 'POST',
    url: `https://aztro.sameerkumar.website/?sign=data&day=today`,
    data: {
        param0: $('button').val()
    },
    success: function (data) {
        console.log(data);
    }
})});

$("button").on("click", function (){
    $.ajax({
        method: 'GET',
        url: 'https://zodiacal.herokuapp.com/cardinalities',
        success: function (data) {
            console.log(data);
        }
    })});