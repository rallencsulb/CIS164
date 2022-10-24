const $ = selector => document.querySelector(selector);

const processEntry = () => {
	if (document.querySelector("#cents").value >= 0 && document.querySelector("#cents").value <= 99) {
		makeChange(document.querySelector("#cents").value);
	}
	else {
		alert("wrong number please input a number from 0 to 99.");
	}
};

function makeChange(cent) {
	$("#quarters").value = parseInt( cent / 25 );
	let qua = parseInt( cent / 25 );
	qua *= 25;
	cent -= qua;

	$("#dimes").value = parseInt( cent / 10);
	let dim = parseInt( cent / 10 );
	dim *= 10;
	cent -= dim;

	$("#nickels").value = parseInt( cent / 5);
	let nic = parseInt( cent / 5 );
	nic *= 5;
	cent -= nic;

	$("#pennies").value = parseInt( cent / 1);
}

document.addEventListener("DOMContentLoaded", () => {
	$("#calculate").addEventListener("click", processEntry);
});