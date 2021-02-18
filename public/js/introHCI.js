'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn() {
	e.preventDefault();
	ga('create', 'G-1FGVFHZ2P8', 'auto');
	ga('send', 'event', 'signup', 'click');
}