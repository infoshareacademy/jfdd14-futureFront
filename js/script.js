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


calculatorPrice.innerHTML = `${slider.value}$` 


function testing() {
  calculatorPrice.innerHTML = `${slider.value}$`;

}

const discount1 = document.querySelector('#disc1');
/* discount1.addEventListener('change',e => {
  if(e.target.checked) {
    calculatorPrice.innerHTML = 5;
  }
}); */
const discount2 = document.querySelector('#disc2');
discount2.addEventListener('change',e => {
  if(e.target.checked) {
    calculatorPrice.innerHTML = 6;
  }
});
const discount3 = document.querySelector('#disc3');
discount3.addEventListener('change',e => {
  if(e.target.checked) {
    calculatorPrice.innerHTML = 7;
  }
});

function discount() {
  discount1.addEventListener('change',e => {
    if(e.target.checked) {
      calculatorPrice.innerHTML = 5;
      console.log(e.target.checked)
    }
    if(e.target.checked == false) {
      calculatorPrice.innerHTML = `${slider.value}$`;
    }

  });
}