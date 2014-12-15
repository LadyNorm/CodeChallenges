function lookAndSay(n){
  function looking(num) {
      var look = /(1+|2+|3+)/g;
      function say(match, position) {
          return match.length.toString() + match.substring(0, 1);
      }

      return num.toString().replace(look, say);
  }

  storage = [];
  storage.push(0);
  storage.push(1);
  var num = 1;
  for (var i = 0; i < 30; i++) {
      num = looking(num);
      storage.push(num);
  }
  return storage[n];
}