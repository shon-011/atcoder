function Main(input) {
    input = input.split("\n")[0]
    console.log(input[input.length-1]==="s" ? input+'es': input+"s");
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
