function countIslands (mapStr) {
  
  var counter =0;
  
  var first = mapStr.split("\n")
  var array = [];
  first.forEach(function(item){
    array.push(item.split(""));
  })
  
  for(var i=0;i<array.length;i++){
    for (var j=0; j <array[i].length; j++){
      if (array[i][j] == "0"){
        if (i > 0 && array[i-1][j] !== "0" && j > 0 && array[i][j-1] !=="0"){
          counter++;
        }
        else if( i === 0 && j > 0 && array[i][j-1] !== "0"){
          counter++;
        }
        else if( j === 0 && i > 0 && array[i-1][j] !== "0"){
          counter++;
        }
        else if (i === 0 && j === 0){
          counter++;
        } 
        else if(i > 0 && array[i-1][j] === "0" &&  j > 0 && array[i][j-1] === "0" && array[i-1][j-1] !== "0"  ){
          counter--;
        }
      } 
    }
  } 
  return counter;  
}