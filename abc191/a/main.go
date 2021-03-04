package main

import "fmt"

func main(){
	var v, t, s, d int 
	fmt.Scan(&v, &t, &s, &d)

	if d < v*t || v*s < d {
		fmt.Println("Yes")
		return
	} 
	fmt.Println("No")

}