$(document).ready(function () {
	$('#regex-form').submit(function (event) {
		event.preventDefault();

		let first = $('input#basic1').val();
    let firstRegInput = $('input#basic2').val();
    let firstReg = new RegExp(firstRegInput, "x")
		let regexFirst = first.replace(firstReg);
		console.log(regexFirst);
		$('.output1').text(regexFirst);
	});
});
