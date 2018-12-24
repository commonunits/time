"use strict";

function OpenCommonUnitsTime() {
	browser.tabs.create({
		"url": "./src/cutime.html"
	});
}

browser.browserAction.onClicked.addListener(OpenCommonUnitsTime);
