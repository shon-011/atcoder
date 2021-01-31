function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    n = input.trim().split("\n")[0].split(" ").map(Number)
    let a = n[0]
    let b = n[1]
    let c = n[2]
    
    if(a > b) {
        console.log("Takahashi")
    } else if(b > a) {
        console.log("Aoki")
    } else {
        if( c === 0 ) {
            console.log('Aoki')
        } else {
            console.log('Takahashi');
        }
    }


    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
