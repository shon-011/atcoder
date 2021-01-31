function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number); 

    const x = n[0] * n[1]
    const y = n[2] * n[3]

    x===y ? console.log(x) : console.log(Math.max(x,y));
    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
