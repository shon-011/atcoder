package main

import (
	"fmt"
	"math"
)

func pow(x, y int) int {
	return int(math.Pow(float64(x), float64(y)))
}

func main() {
	var n, x, y,tmp int
	ans := "NG"
	fmt.Scanf("%d\n%d %d", &n, &x, &y)

	for i := 1; tmp < y; i++ {
		tmp = n * i
		if tmp >= x && tmp <= y || n == 1 {
			ans = "OK"
			break
		}
	}
	fmt.Println(ans)

}