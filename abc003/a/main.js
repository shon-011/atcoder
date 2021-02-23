function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    input = Number(input.trim().split("\n")[0])
    console.log(10000 * (input+1) / 2);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
