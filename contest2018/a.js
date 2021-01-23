function Main(input) {
    input = input.split("\n")[0].split(" ").map(Number); 
    // input = input.trim().split("\n")
    const a = input[0]
    const b = input[1]

    console.log(a+b==15?'+':a*b==15?'*':'x');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
