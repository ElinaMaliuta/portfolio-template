// ==> Додавання та скидання класу active для TAB =====================
$(document).ready(function(){

	$('.header__item-nav').click(function(e){
		 e.preventDefault();

		 $('.header__item-nav').removeClass('header__item-nav-active');
		 $('.content__item-main').removeClass('content__item-main-active');

		 $(this).addClass('header__item-nav-active');
		 $($(this).attr('href')).addClass('content__item-main-active')
	}); 

	$('.header__item-nav:first').click();
});
// <== Додавання та скидання класу active для TAB =======================
// ==> Додавання та скидання класу active для menu-burger ===============
$(document).ready(function() {
	$('.button-gamburger').click(function() {
		 $('.ti-layout-line-solid,.card').toggleClass('header-display-on');
		 $('body').toggleClass('lock');
	});
});
// <== Додавання та скидання класу active для menu-burger ===============
// ==> Button More Works in section WORKS================================

// <== Button More Works in section WORKS================================