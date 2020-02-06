/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu



******************************/

/*
function onConfirmAgeClicked(){
	let ageCheckModal = $("#age_check_modal");

	let YOB = parseInt($("#age-check-input").val());
	if(new Date().getFullYear()-YOB<18){
		window.location.href="https://ro.wikipedia.org/wiki/Pagina_principal%C4%83"
	}else{
		$(ageCheckModal).modal('hide');
		Cookies.set('YOB',YOB);
	}
}*/

$(document).ready(function()
{

	"use strict";

		/*
	if(!Cookies.get('YOB')){


		let ageCheckModal = $("#age_check_modal");

		$(ageCheckModal).modal({
			backdrop: 'static',
			keyboard: false
		});
		$(ageCheckModal).modal('show');

		$("#confirm-age-button").on('click',function(){
			onConfirmAgeClicked()
		});
	}
	*/

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var hamburgerBar = $('.hamburger_bar');
	var hamburger = $('.hamburger');
	var headerLogo = $('.header_logo');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});


	initMenu();


	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
			hamburgerBar.addClass('scrolled');
			headerLogo.addClass('scrolled');

		}
		else
		{
			header.removeClass('scrolled');
			hamburgerBar.removeClass('scrolled');
			headerLogo.removeClass('scrolled');

		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			hamburger.on('click', function()
			{
				hamburger.toggleClass('active');
				menu.toggleClass('active');
			});
		}
	}




});


function initAccordions()
{
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
}

function getParameterByName(name) {
	let url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}




function onRequestDataDelete(){
	let email = $("#data_delete_email").val();
	if(!email)
		alert("Va rog sa introduceti o adresa de email valida");
	else{
		postData('https://glacial-stream-75477.herokuapp.com/grivin/delete_data_request',{email:email}).then(data => {
			alert("Am inregistrat cererea. Informatiile dumneavoastra vor fi sterse de pe serverul nostru in interval de 30 de zile");
			Cookies.remove('cookieconsent_status');
			window.location.reload()
		})
	}

}


window.cookieconsent.initialise({
	"palette": {
		"popup": {
			"background": "#9c2a30",
			"text": "#ffffff"
		},
		"button": {
			"background": "transparent",
			"text": "#ffffff",
			"border": "#ffffff"
		}
	},
	"content": {
		"message": "Site-ul nostru foloseste cookie-uri pentru a imbunatatii experienta dumneavoastra. ",
		"dismiss": "Am inteles!",
		"link": "Afla cum folosim cookie-urile",
		"href": "politica_de_confedintialitate.html"
	}
});