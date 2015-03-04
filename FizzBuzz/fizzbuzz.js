// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function () {
	"use strict";

	var output = "";
	var i;

	/** Chapter 4 p.143
	*	Write a program that prints the numbers from 1 to 100.
	*	But for multiples of three print "Fizz" instead of the number 
	*	and for the multiples of five print "Buzz".
	*	For numbers which are multiples of both three and five 
	*	print "FizzBuzz".
	**/
	function fizzbuzz_logic() {
		if (i % 3 === 0 && i % 5 === 0) {
				output = "FizzBuzz";
			}
			else if (i % 3 === 0) {
				output = "Fizz";
			}
			else if (i % 5 === 0) {
				output = "Buzz";
			}
			else {
				output = i;
			}
	}

	/** FizzBuzz for numbers from 1 to 100 **/
	function fizzbuzz_1() {
		for (i = 1; i <= 100; i++) {
			fizzbuzz_logic();

			$("#fizzbuzz1").append("<li>" + output + "</li>");
		}
	}

	/**	Create a function fizzbuzz_2(start, end) that takes 
	*	the starting and ending numbers as parameters.  
	*	Call fizzbuzz_2(200, 300)
	**/
	function fizzbuzz_2(start, end) {
		if (start > end) {
			alert("Starting number is greater than ending number.");
		}
		else {
			for (i = start; i <= end; i++) {
				fizzbuzz_logic();

				$("#fizzbuzz2").append("<li>" + output + "</li>");
			}
		}
	}

	/** Create a function fizzbuzz_3(arr) that takes 
	*	an array of numbers to use instead of counting by itself.  
	**/
	function fizzbuzz_3(arr) {
		for (i = 0; i < arr.length; i++) {
			if ( (arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
				output = "FizzBuzz";
			}
			else if (arr[i] % 3 === 0) {
				output = "Fizz";
			}
			else if (arr[i] % 5 === 0) {
				output = "Buzz";
			}
			else {
				output = arr[i];
			}

			$("#fizzbuzz3").append("<li>" + output + "</li>");
		}
	}

	/** Create a function fizzbuzz_4(obj) that takes an object 
	*	specifying the words to be printed instead of "Fizz" and "Buzz".
	**/
	function fizzbuzz_4(obj) {
		for (i = 1; i <=100; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				output = obj.divisibleByThree + obj.divisibleByFive;
			}
			else if (i % 3 === 0) {
				output = obj.divisibleByThree;
			}
			else if (i % 5 === 0) {
				output = obj.divisibleByFive;
			}
			else {
				output = i;
			}

			$("#fizzbuzz4").append("<li>" + output + "</li>");
		}
	}

	/** Combine steps (3) and (4) to create fizzbuzz_5(arr, obj) **/
	function fizzbuzz_5(arr, obj) {
		for (i = 0; i < arr.length; i++) {
			if ( (arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
				output = obj.divisibleByThree + obj.divisibleByFive;
			}
			else if (arr[i] % 3 === 0) {
				output = obj.divisibleByThree;
			}
			else if (arr[i] % 5 === 0) {
				output = obj.divisibleByFive;
			}
			else {
				output = arr[i];
			}

			$("#fizzbuzz5").append("<li>" + output + "</li>");
		}
	}

	//call functions
	fizzbuzz_1();
	fizzbuzz_2(200, 300);
	fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
	fizzbuzz_4({divisibleByThree: "foo", divisibleByFive: "bar"});
	fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115], {divisibleByThree: "foo", divisibleByFive: "bar"});
};

$(document).ready(main);