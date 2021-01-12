function Main(input) {
    input1 = input.split("\n")[0].split(" ").map(Number); //1行目

    console.log(Math.min(...input1));

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));