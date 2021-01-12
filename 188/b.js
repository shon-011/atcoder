function Main(input) {
    input1 = input.split("\n")[0].split(" ").map(Number); //1行目
    input2 = input.split("\n")[1].split(" ").map(Number);
    input3 = input.split("\n")[2].split(" ").map(Number);

    let X=0;
    for(let i=0; i<input1[0]; i++){
        X = X + input2[i] * input3[i]
    }
    console.log( X ===0? "Yes" : "No" );
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
