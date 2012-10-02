window.onload = function() {

	setInterval(Pingaling.ping, Pingaling.waitTime);
	setInterval(function() {

		var since = Math.floor((Date.now() - Pingaling.lastResponse) / 1000);

		// Everything's all good!
		if (since < Pingaling.BAD_START) {
			chrome.browserAction.setIcon({ path: 'good.png' });
			chrome.browserAction.setBadgeText({ text: '' });
		}

		// Not so good
		else {
			chrome.browserAction.setIcon({ path: 'bad.png' });
			chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
			chrome.browserAction.setBadgeText({ text: ('' + since) });
		}

	}, 500);

};
