/**
 * Collatz conjecture
 *
 * @author Priyanshu Ranjan (ranjanistic)
 */

const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ranges = {};

const resolve = (n) => {

    const res = (num) => {
        if(num < n){
            if(ranges[num] && ranges[num].includes(1)){
                ranges[n] = ranges[n].concat(ranges[num])
                return 1;   
            }
        }
        const x = num % 2 !== 0 ? 3 * num + 1 : num / 2;
        ranges[n].push(x);
        return x === 1 ? 1 : res(x);
    };
    return res(n);
};

input.question("Enter positive integral limit: ", (limit) => {
    for (let x = 1; x <= limit; x++) {
        ranges[x] = [];
        resolve(x);
    }
    console.log(
        "Keys disproving conjecture: ",
        Object.keys(ranges).filter(
            (key) => ranges[key][ranges[key].length - 1] !== 1
        )
    );
    const lengthsMap = Object.keys(ranges).map((x) => ({
        [x]: ranges[x].length,
    }));
    const lengths = lengthsMap.map((x) => Object.values(x)[0]);
    const max = lengthsMap[lengths.indexOf(Math.max(...lengths))];

    const heightsMap = Object.keys(ranges).map((x) => ({
        [x]: Math.max(...ranges[x]),
    }));
    const heights = heightsMap.map((x) => Object.values(x)[0]);
    const highest = heightsMap[heights.indexOf(Math.max(...heights))];

    console.log("Max steps: ", max);
    console.log("Highest step: ", highest);
    
    input.question("View ranges? (Y/N) ", (yn) => {
        if (yn === "y" || yn === "Y") {
            console.log(ranges);
        }
        input.close();
        process.exit(0);
    });
});
