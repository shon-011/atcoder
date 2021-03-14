package main
import (
	"fmt"
	"bufio"
	"os"
	"strings"
)

func main() {
	var n int
	fmt.Scanf("%d", &n)

	sc := bufio.NewScanner(os.Stdin)
	sc.Scan()
	a := sc.Text()

	sp := strings.Split(a, " ")

	fmt.Printf("%s\n", sp)
}