function alphaCount (alphabet, text) {
	var counts = {}
	text.toLowerCase().split('').forEach(function(c){
		counts[c] || (counts[c] = 0)
		counts[c] += 1
	})
	var output = []
	alphabet.toLowerCase().split('').forEach(function(c){
		if (counts[c] == undefined) return;
		output.push(c + ':' + counts[c])
	})
	if (output.length > 0)
		return output.join(',')
	else
		return "no matches"
}