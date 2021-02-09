function Main(input) {
    n = Number(input.trim().split("\n")[0])
    console.log(3 * n**2);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
