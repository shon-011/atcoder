function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    n = Number(input.trim().split("\n"))
    
    console.log(n >= 30 ? "Yes" : "No");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
