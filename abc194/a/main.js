function Main(input) {
    // n = Number(input.split("\n")[0].split(" ")); 
    n = input.trim().split("\n")[0].split(' ').map(Number)

    kokei = n[0] + n[1]
    if(kokei >= 15 && n[1] >= 8 ) {
        console.log(1); //アイス
    } else if (kokei >= 10 && n[1] >= 3) {
        console.log(2); //アイスミルク
    }　else if(kokei >= 3) {
        console.log(3);
    } else {
        console.log(4);
    }


}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
