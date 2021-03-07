function Main(input) {
    n = Number(input.split("\n")[0].split(" ")); 
    // input = input.trim().split("\n")
    a = []
    b = []
    for(let i = 1 ; i <= n; i++ ){
        x = input.trim().split("\n")[i].split(" ").map(Number)
        a.push(x[0])
        b.push(x[1])
    }

console.log(a,b)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
