// Check Off Specific Todos By Clicking

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
	
	// ToggleClass Details
	// // Gray color RGB Compare
	// if($(this).css("color") === "rgb((128, 128, 128)") {
	// 	$(this).css( {
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	// $(this).css("color", "gray");
	// 	// $(this).css("text-decoration", "line-through");
	// 	$(this).css( {
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// }
});

// Click on X to Delete Todos
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text']").keypress(function(event) {
	// Enter Key
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});