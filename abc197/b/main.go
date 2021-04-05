package main
import (
	"fmt"
)

func main() {
	var H, W, X, Y int
	fmt.Scanf("%d %d %d %d", &H, &W, &X, &Y)
	
	for i:=0; i<H; i++ {
		var a,b,c,d string
		fmt.Scanf("%s%s%s%s", &a,&b,&c,&d)
		fmt.Println(a,b,c,d)
	}

	fmt.Printf("%d\n", X)
}