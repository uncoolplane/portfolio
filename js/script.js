//I = 1
//II = 2
//III = 3
//IV = 4
//V = 5
//VI = 6
//VII = 7
//VIII = 8
//IX = 9
//X = 10

var romanArray = {
  I : 1,
  II : 2,
  III : 3,
  IV : 4,
  V : 5,
  VI : 6,
  VII : 7,
  VIII : 8,
  IX: 9,
  X: 10,
  XX: 20,
  XXX : 30,
  XL: 40,
  L: 50,
  LX: 60,
  LXX: 70,
  LXXX: 80,
  XC: 90,
  C: 100,
  CC: 200,
  CCC: 300,
  CD: 400,
  D: 500,
  DCC: 700,
  DCCC: 800,
  CM: 900
};

function arrayAdder(array) {
  var result = 0;
  for(var i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

function arrayMinus(array) {
  var result = array[array.length-1];
  for(var i = array.length-1; i >= 0; i--) {
    result -= arr[i];
  }
}

function Roman(rnum) {
  var map = {
    I: 1,
    V: 5,
    X: 10
  };

  var arr = rnum.split('');
  var numArray = arr.map(function(item) {
    return map[item]
  })

  if(numArray[numArray.length-1] === 1) {
    return arrayAdder(numArray);
  } else {
    return arrayMinus(numArray);
  }
}

Roman('V')
