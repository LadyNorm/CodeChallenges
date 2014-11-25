function onlyUnique (str) {
x = str.split('')
count = {}
x.forEach(function(y) {
  count[y] || (count[y] = 0)
  count[y] += 1
})
newArry = []
for(var key in count) {
  if(count[key] > 1) {
  delete count[key]
  }else 
  newArry.push(count[key])
}
return Object.keys(count).join('')
}