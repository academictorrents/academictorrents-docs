$.ajax("/a_carbon.php", {
	success: function( data ) {
	    $(".wy-side-scroll").append(data);
	}
});
