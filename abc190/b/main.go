package main
import (
	"fmt"
)

func main() {
	var n,s,d int
	ans := "No"
	fmt.Scanf("%d %d %d", &n,&s,&d)
	for i:=0; i<=s; i++ {
		var x,y int
		fmt.Scanf("%d %d",&x,&y)
		if x >= s || y <= d {
			continue
		} else {
			ans = "Yes"
		}
	}
	fmt.Println(ans)
}