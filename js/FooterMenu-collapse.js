/*!
 * Bootstrap footer 摺疊選單
 */

$(function() {

  $(document).ready(function() {	
	$( ".FooterCollapse h3" ).click(
		function() {
			$(this).parent().toggleClass('active');
		}
	);	  	
});

});
