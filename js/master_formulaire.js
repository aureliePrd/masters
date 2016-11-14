/* global language, ajaxurl */

(function($){
	$(document).ready(init);
		
	/* expressions régulières */ 	
	var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;	
	var regexExtensionFile = /^(.*\.(pdf|doc|docx|zip))$/;									 
	var regexPassword = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=\W*).*$/;
	var regexTelephone = /#^0[1-68]([-. ]?[0-9]{2}){4}$#/;
	
	//var AUTOMOTORFORM = window.AUTOMOTOR.Formulaire = {};
	
	function init()
	{
		
		$('#file-upload').bind('change', function() { 				
			var fileName = '';
			fileName = $(this).val();
			$('#file-selected').html(fileName);
		});			
		
		$('#form').on('submit', sendContactForm);
		
	};

	function validateFormFields($form)
	{
		var valide = true;
		// hide all error messages
		$form.find('.col.error_msg').find('p').hide();
		//$form.find('.col.error_msg').find('.error_server').remove();

		$form.find('input[type=text], input[type=password]').each(function()
		{
			var self = $(this),
				value = $.trim(self.val()),
				placeholder = self.attr('placeholder');
			if(self.prop('required') || self.attr('required') === "required"){				
				if (value === "" || value === placeholder) {		 
					 self.parent().addClass('error');		                
					 valide = false;
					 self.one('keyup change',function() {
					   self.val() && self.parent().removeClass('error');
					 });		        	 
				}
				else {
					self.parent().removeClass('error');		                
				}		    			      
			} 
		});

		$form.find('input[type=tel]').each(function()
		{
			var self = $(this),
				value = $.trim(self.val()),
				placeholder = self.attr('placeholder');

			if(self.prop('required') || self.attr('required') === "required"){
				if (value === "" || value === placeholder) {
					self.parent().addClass('error');
					valide = false;
					self.one('keyup change', function () {
						self.val() && self.parent().removeClass('error');
					});
					return; // no need to check if it is a valid syntax email
				}
				else {
					self.parent().removeClass('error');
				}		    			      
			}

			if (regexTelephone.test(value)) {
				$(this).parent().removeClass('error');
			}			
			else {
				$(this).parent().addClass('error');
				$form.find('.error_telephone').show();
				valide = false;			
			}
		});

		$form.find('select').each(function()
		{
			var self = $(this);		 	        
			if(self.prop('required') || self.attr('required') === "required"){
				if (self.find("option:selected").hasClass('default') || self.val() === '') {		
					self.parent().addClass('error');
					valide = false;
					self.one('keyup change', function () {
						self.val() && self.parent().removeClass('error');
					});		        	 
				}
				else {
					self.parent().removeClass('error');		                		        	
				}		    			      
			} 
		});

		$form.find('input[type=email], input[data-type=email]').each(function()
		{
			var self = $(this),
				value = $.trim(self.val()),
				placeholder = self.attr('placeholder');
			
			if(self.prop('required') || self.attr('required') === "required"){
				if (value === "" || value === placeholder) {
					self.parent().addClass('error');
					valide = false;
					self.one('keyup change', function () {
						self.val() && self.parent().removeClass('error');
					});
					return; // no need to check if it is a valid syntax email
				}
				else {
					self.parent().removeClass('error');
				}		    			      
			}
			
			if (regexEmail.test(value)) {
				$(this).parent().removeClass('error');
			}			
			else {
				$(this).parent().addClass('error');
				$form.find('.error_email').show();
				valide = false;			
			}
		});

		$form.find('#file-upload').each(function()
		{
			if ($('#file-selected').text() !== '') {
				if (!$('html').hasClass('ie9')) {
					var fileSize = this.files[0].size/1024/1024;
				}
				if ($('html').hasClass('ie9') || fileSize <= 5) {
					$(this).parent().removeClass('error');
					$form.find('.error_message_file').hide();
				}	
				else {
					$(this).parent().addClass('error');
					$form.find('.error_message_file').show();
					$form.find('#file-selected').html('');
					$(this).one('change',function() {
					   $form.find('.error_message_file').hide();
					   $(this).parent().removeClass('error');
					});
					valide=false;			
				}

				if (regexExtensionFile.test($(this).val())) {
					$(this).parent().removeClass('ext_error');
				}
				else {
					console.log("extension");
					$(this).parent().addClass('ext_error');
					$form.find('.error_message_extension').show();
					$form.find('#file-selected').html('');
					$(this).one('change',function() {
					   $form.find('.error_message_extension').hide();
					   $(this).parent().removeClass('ext_error');
					});
					valide = false;
				}
			}
		});

		$form.find('textarea').each(function()
		{
			var self = $(this),
				value = $.trim(self.val()),
				placeholder = self.attr('placeholder');
			if(self.prop('required') || self.attr('required') == "required"){
				if (value === "" || value === placeholder) {
					self.parent().addClass('error');
					valide = false;
					self.one('keyup change', function () {
						$.trim(self.val()) && self.parent().removeClass('error');
					});
				}
				else {
					self.parent().removeClass('error');
				}
			}
		});

		$form.find('input[type=password]#password').each(function()
		{
			var self = $(this);		 
			var value = self.val();
			
			if (value) {
				if (regexPassword.test(value)) {		 
					self.parent().removeClass('error');	
					$form.find('.mdp_sentence').removeClass('error');
					var valuePwd = $form.find('#password').val(),
						valuePwd2 = $form.find('#confirmPwd').val();

					if (valuePwd !== valuePwd2) {
						valide=false;
						$form.find('.error_message_same_password').show();						
						$form.find('#password, #confirmPwd').val('').parent().addClass('error');	
						self.one('keyup change',function() {
						   self.parent().removeClass('error');
						   $form.find('.error_message_same_password').hide();
						   $form.find('.mdp_sentence').removeClass('error');
						   $form.find('#password, #confirmPwd').parent().removeClass('error');	
						 });
					}	
					else {						
						$form.find('.error_message_same_password').hide();						
						$form.find('#password, #confirmPwd').parent().removeClass('error');	
					}	        		        	 
				}
				else {
					self.parent().addClass('error');		
					$form.find('.mdp_sentence').addClass('error');
					valide = false;
					 self.one('keyup change',function() {
					   self.parent().removeClass('error');
					   $form.find('.error_message_same_password').hide();
					   $form.find('.mdp_sentence').removeClass('error');
					   $form.find('#password, #confirmPwd').parent().removeClass('error');	
					 });		        	
				}
			}
		});

		$form.find('input[type=checkbox], input[type=radio]').each(function() {
	        var self = $(this);
	        if(self.prop('required') || self.attr('required') == "required"){
	            if (!self.is(':checked')) {
	               self.parent().addClass('error');
	               valide = false;
	               self.one('keyup change',function() {
	                   self.val() && self.parent().removeClass('error');	                   
	               });
	            }
	            else {
	              self.parent().removeClass('error');
	            }
	        }			
		});

		return valide;

	};


	function sendContactForm(e)
	{
		var $contactForm = $('#form');
		if (validateFormFields($contactForm)) {
			e && e.preventDefault();
			
			/*$.ajax({
				url: ajaxurl,
				data: data,
				method: 'post',
				processData: false,
				contentType: false,
			}).done(function(){ */

				console.log("success contact");
				e && e.preventDefault();
				$('.error_email', $contactForm).hide();
				heightForm = $contactForm.height();
				$('.soumission').height(heightForm).css('line-height', heightForm + 'px').fadeIn(400, function () {
					if (!$('html').hasClass('ie9')) {
						$contactForm.find("input[type=text], input[type=email], textarea").val("");
						$contactForm.find('#file-selected').html('');
						$contactForm.find('select').val($("select option:first").val());
					}

				}).delay(3000).fadeOut(400);

			/*});*/		
		
		}
		else {
			e && e.preventDefault();
			var scrollTo = $('#form');
			$('html, body').animate({scrollTop: scrollTo.offset().top}, 300);
		}
	};

})(jQuery);	
	
