"use strict";

window.addEventListener("load", (function () {
	const commonUnitsTime = document.getElementById("cu-time");
	const percentOfToday = document.getElementById("cu-percent");
	const progressLoader = document.getElementById("progress-loader");
	const siDate = document.getElementById("si-time").querySelector('.date');
	const siTime = document.getElementById("si-time").querySelector('.time');

	siDate.addEventListener('click', () =>
		localStorage.setItem('useISO',
			localStorage.getItem('useISO') ? '' : '1'));

	siTime.addEventListener('click', () =>
		localStorage.setItem('use24h',
			localStorage.getItem('use24h') ? '' : '1'));

	const [ kiloClarke, hectoClarke, clarke ] = Array
		.from(commonUnitsTime.children)
		.map(el => el.children[0]);

	const dayInS = 24 * 60 * 60;
	const dayInMs = dayInS * 1000;
	const dayInϾ = 100 * 10 * 100;
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
		const [ kϾ, rest ] = percent.toFixed(3).split(".");
		// Slice rest to get hϾ and Ͼ
		return [ percent, kϾ, rest.slice(0, 1), rest.slice(1) ];
	};

	setInterval(function () {

		const now = new Date();
		siDate.textContent = (
			localStorage.getItem('useISO')
				? dateFns.format(now, 'YYYY-MM-DD')
				: dateFns.format(now, 'DD/MM/YYYY')
		);
		siTime.textContent = (
			localStorage.getItem('use24h')
				? dateFns.format(now, 'HH:mm:ss')
				: dateFns.format(now, 'hh:mm:ss A')
		);
		const [ percent, kϾ, hϾ, Ͼ ] = convertTimeToCommonUnits(now);

		const percentString = `${percent.toFixed(3)}%`;

		percentOfToday.textContent = percentString
		progressLoader.style.width = percentString;

		kiloClarke.textContent = kϾ;
		hectoClarke.textContent = hϾ;
		clarke.textContent = Ͼ;

	}, interval);

}));
