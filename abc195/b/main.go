package main
import (
	"fmt"
)

func main() {
	var a,b,w int
	fmt.Scanf("%d %d %d", &a, &b, &w)
	w *= 1000


	if w % b == 0 {
		fmt.Printf("%d %d\n", w/b, w/a )
	} else {
		fmt.Println("UNSATISFIABLE")
	}
}