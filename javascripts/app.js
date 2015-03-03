//https://gist.github.com/ProfAvery/c5db1692c457c526601c#file-config-js
// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function () {
	"use strict";

	var toDos = [
		"Finish writing this book",
		"Take Gracie to the park", 
		"Answer emails",
		"Prep for Monday's class",
		"Make up some new ToDos",
		"Get Groceries"
	];
	
	$(".tabs span").toArray().forEach(function (element) {
		var $element = $(element);

		//create ae click handler for this element
		$element.on("click", function () {
			var $content,
				$input,
				$button,
				i;

			$(".tabs span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				// newest first, so we have to go through
				// the array backwards
				$content = $("<ul>");
				for (i = toDos.length-1; i>= 0; i--) {
					$content.append($("<li>").text(toDos[i]));
				}
			} else if ($element.parent().is(":nth-child(2)")) {
				//oldest first, so we go through the array forwards
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
			} else if ($element.parent().is(":nth-child(3)")) {
				//input a new to-do
				$input = $("<input>"),
				$button = $("<button>").text("+");

				$button.on("click", function() {
					if ($input.val() !== "") {
						toDos.push($input.val());
						$input.val("");
					}
				});

				$content = $("<div>").append($input).append($button);
			} else if ($element.parent().is(":nth-child(4)")) {
				//demonstration tab for HW 3
				$content = $("<a href='colorbox.html'>View Slideshow</a>");
			}

			$("main .content").append($content);
			
			return false;
		});
	});

	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);