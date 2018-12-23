"use strict";

const siTimeHeader = document.getElementById("SITime");
const cuTimeHeader = document.getElementById("CUTime");
const interval = 500;
const dayInSeconds = 86400;

const cuTimeConversion = (dateToBeConverted) => {
	const hours = dateToBeConverted.getHours();
	const minutes = dateToBeConverted.getMinutes();
	const seconds = dateToBeConverted.getSeconds();
	const timeInSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;

	// Conversion Done Here
	const kiloClarkes = (timeInSeconds / dayInSeconds) * 10; 
	return kiloClarkes.toFixed(4);
}

setInterval(() => {
	const nowDate = new Date();
	siTimeHeader.innerText = nowDate.toLocaleString();
	cuTimeHeader.innerText = cuTimeConversion(nowDate) + " kiloclarkes";

}, interval);

