function Main(input) {
     a = Number(input.split("\n")[0].split(" ")); 
     b = input.split("\n")[1].split(" ").map(Number)
     x = input.split("\n")[2].split(" ")
    
    console.log(`${a + b[0] + b[1]} ${x}`);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
