var next = document.getElementById("next")
var pre = document.getElementById("pre")
var cards = document.querySelectorAll(".cards")

next.addEventListener("click",function(){
    cards.forEach(function (card) {
        card.style.transform = "translateX(-130%)";
    })
    
})
pre.addEventListener("click",function(){
    cards.forEach(function (card) {
        card.style.transform = "translateX(0)";
    })
    
})



