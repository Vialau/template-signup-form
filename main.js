$(document).ready(function(){

  $('#signup').submit(function(e) {
	e.preventDefault();
	let form = $(this);
	$.ajax({
	  type: 'post',
	  dataType: 'json',
	  url: form.attr('action'),
	  contentType: 'application/json; charset=utf-8',
	  data: JSON.stringify({
		email: {
		  name: $('#name').val(),
		  email: $('#email').val()
		} 
	  }),
	  success: function() {
		$('#signup-success').show();
		$('#signup').hide();
	  },
	  error: function(xhr, res, text) {
		alert('There was a problem registering.');
	  }
	});
  });

  $('#delete').submit(function(e) {
	e.preventDefault();
	let url = 'https://api.sheety.co/8647c1294e14cf39f72566bf52df77ba/signupForm/emails/2';
		fetch(url, {
		method: 'DELETE',
		})
		.then((response) => response.json())
		.then(() => {
		console.log('Object deleted');
		});
	  success: function() {
		$('#delete-success').show();
		$('#delete').hide();
	  },
	  error: function(xhr, res, text) {
		alert('There was a problem deleting.');
	  }
	});
  });

});