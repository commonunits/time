"use strict";

window.addEventListener("load", (function () {
	const commonUnitsTime = document.getElementById("cu-time");
	const percentOfToday = document.getElementById("cu-percent");
	const progressLoader = document.getElementById("progress-loader");
	const siTime = document.getElementById("si-time").children[0];

	const [ kiloClarke, hectoClarke, clarke ] = Array
		.from(commonUnitsTime.children)
		.map(el => el.children[0]);

	const dayInS = 24 * 60 * 60;
	const dayInMs = dayInS * 1000;
	const dayInϾ = 10 * 100 * 100;
	// Number of seconds to a clarke
	const interval = dayInS / dayInϾ;

	const multiplierIndex = [ 60 * 60 * 1000, 60 * 1000, 1000, 1 ];

	const splitTime = date => [
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
		date.getMilliseconds(),
	];

	const getTimeInMs = date =>
		splitTime(date).reduce(
			(acc, cur, i) => acc + cur * multiplierIndex[i], 0);

	const convertTimeToCommonUnits = (date) => {
		const percent = (getTimeInMs(date) / dayInMs) * 100;
		const kiloClarkes = percent / 10;
		const [ kϾ, rest ] = kiloClarkes.toFixed(4).split(".");
		// Slice rest to get hϾ and Ͼ
		return [ percent, kϾ + ".", rest.slice(0, 2), rest.slice(2) ];
	};

	setInterval(function () {

		const now = new Date();
		siTime.textContent = now.toLocaleString();
		const [ percent, kϾ, hϾ, Ͼ ] = convertTimeToCommonUnits(now);

		percentOfToday.textContent = percent.toFixed(3);
		progressLoader.style.width = `${percent.toFixed(2)}%`;

		kiloClarke.textContent = kϾ;
		hectoClarke.textContent = hϾ;
		clarke.textContent = Ͼ;

	}, interval);

}));
