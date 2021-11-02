// collatz conjecture function

func resolve(n int) int {
	func res(num int) => {
		int x = 0
		if (num % 2 !== 0) {
			x = num * 3 + 1
		} else {
			x = num / 2
		}
        ranges[n].push(x);
        return 1 if (x == 1) else res(x);
    };
    return res(n);
}

main() {
	var n int
	fmt.Scanf("%d", &n)
	fmt.Println(resolve(n))
}
