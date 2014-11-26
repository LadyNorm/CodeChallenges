function charSum (str) {
 var a = 0;
 for(var i = 0; i < str.length; i++){
   if (parseInt(str[i])){
       a += parseInt(str[i]);
     }
 }
 return a;
}