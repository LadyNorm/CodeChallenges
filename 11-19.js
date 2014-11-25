a = [10, 20, 30 , 40, 50]

a.map(function (x) {
	return x * 10
})

a.filter(function (x) {
	return x > 25
})

function highestFreq(str) {
	var counts = {}
	var highestCount = 0
	str.split('').forEach(function (char){
		counts[char] || (counts[char] = 0)
		counts[char] += 1
		if (counts[char] > highestCount) highestCount = counts[char]
	})
	var highestChars = Object.keys(counts).filter(function (char){
		return counts[char] == highestCount
	})
	return highestChars.sort().join('')
}