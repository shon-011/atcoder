function Main(input) {
    input1 = input.split("\n")[0].split(" "); 
    
    console.log(input1 == 1 ?  0 : 1);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
