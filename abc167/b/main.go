package main
import (
	"fmt"
)

func main() {
	var a,b,c,k,ans int
	fmt.Scanf("%d %d %d %d", &a,&b,&c,&k)
	if a >= k {
		ans = k
	} else if k - (a+b) <= 0 {
		ans = a
	} else {
		k -= (a + b)
		ans = a-k
	}
	fmt.Println(ans)

}