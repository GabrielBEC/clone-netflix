//Gerando itens do carrosel
for (let i = 1; i <= 10; i++) {
    document.getElementById("carrosel").innerHTML += `
    <div class="item">
        <img class="box-filme" src="img/min${i}.jpg" alt="">
    </div>
    `
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})