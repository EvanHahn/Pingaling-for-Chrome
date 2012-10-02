window.Pingaling = {};

// Config variables
Pingaling.toPing = "http://github.com/EvanHahn/Pingaling-for-Chrome/raw/master/server/pingaling.png";
Pingaling.waitTime = 2000;	// in milliseconds
Pingaling.badStart = 5;	// in seconds
Pingaling.goodBackground = "-webkit-gradient(linear, left top, left bottom, color-stop(0%,#dfd), color-stop(100%,#f0fff0))";
Pingaling.badBackground = "-webkit-gradient(linear, left top, left bottom, color-stop(0%,#fdd), color-stop(100%,#fff0f0))";

// The meat of the code
Pingaling.lastResponse = Date.now();
Pingaling.ping = function() {

	// Try loading an image
	var img = new Image();
	img.onload = function() {
		Pingaling.lastResponse = Date.now();
	};
	img.src = Pingaling.toPing + "?" + Date.now();

};

// Let's go for it!
window.onload = function() {
	setInterval(Pingaling.ping, Pingaling.waitTime);
	setInterval(function() {

		// How long until the last response?
		var since = Math.floor((Date.now() - Pingaling.lastResponse) / 1000);
		var s = "s";
		if (since === 1) s = "";
		document.getElementById("seconds").innerHTML = since + " second" + s;

		// How good is this?
		if (since < Pingaling.badStart) {
			// Good
			document.body.style.background = Pingaling.goodBackground;
			chrome.browserAction.setIcon({ path: "good.png" });
		} else {
			// Bad
			document.body.style.background = Pingaling.badBackground;
			chrome.browserAction.setIcon({ path: "bad.png" });
			chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
			chrome.browserAction.setBadgeText({ text: since });
		}

	}, 500);
};
