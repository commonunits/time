"use strict";

const siTimeHeader = document.getElementById("SITime");
// const cuTimeHeader = document.getElementById("CUTime");
const kiloClarkeDiv = document.getElementById("kiloClarke"); 
const hectoClarke = document.getElementById("hectoClarke");
const clarke = document.getElementById("clarke");

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

const splitKiloClarke = (dateToBeConverted) => {
	const kiloClarkeInDecimals = cuTimeConversion(dateToBeConverted);
	const tempArray = kiloClarkeInDecimals.split('.');
	return tempArray;
}

const getKiloClarke = (dateToBeConverted) => {
	const temp = splitKiloClarke(dateToBeConverted);
	return '0' + temp[0] + ".";
}

const getHectoClarke = (dateToBeConverted) => {
	const tempArray = splitKiloClarke(dateToBeConverted);
	return tempArray[1][0] + tempArray[1][1];
}

const getClarke = (dateToBeConverted) => {
	const tempArray = splitKiloClarke(dateToBeConverted);
	return tempArray[1][2] + tempArray[1][3];;
}

setInterval(() => {
	const nowDate = new Date();
	siTimeHeader.innerText = nowDate.toLocaleString();
	// cuTimeHeader.innerText = cuTimeConversion(nowDate) + " kiloclarkes";
	kiloClarkeDiv.innerText = getKiloClarke(nowDate);
	hectoClarke.innerText = getHectoClarke(nowDate);
	clarke.innerText = getClarke(nowDate);
}, interval);

