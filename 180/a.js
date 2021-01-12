function Main(input) {
    input = input.split("\n")[0].split(" ");
    n = input.map(Number)
    console.log(n[0]-n[1]+n[2]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
