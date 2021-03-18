package main
import (
	"fmt"
)

func main() {
	var a,b int 
	fmt.Scanf("%d %d", &a, &b)
	x := a+b
	y := a-b
	z := a*b
	var ans int
	if x >= y && x >= z {ans = x}
	if y >= x && y >= z {ans = y}
	if z >= x && z >= y {ans = z}
	
	fmt.Printf("%d\n", ans)
}