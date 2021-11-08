
/**
 * Collatz conjecture
 * @author Priyanshu Ranjan (ranjanistic)
 */

import java.util.*;

class Collatz {
    public void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int limit = scanner.nextInt();

        for (int i = 1; i <= limit; i++) {
            this.resolve(i);
        }
        System.out.println("count");

        scanner.close();

    }

    public int res(int n, int init) {
        int x = 0;
        if (n % 2 == 0) {
            x = n / 2;
        } else {
            x = 3 * n + 1;
        }
        if (x == 1) {
            return x;
        } else {
            return this.res(x, init);
        }
    }

    public int resolve(int n) {
        return this.res(n, n);
    }
}