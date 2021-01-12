// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n")[0].split(" ");
    let  A = input[0];
    let  B = input[1];

    let a = Number(A[0]) + Number(A[1]) + Number(A[2])
    let b = Number(B[0]) + Number(B[1]) + Number(B[2])

	//出力
	console.log(Math.max(a,b));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
