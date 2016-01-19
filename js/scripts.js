var triangle = function(a,b,c) {
  if ( a+b <= c || a+c <= b || b+c <= a ) {
    return false;
  } else if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || a === c) {
    return "isosceles";
  } else {
    return "scalene";
  }
};
