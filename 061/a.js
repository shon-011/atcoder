function Main(input) {
    n = input.split("\n")[0].split(" ").map(Number); 
    console.log(n[2] >= n[0] && n[2] <= n[1] ? 'Yes' : 'No');
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
