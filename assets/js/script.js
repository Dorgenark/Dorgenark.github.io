function openPopup(el) {
	if ($('#' + el).is(':visible')) {
		$('#' + el).slideUp(200);
	} else {
	   $('.popup').fadeOut(50);
	   $('#' + el).slideToggle(300);   
	}
}

function closePopup() {
    $('.popup').slideUp(200);
}