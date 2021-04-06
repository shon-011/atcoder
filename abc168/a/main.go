package main

import (
	"fmt"
	"strings"
	"strconv"
)

func main() {
	var n string
	fmt.Scanf("%s", &n)
	num := strings.Split(n,"")

	end := num[len(num) - 1]
	var i int
	i, _ = strconv.Atoi(end)

	if i==0 || i==1 || i==6 || i==8 {
		fmt.Println("pon")
	} else if i==3 {
		fmt.Println("bon")
	} else {
		fmt.Println("hon")
	}
}