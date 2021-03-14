package main
import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scanf("%d", &n)
	var count int = 1
	
	if n <= 999 {	
		fmt.Printf("%d\n", 0)
	} else {
		for i := 999; i<= n; i++ {
			hoge := int(math.Pow10(i))
			if i  {
			
			count += n - hoge
			}
		}
	}
	fmt.Println(count)
}