function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    input = input.trim().split("\n")[0]
    
    const up = input.toUpperCase()
    
    console.log( input === up ? 'A' : 'a' );
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
