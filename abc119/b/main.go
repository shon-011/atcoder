package main

import (
	"fmt"
)

func main() {
	var n int
	var sum float64
	fmt.Scanf("%d", &n)

	for i := 0; i <= n; i++ {
		var x float64
		var u string
		fmt.Scanf("%f %s", &x,&u)

		if u == "JPY" {
			sum += x
		} else {
			sum += x * 380000.0
		}
	}
	
	fmt.Printf("%f\n", sum)
}