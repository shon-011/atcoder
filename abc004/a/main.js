function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    input = input.trim().split("\n")[0]
    console.log(input * 2);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
