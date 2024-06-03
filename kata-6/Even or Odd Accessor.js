const evenOrOdd = new Proxy(n => n % 2 ? "Odd" : "Even", { get: (f, k) => f(k) });
