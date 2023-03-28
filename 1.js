function isPrime(n) {
    if (n < 5) {
      return false;
    }
    for (let i = 5; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(5)); // true
  console.log(isPrime(11)); // true
  console.log(isPrime(3)); // false
  console.log(isPrime(13)); // true
  console.log(isPrime(67)); // false
  

