function toMilitary (time) {
  if (time.substr(0,2) == "12" && time.substr(time.length -2) == "am" ){
    first = time.slice(2)
    hours = "00" + first
    hours = hours.substr(0,time.length -2)
    return hours
  }
  
  else if (time.substr(0,2) == "12" && time.substr(time.length -2) == "pm" ){
    hours = time.substr(0,time.length -2)
    return hours
  }
   
  else if (time.substr(time.length -2) == "am"){
    hours = time.substr(0,time.length -2)
    if (hours.length == 4) hours = "0" + hours
    return hours
  }
  
  else if (time.substr(time.length -2) == "pm"){
    hours = time.split(":")
    h = parseInt(hours[0]) + 12 + ":" + hours[1]
    h = h.substr(0,h.length -2)
    return h
  }
  else{
    return time
  } 
}