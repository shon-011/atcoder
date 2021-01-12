function Main(input) {
    input = input.split("\n")[0].split(" "); //1行目
    
    num = input.map(Number);

    x = 2*num[0]+100 - num[1]
    console.log(x>0?x:0);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
