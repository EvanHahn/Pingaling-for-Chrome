window.Pingaling = {};

Pingaling.TO_PING = [
	'http://evanhahn.com/tape/pingaling.gif',
	'https://raw.github.com/EvanHahn/Pingaling-for-Chrome/master/server/pingaling.gif'
];
Pingaling.WAIT_TIME = 2000;	// in milliseconds
Pingaling.BAD_START = 5;	// in seconds

Pingaling.lastResponse = Date.now();
Pingaling.ping = function() {
	for (var i = 0; i < Pingaling.TO_PING.length; i ++) {
		var img = new Image();
		img.onload = function() {
			Pingaling.lastResponse = Date.now();
		};
		img.src = Pingaling.TO_PING[i] + '?' + Date.now();
	}
};
