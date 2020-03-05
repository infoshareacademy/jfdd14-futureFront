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
<<<<<<< HEAD
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
=======
});

//cookies
const cookiesBtn = document.querySelector("#cookiesBtn");

const cookiesSection = document.querySelector("#cookies");

cookiesBtn.addEventListener("click", function() {
  cookiesSection.style.display = "none";
  cookiesToStorage();
});

function cookiesToStorage() {
  localStorage.setItem("cookie", "agreed");
}

function cookiesCheck() {
  if (localStorage.getItem("cookie") == "agreed") {
    cookiesSection.style.display = "none";
  }
}

cookiesCheck();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000);
}

//fipp Team cell onscroll

function scrollRotate() {
  const teamCells = [...document.querySelectorAll(".flipCardInner")];
  teamCells.forEach(element => {
    if (element.getBoundingClientRect().bottom <= window.innerHeight) {
      element.style.transform = "rotateY(180deg)";
    } else {
      element.style.transform = "";
    }
  });
}

window.addEventListener("scroll", function() {
  scrollRotate();
});
//game for mail
const greyBackground = document.querySelector(".greyBackground");
const premiereButton = document.querySelector("#premierButton");
const premiereButtonSmall = document.querySelector("#premierButtonSmall");
const game = document.querySelector(".game");
const gameBoxPlay = document.querySelector("#gameBoxPlay");
const gameBoxClose = document.querySelector("#gameBoxClose");
const emailRegex = /\S+@\S+\.\S+/;

gameBoxPlay.addEventListener("click", function() {
  greyBackground.style.display = "none";
  game.style.display = "none";
});

premiereButton.addEventListener("click", function() {
  console.log("bb");
  let premiereInput = document.querySelector(".premiereEmailInput");
  if (premiereInput.value == "") {
    alert("Pole email nie moze byc puste");
  } else if (!emailRegex.test(premiereInput.value)) {
    alert("Prosze wpisac prawidlowy adres email");
  } else {
    greyBackground.style.display = "block";
    game.style.display = "flex";
  }
});
premiereButtonSmall.addEventListener("click", function() {
  console.log("bb");
  let premiereInput = document.querySelector(".premiereEmailInputSmall");
  if (premiereInput.value == "") {
    alert("Pole email nie moze byc puste");
  } else if (!emailRegex.test(premiereInput.value)) {
    alert("Prosze wpisac prawidlowy adres email");
  } else {
    greyBackground.style.display = "block";
    game.style.display = "flex";
  }
});

gameBoxClose.addEventListener("click", function() {
  greyBackground.style.display = "none";
  game.style.display = "none";
});
>>>>>>> 82d4dfd30e5bfbef55c28a514edec1b9d6b190b8
