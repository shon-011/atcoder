function Main(input) {
    a = input.split("\n")[0].split(" ").map(Number)
   
   console.log( (a[0] * a[1]) % 2 === 0 ? 'Even' : 'Odd');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
