"use strict";

const siTimeHeader = document.getElementById("SITime");
const kiloClarkeHeader = document.getElementById("kiloClarke"); 
const hectoClarkeHeader = document.getElementById("hectoClarke");
const clarkeHeader = document.getElementById("clarke");

const interval = 500;
const dayInSeconds = 86400;

const cuTimeConversion = (dateToBeConverted) => {
	const hours = dateToBeConverted.getHours();
	const minutes = dateToBeConverted.getMinutes();
	const seconds = dateToBeConverted.getSeconds();
	const timeInSeconds = (hours * 60 * 60) + (minutes * 60) + seconds;

	// Conversion Done Here
	const kiloClarkes = (timeInSeconds / dayInSeconds) * 10; 
	const tempArray = kiloClarkes.toFixed(4).split(".");
	return {
		kiloClarke : "0" + tempArray[0] + ".",
		hectoClarke: tempArray[1][0] + tempArray[1][1],
		clarke: tempArray[1][2] + tempArray[1][3] 
	}
}

setInterval(() => {
	const nowDate = new Date();
	siTimeHeader.innerText = nowDate.toLocaleString();
	const {kiloClarke, hectoClarke, clarke} = cuTimeConversion(nowDate)
	kiloClarkeHeader.innerText = kiloClarke;
	hectoClarkeHeader.innerText = hectoClarke;
	clarkeHeader.innerText = clarke;
}, interval);

