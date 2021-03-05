// Program that finds the Nth term in the fibonacci sequence
class Fibonacci {
  constructor() {
    console.log(this.iterativeFib(77));
    console.log(this.recursiveFib(5));
  }

  // Iterative Fibonacci
  iterativeFib(n: number) {
    if (n == 0 || n == 1) return n;
    else if (n == 2) return 1;
    
    let prevTmp = 1;
    let tmp = prevTmp;
    let nextTmp: number;

    for (let i = 3; i <= n; ++i) {
      nextTmp = tmp + prevTmp;
      prevTmp = tmp;
      tmp = nextTmp;
    }

    return nextTmp;
  }

  // Recursive Fibonacci
  recursiveFib(n: number) {
    if (n == 0 || n == 1) return n;
    else if (n == 2) return 1;
    else return this.recursiveFib(n - 1) + this.recursiveFib(n - 2);
  }
}

const fibonacci = new Fibonacci();