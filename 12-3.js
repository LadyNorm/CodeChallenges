function binaryToDecimal (n) {
 
  var sum = 0
  var array = n.split('').reverse()
  var len = array.length
  
  for (i = 0; i < len; i ++){
    if (array[i] == '1'){
    sum += Math.pow(2, i)
  }
  }
  return sum
}