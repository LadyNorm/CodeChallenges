function parseQueryString (url) {
	a = url.split(/[?&]/);
	a = decodeURIComponent(url);
	a.shift() //drop url host
	result = [];
	a.forEach(function(r){
		result.push(r.split(/=/));
	});
	return result
}