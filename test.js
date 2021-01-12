function Main(input) {
    input1 = input.split("\n")[0].split(" "); 
    
    console.log(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
