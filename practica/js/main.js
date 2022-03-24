$(document).ready(function(){
	var imgItems = $('.slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Ocultanos todos los slides
	$('.slider li:first').show(); // Mostramos el primer slide
	$('.pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

	// Show the first tab and hide the rest
	$('#tabs-nav li:first-child').addClass('active');
	$('.tab-content').hide();
	$('.tab-content:first').show();

// Click function
	$('#tabs-nav li').click(function(){
		$('#tabs-nav li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();

		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
	});

	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this)
			.siblings(".content")
			.slideUp(200);
		$(".set > a i")
			.removeClass("fa-minus")
			.addClass("fa-plus");
	} else {
		$(".set > a i")
			.removeClass("fa-minus")
			.addClass("fa-plus");
		$(this)
			.find("i")
			.removeClass("fa-plus")
			.addClass("fa-minus");
		$(".set > a").removeClass("active");
		$(this).addClass("active");
		$(".content").slideUp(200);
		$(this)
			.siblings(".content")
			.slideDown(200);
	}

	$('#accordion').find('.accordion-toggle').click(function(){

		// mc 4/2/2015
		//Expand or collapse this panel
		var isActive = $(this).hasClass("active");
		$('.accordion-toggle').removeClass('active')
		if (!isActive) {
			$(this).toggleClass('active');
		}

		$(this).next().slideToggle('fast');
		//Hide the other panels
		$(".accordion-content").not($(this).next()).slideUp('fast');

	});


	$("#text").hover(function() {
		$(this).css('cursor','pointer').attr('title', 'aixo es un camp de text');
	}, function() {
		$(this).css('cursor','auto');
	});


	$("#number").hover(function() {
		$(this).css('cursor','pointer').attr('title', 'aixo es un camp numeric');
	}, function() {
		$(this).css('cursor','auto');
	});


	$("#selector").hover(function() {
		$(this).css('cursor','pointer').attr('title', 'aixo es un selector');
	}, function() {
		$(this).css('cursor','auto');
	});


	$("#button-group").hover(function() {
		$(this).css('cursor','pointer').attr('title', 'aixo es un buttongroup');
	}, function() {
		$(this).css('cursor','auto');
	});


	$("#checkbox").hover(function() {
		$(this).css('cursor','pointer').attr('title', 'aixo es un chekcbox');
	}, function() {
		$(this).css('cursor','auto');
	});


	$("#email").hover(function() {
		$(this).css('cursor','pointer').attr('title', 'aixo es un camp mail');
	}, function() {
		$(this).css('cursor','auto');
	});

	$("#date").hover(function() {
		$(this).css('cursor','pointer').attr('title', 'aixo es un camp date');
	}, function() {
		$(this).css('cursor','auto');
	});


	// VALIDAMOS CON METODO VALIDATE
	$("#acc-form").validate(
		{
			rules: {
				text : {
					required: true,
					minlength: 3,
					maxLength: 30
				},
				number: {
					required: true,
					maxLength: 100,
					number: true
				},
				selector: {
					required: true,
				},
				checkbox:{
					required: true,
				},
				email:{
					required: true,
					email: true
				},
				date:{
					required: true,
					date: true
				}
			},
			messages : {
				name: {
					required: "has de omplir el camp de text",
					minlength: "el nom ha de tenir 3 caracters"
				},
				number: {
					required: "omple el camp number",
					number: "introdueix un numero",
					max: "numero maxim",
					length: "superada la quantitat de caracters"
				},
				email: {
					email: "Introdueix un camp email",
					required: "omple el camp email"
				},
				date: {
					required: "Omple el camp date",
					date: "Introdueix una data valida"
				}
			}
		});




});


