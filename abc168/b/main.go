package main
import (
	"fmt"
)

func main() {
	var n int
	var s string
	fmt.Scanf("%d\n%s", &n, &s)
	len := len(s)
	
	if len <= n {
		fmt.Println(s)
	} else {
		fmt.Println(s[:n] + "...")
	}
}