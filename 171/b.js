function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    nk = input.trim().split("\n")[0].split(' ').map(Number)

    function cfunc (a,b){
        return a - b
    }
    p = input.trim().split("\n")[1].split(' ').map(Number).sort(cfunc)
    let sum = 0
    
    for(let i = 0 ; i < nk[1] ; i++) {
        sum += p.shift()
    }
    
    console.log(sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));