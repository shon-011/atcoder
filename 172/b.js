function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    input = input.trim().split("\n")
    const a = input[0].split('')
    const b = input[1].split('')
    let count = 0

    for ( let i = 0 ; i < a.length ; i++) {
        a[i] === b[i] ? undefined : count++
    }
    
    console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
