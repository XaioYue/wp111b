function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  

  console.log(fibonacci(5)); 
  console.log(fibonacci(11)); 
  console.log(fibonacci(3));
  console.log(fibonacci(13)); 