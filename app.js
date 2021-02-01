$(document).ready(function() {
  $('#normal').click(function() {
    $('#proteina').css({'width': '400px', 'height': 'auto'});
    });
    $('#ampliar').click(function() {
    $('#proteina').css({'width': '+=10px', 'height': 'auto'});
    });
    $('#reducir').click(function() {
    $('#proteina').css({'width': '-=10px','height': 'auto'});
  });


$('#izq').click(function() {
		$('#proteina').animate({
		'marginLeft' : "-=40px" 
		});
	});
	$('#der').click(function() {
		$('#proteina').animate({
        'marginLeft' : "+=40px" 
		});
	});
	$('#top').click(function() {
		$('#proteina').animate({
		'marginTop' : "+=40px" 
		});
	});
	$('#bottom').click(function() {
		$('#proteina').animate({
		'marginTop' : "-=40px" 
        });
      });
   

  $('#ocultar').click(function(){
          $('#proteina').hide();
        });

  $('#mostrar').click(function(){
          $('#proteina').show();
});
        });
