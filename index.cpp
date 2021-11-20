/*
    Collatz conjecture

    @author Priyanshu Ranjan (ranjanistic)
*/
#include <iostream>
#include <vector>

using namespace std;

int resolve(int);
int res(int);

vector<vector<int>> ranges;

int res(int num, int init) {
    if(num < init){
        ranges[init].insert(ranges[init].end(), ranges[num].begin(), ranges[num].end());
        return 1;
    }
    int x = 0;
    if (num % 2 != 0) {
        x = num * 3 + 1;
    }
    else {
        x = num / 2;
    }
    ranges[init].push_back(x);
    if (x == 1) {
        return x;
    } else {
        return res(x, init);
    }
}

int resolve(int n) {
    return res(n, n);
}

int main() {
    int limit;
    cout << "Enter positive integral limit: ";
    cin >> limit;

    ranges.push_back(vector<int>());
    for (int i = 1; i <= limit; i++) {
        ranges.push_back(vector<int>());
        resolve(i);
    }

    bool failed = false;
    for (int r = 1; r < ranges.size(); r++) {
        if (ranges[r][ranges[r].size() - 1] != 1) {
            failed = true;
            cout << "Failed at " << r << ": ";
            for (int i = 0; i < ranges[r].size(); i++) {
                cout << ranges[r][i];
            }
            cout << endl;
        }
    }

    if (!failed) {
        cout << "No keys disproving conjecture found." << endl;
    }
    int maxsteps = 0;
    int maxpos = 0;
    int highest = 0;
    int highestpos = 0;
    int rangesize = ranges.size();
    for (int r = 1; r < rangesize; r++) {
        if (ranges[r].size() > maxsteps) {
            maxsteps = ranges[r].size();
            maxpos = r;
        }
        for (int i = 0; i < ranges[r].size(); i++) {
            if (ranges[r][i] > highest) {
                highest = ranges[r][i];
                highestpos = r;
            }
        }
    }
    cout << "Max steps " << maxsteps << " at " << maxpos << endl;
    cout << "Highest step " << highest << " at " << highestpos << endl;

    char yn;
    cout << "Print ranges? (y/n): ";
    cin >> yn;
    if (yn == 'y' || yn == 'Y'){
        for (int r = 1; r < ranges.size(); r++) {
            cout << r << ": [";
            for (int i = 0; i < ranges[r].size(); i++) {
                cout << ranges[r][i] << ",";
            }
            cout << "]" <<endl;
        }
    }
    return 0;
}
