function Main(input) {
    n = input.split("\n")[0].split(" ");

    let AC = 0;
    let WA = 0;
    let TLE = 0;
    let RE = 0;

    for(i=0; i<n; i++) {
        let a = input.split("\n")[i+1].split(" ");
        
        switch (a[0]) {
            case 'AC':
                AC += 1
                break;
            case 'WA':
                WA += 1 
                break
            case 'TLE' :
                TLE += 1
                break
            case 'RE' :
                RE += 1
                break
        }
    }

    console.log(`AC x ${AC}`);
    console.log(`WA x ${WA}`);
    console.log(`TLE x ${TLE}`);
    console.log(`RE x ${RE}`);
    
    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
