var quitTime;
/* display fail login message
---------------------------------------------------------------------------------------------------------------- */
$(document).ready(function(){
$( "#frmLogin" ).validate({
    submitHandler: function( form ) {
        window.location.href = "#user";
    }
});
});

/*--- timer restore --------------------------------------------------- */
 function restoreQuitTimer(){
	if (localStorage.getItem('quit_year')){

		$('#countdown').empty();
				$('#countdown').countup({
			start: new Date(localStorage.getItem('quit_year'), 
			localStorage.getItem('quit_month'),
			localStorage.getItem('quit_date'),
			localStorage.getItem('quit_hours'),
			localStorage.getItem('quit_minutes'),
			localStorage.getItem('quit_seconds')) //year, month, day, hour, min, sec
		}); 
 }
 }
 
 /* --- Timer reset ---------------------------------------------------- */
 function resetQuitTimer(){
 		quitTime = new Date();
		$('#countdown').empty();
		localStorage.setItem('quit_year', quitTime.getFullYear());
		localStorage.setItem('quit_month', quitTime.getMonth());
		localStorage.setItem('quit_date', quitTime.getDate());
		localStorage.setItem('quit_hours', quitTime.getHours());
		localStorage.setItem('quit_minutes', quitTime.getMinutes());
		localStorage.setItem('quit_seconds', quitTime.getSeconds());
		$('#countdown').countup({
			start: quitTime //year, month, day, hour, min, sec
		});
	}

