/**
 * Collatz conjecture
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
    const max = Object.keys(ranges).map((x) => ({ [x]: ranges[x].length }))[
        Object.keys(ranges)
            .map((x) => ({ [x]: ranges[x].length }))
            .map((x) => Object.values(x)[0])
            .indexOf(
                Math.max(
                    ...Object.keys(ranges)
                        .map((x) => ({ [x]: ranges[x].length }))
                        .map((x) => Object.values(x)[0])
                )
            )
    ];
    const highest = Object.keys(ranges).map((x) => ({
        [x]: Math.max(...ranges[x]),
    }))[
        Object.keys(ranges)
            .map((x) => ({ [x]: Math.max(...ranges[x]) }))
            .map((x) => Object.values(x)[0])
            .indexOf(
                Math.max(
                    ...Object.keys(ranges)
                        .map((x) => ({ [x]: Math.max(...ranges[x]) }))
                        .map((x) => Object.values(x)[0])
                )
            )
    ];
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
