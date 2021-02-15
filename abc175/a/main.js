function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    r = input.trim()
    n = input.trim().split("\n")[0].split('')
    let x = 0
    
    for( let i = 0; i<3; i++){
        if(n[i]==='R') x++
    }
    
    if(r=='RSR'){
        x=1
    }
    
    console.log(x);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
