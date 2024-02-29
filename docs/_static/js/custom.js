$.ajax("/a_router.php?color=dark", {
	success: function( data ) {
	    $(".wy-side-scroll").append(data);
	}
});
