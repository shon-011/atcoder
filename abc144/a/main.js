function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number)

    console.log( n[0] < 10 && n[1] < 10 ? n[0]*n[1] : -1 );
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
