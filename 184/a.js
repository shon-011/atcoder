function Main(input) {
    input1 = input.split("\n")[0].split(" "); //1行目
    input2 = input.split("\n")[1].split(" "); //2行目

    A = input1.map(Number)
    B = input2.map(Number)


    console.log( (A[0]* B[1]) - (A[1]*B[0]) );
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
