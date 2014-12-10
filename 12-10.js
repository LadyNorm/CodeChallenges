function semSort (versionsString) {
  
  var array = versionsString.split("\n");
  
  var sorted = array.sort(function(x, y){
    var x_vals = x.split('.');
    var y_vals = y.split('.');
    if (parseInt(x_vals[0]) > parseInt(y_vals[0])) {
        return -1;
    }
    else if (parseInt(x_vals[0]) < parseInt(y_vals[0])) {
        return 1;
    }
    else{
      if (parseInt(x_vals[1]) > parseInt(y_vals[1])) {
        return -1;
      }
      else if (parseInt(x_vals[1]) < parseInt(y_vals[1])) {
        return 1;
      }
      else{
        if (parseInt(x_vals[2]) > parseInt(y_vals[2])) {
          return -1;
        }
        else if (parseInt(x_vals[2]) < parseInt(y_vals[2])) {
          return 1;
        }
        else return 0;
      }
    }
  });
  return sorted.join("\n");
}


//better version
function semSort (versionsString) {
  return versionsString.split("\n")
  .sort(function (a,b)) {
    var as = a.split('.'),
    bs = b.split('.')

    return (bs[0] - as[0]) ||
            (bs[1] - as[1]) ||
            (bs[2] - as[2])
          }).join("\n")
  }
}