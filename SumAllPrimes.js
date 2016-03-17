function sumPrimes(num) {

  var x = 3, i = 2;
  var prmArr = [2];
  var isPrime = '';
  
  for (; x <= num; x += 2) {
    var j = Math.sqrt(x);
    isPrime = true;
    for (i = 2; i <= j; i++) {
      if (x % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prmArr.push(x);
    }

  }

  var ans = prmArr.reduce( (a, b) => a + b );

  return ans;
}

sumPrimes(10);
