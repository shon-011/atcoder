function Main(input) {
    I = input.split("\n")[0].split(" ").map(Number);
    m = I[0] / I[2]
    console.log(m > I[1] ? "No" : "Yes");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
