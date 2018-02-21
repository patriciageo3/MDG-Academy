$(".navbar-collapse ul li a[href^='#']").on("click", function(e) {
    e.preventDefault();
    
    var hash = this.hash;
    
    $("html, body").animate({
    scrollTop: $(this.hash).offset().top  
    }, 700, function() {
        window.location.hash = hash;
    });
});

$("a.navbar-brand[href^='#']").on("click", function(event) {
    event.preventDefault();
    
    var hash = this.hash;
    
    $("html, body").animate({
    scrollTop: $(this.hash).offset().top
    }, 700, function() {
            window.location.hash = hash;
    });
});

$("div#back-to-top a[href^='#']").on("click", function(event) {
    event.preventDefault();
    
    var hash = this.hash;
    
    $("html, body").animate({
    scrollTop: $(this.hash).offset().top
    }, 700, function() {
            window.location.hash = hash;
    });
});

$('.close').click(function () {
  $('#exampleModalLong').hide();
  $('#exampleModalLong iframe').attr("src", jQuery("#exampleModalLong iframe").attr("src"));
});



$(document).click(function() {
    $('#exampleModalLong').hide();
    $('#exampleModalLong iframe').attr("src", jQuery("#exampleModalLong iframe").attr("src"));
});
    