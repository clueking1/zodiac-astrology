let bye= document.querySelectorAll(".sign")

bye.forEach(function(e){
        e.addEventListener("click", function (e) {
                        const proxyurl = "https://cors-anywhere.herokuapp.com/"
                        e.preventDefault
                        let pp = this.value
                     
                        $.ajax({
                            method: 'GET',
                            url: proxyurl + 'https://zodiacal.herokuapp.com/cardinalities/' + pp,
                            success: function (data) {
                              
                                $(".compatP").text(data[0].description)
                            }
                        })});
                    
                  
                })
                  