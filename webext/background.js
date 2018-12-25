"use strict";
var browser = (typeof browser === 'undefined') ? chrome : browser;

function OpenCommonUnitsTime() {
	browser.tabs.create({
		"url": "./src/index.html"
	});
}

browser.browserAction.onClicked.addListener(OpenCommonUnitsTime);
