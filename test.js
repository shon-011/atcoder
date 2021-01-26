function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    input = input.trim().split("\n")
    
    console.log(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
