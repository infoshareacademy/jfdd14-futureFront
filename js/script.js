const navbar = document.querySelector('.navbar');
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('#btnToggler');
const body = document.querySelector('body');
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});
  //$('.navbar').addClass("transparent");
  /* $(".navbar").toggleClass("white"); 
});
/* 
$("body").on("click", function() {
  let navbarQuery = document.querySelector(".navbar-collapse");

  $(".navbar-collapse").collapse("hide");

  if (navbarQuery.className == "navbar-collapse collapsing") {
    navbar.classList.remove("white");
  }
}); */
body.addEventListener('click', function() {
  navbarCollapse.collapse("hide");
  if (navbarCollapse.className == "navbar-collapse collapsing") {
    navbar.classList.remove("white");
  }
})

/* $(".navbar-toggler").on("click", function() {
  $(".navbar").toggleClass("white");
}); */

navbarToggler.addEventListener('click',function(){
  console.log('bbb');
  navbar.classList.add('white');
})


//price calculator
var slider = document.querySelector('#myRange');
var calculatorPrice = document.querySelector('.calculatorPrice');
let finalPrice = slider.value;
const firstDiscountValue = 0.1;
const secondDiscountValue = 0.2;
const thirdDiscountValue = 0.3;

calculatorPrice.innerHTML = `${finalPrice}$`; 



function testing(disc = 0) {
  console.log(slider.value)
  console.log(Number(slider.value))
  let finalPrice = Number(slider.value) - (Number(slider.value) * disc);
  console.log(disc)
  calculatorPrice.innerHTML = `${finalPrice}$`;

}

const discount1 = document.querySelector('#disc1');
/* discount1.addEventListener('change',e => {
  if(e.target.checked) {
    testing(firstDiscountValue);
  }
}); */
const discount2 = document.querySelector('#disc2');
/* discount2.addEventListener('change',e => {
  if(e.target.checked) {
    

  }
}); */
const discount3 = document.querySelector('#disc3');
/* discount3.addEventListener('change',e => {
  if(e.target.checked) {
    calculatorPrice.innerHTML = 7;
  }
}); */

const discountArray = [discount1,discount2,discount3];
const discountValuesArray = [firstDiscountValue,secondDiscountValue,thirdDiscountValue]
//not used now
const discountObj = [{discount1: firstDiscountValue}, {discount2: secondDiscountValue}, {discount3:thirdDiscountValue}];
// 3 discount functions for each checkbox, to be changed to one function using discountobj
function discount1f(disc) {
  disc.addEventListener('change',e => {
    if(e.target.checked) {
      testing(firstDiscountValue)
      
    }
    if(e.target.checked == false) {
      calculatorPrice.innerHTML = `${slider.value}$`;
    }

  });
}
function discount2f(disc) {
  disc.addEventListener('change',e => {
    if(e.target.checked) {
      testing(secondDiscountValue)
      
    }
    if(e.target.checked == false) {
      calculatorPrice.innerHTML = `${slider.value}$`;
    }

  });
}
function discount3f(disc) {
  disc.addEventListener('change',e => {
    if(e.target.checked) {
      testing(thirdDiscountValue)
      
    }
    if(e.target.checked == false) {
      calculatorPrice.innerHTML = `${slider.value}$`;
    }

  });
}
discount1f(discount1)
discount2f(discount2)
discount3f(discount3)
