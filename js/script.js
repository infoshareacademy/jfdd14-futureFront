$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
  // $('.navbar').addClass("transparent");
  $(".navbar").toggleClass("white");
});

$("body").on("click", function() {
  let navbarQuery = document.querySelector(".navbar-collapse");

  $(".navbar-collapse").collapse("hide");

  if (navbarQuery.className == "navbar-collapse collapsing") {
    $(".navbar").removeClass("white");
  }
});

$(".navbar-toggler").on("click", function() {
  $(".navbar").toggleClass("white");
});


//price calculator
var slider = document.querySelector('#myRange');
var calculatorPrice = document.querySelector('.calculatorPrice');


calculatorPrice.innerHTML = `${slider.value}$;` 


function testing() {
  calculatorPrice.innerHTML = `${slider.value}$`;

}





