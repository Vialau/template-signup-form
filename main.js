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
	const id=$('#id').val();
	var myHeaders = new Headers();
	myHeaders.append("Cookie", "__cfduid=de5323248a6fe2a2af9cd5bb8f82696df1600862832");
	
	var requestOptions = {
	  method: 'DELETE',
	  headers: myHeaders,
	  redirect: 'follow'
	};
	
	fetch(`https://api.sheety.co/8647c1294e14cf39f72566bf52df77ba/signupForm/emails/${id}`, requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));

	});
});