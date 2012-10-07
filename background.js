window.onload = function() {

	setInterval(function() {

		// Everything's all good!
		if (navigator.onLine) {
			chrome.browserAction.setIcon({ path: 'good.png' });
			chrome.browserAction.setBadgeText({ text: '' });
		}

		// Not so good
		else {
			chrome.browserAction.setIcon({ path: 'bad.png' });
			chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
			chrome.browserAction.setBadgeText({ text: ('' + since) });
		}

	}, 100);

};
