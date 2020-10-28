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
		let flagsInput = $('input#flagsInput').val();
		let flagsRegex = $('input#flagsRegex').val();
		let flagsRegInstance = new RegExp(flagsRegex, 'i');
		let flagsRegValue = flagsInput.replace(flagsRegInstance, 'x');
		$('.flagsOutput').text(flagsRegValue);

		// Pattern Functionality
		let patternsInput = $('input#patternsInput').val();
		let patternsRegex = $('input#patternsRegex').val();
		let patternsRegInstance = new RegExp(patternsRegex, 'i');
		let patternsRegValue = patternsInput.replace(patternsRegInstance, 'x');
		$('.patternsOutput').text(patternsRegValue);

		// Groups Functionality
		let groupsInput = $('input#groupsInput').val();
		let groupsRegex = $('input#groupsRegex').val();
		let groupsRegInstance = new RegExp(groupsRegex, 'i');
		let groupsRegValue = groupsInput.replace(groupsRegInstance, 'x');
		$('.groupsOutput').text(groupsRegValue);

		// Characters Functionality
		let charactersInput = $('input#charactersInput').val();
		let charactersRegex = $('input#charactersRegex').val();
		let charactersRegInstance = new RegExp(charactersRegex, 'i');
		let charactersRegValue = charactersInput.replace(
			charactersRegInstance,
			'x'
		);
		$('.charactersOutput').text(charactersRegValue);

		// Quantifier Functionality
		let quantifiersInput = $('input#quantifiersInput').val();
		let quantifiersRegex = $('input#quantifiersRegex').val();
		let quantifiersRegInstance = new RegExp(quantifiersRegex, 'i');
		let quantifiersRegValue = quantifiersInput.replace(
			quantifiersRegInstance,
			'x'
		);
		$('.quantifiersOutput').text(quantifiersRegValue);
	});
});
