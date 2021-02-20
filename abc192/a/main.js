function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    n = Number(input.trim().split("\n")[0])
    
    if (n%100==0) {
        console.log(100)
    } else {
        console.log(((parseInt(n/100)+1)*100)-n)
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
