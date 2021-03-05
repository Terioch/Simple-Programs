// Program that finds the Nth term in the fibonacci sequence
class Fibonacci {
  constructor() {
    console.log(this.iterativeFib(7));
    console.log(this.recursiveFib(5));
  }

  // Iterative Fibonacci
  iterativeFib(n: number) {
    if (n == 0 || n == 1) return n;
    else if (n == 2) return 1;
    
    let prev = 1;
    let curr = prev;
    let next: number;

    for (let i = 3; i <= n; ++i) {
      next = curr + prev;
      prev = curr;
      curr = next;
    }

    return next;
  }

  // Recursive Fibonacci
  recursiveFib(n: number) {
    if (n == 0 || n == 1) return n;
    else if (n == 2) return 1;
    else return this.recursiveFib(n - 1) + this.recursiveFib(n - 2);
  }
}

const fibonacci = new Fibonacci();