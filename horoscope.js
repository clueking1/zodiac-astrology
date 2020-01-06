

let hi = document.querySelectorAll(".sign")

hi.forEach(function(e){
    e.addEventListener("click", function (e) {
        e.preventDefault
        let pp = this.id
 
    
    $.ajax({
        type:'POST',
        url:'https://aztro.sameerkumar.website?sign=' + pp + '&day=today',
        success:function(data){
            
            $(".horoP").text(data.description);
        }
    })});
})




