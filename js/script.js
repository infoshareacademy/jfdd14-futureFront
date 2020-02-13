$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    // $('.navbar').addClass("transparent");
});

$('body').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    // $('.navbar').removeClass("white")
});

// $('.navbar').on('click', function(){
//     $('.navbar').addClass("white")
// });

$('.navbar').on('click', function(){
    $('.navbar').toggleClass("white")
});
