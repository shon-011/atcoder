package main
import (
	"fmt"
	"strings"
)

func main() {
	var n int
	fmt.Scanf("%d", &n)

	ans := 1
	var slime string
	fmt.Scanf("%s", &slime)

	hoge := strings.Split(slime, "")

	for i := 0 ; i < n-1 ; i++ {
		if hoge[i] != hoge[i+1] {
			ans++
		}

	}
	

	fmt.Printf("%d\n", ans)
}