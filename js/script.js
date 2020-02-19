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
const cookiesBtn = document.querySelector('#cookiesBtn');

const cookiesSection = document.querySelector('#cookies');

cookiesBtn.addEventListener('click', function(){
  cookiesSection.style.display = 'none';
  cookiesToStorage();
  
})

function cookiesToStorage(){
  localStorage.setItem('cookie', 'agreed');
}

function cookiesCheck(){
  if (localStorage.getItem('cookie') == 'agreed'){
    cookiesSection.style.display = 'none';
  }

}

cookiesCheck();