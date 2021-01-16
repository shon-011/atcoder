function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number);
    x = n[0]
    y = n[1]
    t = n[2]
    console.log(Math.ceil(x / y) *t);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
