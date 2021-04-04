package main
import (
	"fmt"
)

func main() {
	var a,b,c int
	fmt.Scanf("%d %d %d", &a,&b,&c)
	if a > b {
		fmt.Println("Takahashi")
	} else if b > a {
		fmt.Println("Aoki")
	} else {
		switch c {
			case 0:
				fmt.Println("Aoki")
			default:
				fmt.Println("Takahashi")
		}
	}
}