function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    input = input.trim().split("\n")
    n = input[0].split(' ').map(Number)
    h = input[1].split(' ').map(Number)
    x = 0
    for(let i = 0; i < n[0] ; i++ ) {
        h[i] >= n[1] ? x++ : undefined
    }
    
    console.log(x);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
