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
const greyBackground = document.querySelector(".greyBackground");
window.addEventListener("scroll", function() {
  scrollRotate();
});
const premiereButton = document.querySelector("#premierButton");
const game = document.querySelector(".game");
const gameBoxPlay = document.querySelector("#gameBoxPlay");
const gameBoxClose = document.querySelector("#gameBoxClose");

gameBoxPlay.addEventListener("click", function() {
  greyBackground.style.display = "none";
  game.style.display = "none";
});

premiereButton.addEventListener("click", function() {
  greyBackground.style.display = "block";
  game.style.display = "flex";
});

gameBoxClose.addEventListener("click", function() {
  greyBackground.style.display = "none";
  game.style.display = "none";
});
