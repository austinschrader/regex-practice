$(document).ready(function () {
	$('#regex-form').submit(function (event) {
		event.preventDefault();

		// Basic Functionality
		let first = $('input#basic1').val();
		let firstRegInput = $('input#basic2').val();
		let firstReg = new RegExp(firstRegInput, 'gi');
		let regexFirst = first.replace(firstReg, 'x');
		$('.output1').text(regexFirst);

		// Flag Functionality
		let flagInput = $('input#flagInput').val();
		let flagRegex = $('input#flagRegex').val();
		let regInstance = new RegExp(flagRegex, 'gi');
		let regValue = flagInput.replace(regInstance, 'x');
		$('.flagOutput').text(regValue);
	});
});
