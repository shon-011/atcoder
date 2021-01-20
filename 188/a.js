function Main(input) {
    // input = input.split("\n")[0].split(" "); 
    n = input.trim().split("\n")[0].split(' ')
    let a = n[0]
    let b = n[1]
    let x = ''

    if(Math.abs(a-b) < 3) {
        x = "Yes"
    }else{x="No"}
    console.log(x);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
