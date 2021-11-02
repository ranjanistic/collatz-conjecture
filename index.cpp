#include <iostream>

using namespace std;

int resolve(int);

int res(int);
// int res(int num, int &ranges[][], int count) {
//     int x = num % 2 != 0 ? 3 * num + 1 : num / 2;
//     ranges[num][count] = x;
//     return x == 1 ? 1 : res(x, ranges, count+1);
// };
// int resolve(int n, int &ranges[][]) {
//     return res(n, ranges, 0);
// };

int main(){
    int limit;
    cin >> limit;
    // int ranges = new int[limit][100000];
    // for (int i = 1; i <= limit; i++) {
    //     ranges[i][0] = i;
    //     resolve(i);
    // }
    return 0;
}
