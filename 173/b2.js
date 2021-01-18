function Main(input) {
    input = input.trim().split("\n")
    const n = Number(input[0])

    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    for(i=0; i<n; i++) {
        if(input[i+1]=='AC'){ 
            a++ 
        }else if(input[i+1]=='WA'){
            b++ 
        }else if(input[i+1]=='TLE'){
            c++ 
        }else {
            d++ 
        }
    }

    console.log(`AC x ${a}`);
    console.log(`WA x ${b}`);
    console.log(`TLE x ${c}`);
    console.log(`RE x ${d}`);
    
    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
