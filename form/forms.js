		(function ($) {

			"use strict";

			var $document = $(document),
				$window = $(window),
				forms = {
				contactForm: $('#contactForm'),
				questionForm: $('#questionForm'),
				bookingForm: $('#bookingForm'),
				requestForm: $('#requestForm')
			};

			$document.ready(function () {
				
				// datepicker
				if ($('.datetimepicker').length) {
					$('.datetimepicker').datetimepicker({
						format: 'DD/MM/YYYY',
						ignoreReadonly: true,
						icons: {
							time: 'icon icon-clock',
							date: 'icon icon-calendar2',
							up: 'icon icon-top',
							down: 'icon icon-bottom',
							previous: 'icon icon-left',
							next: 'icon icon-right',
							today: 'icon icon-tick',
							clear: 'icon icon-close',
							close: 'icon icon-close'
						}
					});
				}
				if ($('.timepicker').length) {
					$('.timepicker').datetimepicker({
						format: 'LT',
						ignoreReadonly: true,
						icons: {
							time: 'icon icon-clock',
							up: 'icon icon-top',
							down: 'icon icon-bottom',
							previous: 'icon icon-left',
							next: 'icon icon-right'
						}
					});
				}
								
				// contact page form
				if (forms.contactForm.length) {
					var $contactform = forms.contactForm;
					
					$contactform.validate({
						rules: {
							// name: {
							// 	required: true,
							// 	minlength: 2
							// },
							phone: {
								required: true,
								// minlength: 9
							},
							// message: {
							// 	required: true,
							// 	minlength: 20
							// },
							// email: {
							// 	required: true,
							// 	email: true
							// }

						},
						messages: {
							phone: {
								required: "Пожалуйста, заполните это поле",
								// minlength: "Your name must consist of at least 2 characters"
							},
							// message: {
							// 	required: "Please enter message",
							// 	minlength: "Your message must consist of at least 20 characters"
							// },
							// email: {
							// 	required: "Please enter your email"
							// }
						},
						submitHandler: async function submitHandler(form) {
							const url = "https://imed-clinic.com/api/book";
							// const url = 'http://localhost:5000/api/book';
							const elements = document.forms['contactForm'].elements;
							const body = {};
							for(let elem of elements) {
								if(elem.name) {
									body[elem.name] = elem.value;
								}
								
							}

							fetch(url, {
								body: JSON.stringify(body),
								headers : {
									'Content-type' : 'application/json',
								},
								method: 'POST',
							})
							.then( () => {
								$('.successform', $contactform).fadeIn();
								$contactform.get(0).reset();
							})
							.catch((e) => {
								$('.errorform', $contactform).fadeIn();
							})

							// $(form).ajaxSubmit({
							// 	type: "POST",
							// 	data: $(form).serialize(),
							// 	url: url,
							// 	success: function success() {
									
							// 	},
							// 	error: function error() {
									
							// 	}
							// });
						}
					});
				}

				// question form
				
				
				
				if (forms.bookingForm.length) {
					var $bookingForm = forms.bookingForm;
					
					$bookingForm.validate({
						rules: {
							// name: {
							// 	required: true,
							// 	minlength: 2
							// },
							phone: {
								required: true,
								// minlength: 9
							},
							// message: {
							// 	required: true,
							// 	minlength: 20
							// },
							// email: {
							// 	required: true,
							// 	email: true
							// }

						},
						messages: {
							name: {
								required: "Пожалуйста, заполните это поле",
								// minlength: "Your name must consist of at least 2 characters"
							},
							// message: {
							// 	required: "Please enter message",
							// 	minlength: "Your message must consist of at least 20 characters"
							// },
							// email: {
							// 	required: "Please enter your email"
							// }
						},
						submitHandler: async function submitHandler(form) {
							const url = "https://imed-clinic.com/api/book";
							// const url = 'http://localhost:5000/api/book';
							const elements = document.forms['bookingForm'].elements;
							const body = {};
							for(let elem of elements) {
								if(elem.name) {
									body[elem.name] = elem.value;
								}
								
							}

							fetch(url, {
								body: JSON.stringify(body),
								headers : {
									'Content-type' : 'application/json',
								},
								method: 'POST',
							})
							.then( () => {
								$('.successform', $bookingForm).fadeIn();
								$bookingForm.get(0).reset();
							})
							.catch((e) => {
								$('.errorform', $bookingForm).fadeIn();
							})
						}
					});
				}

			
			});
			
		})(jQuery);