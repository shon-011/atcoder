function Main(input) {
    NX = input.split("\n")[0].split(" "); 
    const n = NX[0]
    let x = NX[1]
    const list = []

    for(let i=1; i <= n; i++) {
        m = Number(input.split("\n")[i].split(" ")[0]); 
        list.push(m)
        x -= m
    }

    min = Math.min(...list)

    ad = parseInt(x / min ) 
    console.log(ad + list.length);

    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
