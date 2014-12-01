function parseQueryString (url) {
  if (url.indexOf('?') === -1){
    result = []
    return result
  }else{
  var x = url.split('?')[1];
  x = x.split('&');
  
  var v = [];
  
  x.forEach(function(y){
    var k = y.replace('%20', ' ');
    var c = k.split('=');
    v.push(c);
  })
  return v;
  }
}