function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number); 
    let num = [n[0] * n[2], n[0] * n[3], n[1] * n[2], n[1] * n[3]]
    console.log(Math.max(...num));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
