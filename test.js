function Main(input) {
    input1 = input.split("\n")[0].split(" "); //1行目
    

    console.log(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
