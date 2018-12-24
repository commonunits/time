"use strict";

function OpenCommonUnitsTime() {
	browser.tabs.create({
		"url": "./src/index.html"
	});
}

browser.browserAction.onClicked.addListener(OpenCommonUnitsTime);
