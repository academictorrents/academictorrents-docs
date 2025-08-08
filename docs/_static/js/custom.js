
var ascript = document.createElement('script');
ascript.setAttribute('src','https://media.ethicalads.io/media/client/ethicalads.min.js');
document.head.appendChild(ascript);

$.ajax("/a_router.php?color=dark", {
	success: function( data ) {
	    $(".wy-side-scroll").append(data);
	}
});
