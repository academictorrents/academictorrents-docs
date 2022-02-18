$.ajax("/a_router.php", {
	success: function( data ) {
	    $(".wy-side-scroll").append(data);
	}
});
