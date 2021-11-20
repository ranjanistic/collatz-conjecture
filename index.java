
/**
 * Collatz conjecture
 * 
 * @author Priyanshu Ranjan (ranjanistic)
*/

import java.util.*;

class Collatz {
    private static Vector<Vector<Integer>> ranges = new Vector<Vector<Integer>>();

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the integral limit: ");
        int limit = scanner.nextInt();

        ranges.add(new Vector<Integer>());
        for (int i = 1; i <= limit; i++) {
            ranges.add(new Vector<Integer>());
            resolve(i);
        }
        Boolean failed = false;
        for (int r = 1; r < ranges.size(); r++) {
            if (ranges.get(r).get(ranges.get(r).size() - 1) != 1) {
                failed = true;
                System.out.println("Failed at " + String.valueOf(r) + ": " + String.valueOf(ranges.get(r)));
            }
        }

        if (!failed) {
            System.out.println("No keys disproving conjecture found.");
        }
        Integer maxsteps = 0;
        Integer maxpos = 0;
        Integer highest = 0;
        Integer highestpos = 0;
        Integer rangesize = ranges.size();
        for (Integer r = 1; r < rangesize; r++) {
            Integer rangersize = ranges.get(r).size();
            if (rangersize > maxsteps) {
                maxsteps = rangersize;
                maxpos = r;
            }
            for (int i = 0; i < rangersize; i++) {
                if (ranges.get(r).get(i) > highest) {
                    highest = ranges.get(r).get(i);
                    highestpos = r;
                }
            }
        }
        System.out.println("Max steps " + String.valueOf(maxsteps) + " at " + String.valueOf(maxpos));

        System.out.println("Highest step " + String.valueOf(highest) + " at " + String.valueOf(highestpos));

        System.out.print("Print ranges? (y/n): ");
        String yn = scanner.next();
        
        if (yn.equals("y") || yn.equals("Y")){
            for (int r = 1; r < ranges.size(); r++) {
                System.out.print(r+": ");
                System.out.println(ranges.get(r));
            }
        }
        scanner.close();
    }

    public static int res(int n, int init) {
        if(n < init){
            ranges.get(init).addAll(ranges.get(n));
            return 1;
        }
        int x = 0;
        if (n % 2 == 0) {
            x = n / 2;
        } else {
            x = 3 * n + 1;
        }
        ranges.get(init).add(x);
        if (x == 1) {
            return x;
        } else {
            return res(x, init);
        }
    }

    public static int resolve(int n) {
        return res(n, n);
    }
}