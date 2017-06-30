$(function(){
	var myval = $('.input_val')
	$('.btn_t').click(function(){
		var val = myval.val();
		if(myval.val() == ''){return};		 	
		var html = '<div class="alert alert-warning alert-dismissible warn" role="alert">'+
		'<button type="button" class="close " data-dismiss="alert" aria-label="Close">'+
					'<span aria-hidden="true">&times;</span></button><strong>'+ val +'</strong></div>';
		$('.warn1').append(html);
		val = val.trim
		myval.val('')		

	})
})
