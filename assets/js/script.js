// ABOUT & CONTACT
// Show div
function openPopup(el) {
	if ($('#' + el).is(':visible')) {
		$('#' + el).slideUp(200);
	} else {
	   $('.popup').fadeOut(50);
	   $('#' + el).slideToggle(300);   
	}
}
// Hide div
function closePopup() {
    $('.popup').slideUp(200);
}


// BACK TO TOP
// Scroll detection
window.addEventListener("scroll", function() { 
   if(window.scrollY > 380) {
      $('.btn-top').fadeIn(300);
   }
   else {
      $('.btn-top').fadeOut(200);
   }
},false);
// Animation to top
$('.btn-top a').on("click", function(){
	var scroll = $(this).attr("href");
    $('html, body').animate({
        scrollTop:$(scroll).offset().top
	}, 600);
	return false;
});