package main

import "fmt"

func main(){
	var n int 
	fmt.Scan(&n)

	if n == 3 || n == 5 || n == 7 {
		fmt.Println("YES")
	}else {
		fmt.Println("NO")
	}
}