function isBalanced (string) {
 arr = string.split('')
 count = 0
 console.log(arr)
 valid = true
 arr.forEach(function(c){
   console.log(count)
   if( c == "(")
     count++
   if( c == ")")
     count--
   if( count<0)
     valid = false
 })
 if(count == 0)
   return valid
 else
   return false
}