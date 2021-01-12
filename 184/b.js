function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
    in1 = input.split("\n")[0].split(" ").map(Number);
    in2 = input.split("\n")[1].split("");

    let X = in1[1]

    for(let i =0 ; i < in1[0]; i++){
        if(in2[i]=="o"){
            X = X +1
        }else if(in2[i]=='x'){
            if(X!=0){
                X = X-1
            }
        }
    }
	console.log(X);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
