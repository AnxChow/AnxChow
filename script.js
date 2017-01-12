$("document").ready(function(){

	$('#nav').localScroll({duration:800});

});

$("document").ready(function(){
	$("#skills").hide()
	$("#projects").hide()

	$('#skill').click(function(){
		if($( '#projects' ).is(":visible")){
              $( '#projects' ).hide();
              $('#skills').show()
         } else{
              $( '#skills' ).show();

         }
      	return false;
	});

	$('#project').click(function(){
		if($( '#skills' ).is(":visible")){
              $( '#skills' ).hide();
              $('#projects').show()
         } else{
              $( '#projects' ).show();

         }
     	return false;
     });
});

$("document").ready(function(){
	$("a#bar").hover(
		function () {
    		$(this).toggleClass('animation');
    		return false;
    	}, function() {
    		$(this).toggleClass('animation');
    		return false;
	});

});


