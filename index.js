// require node js readline module
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

input.question("Enter limit: ", (limit) => {
    for (let x = 1; x <= limit; x++) {
        ranges[x] = [];
        resolve(x)
    }
    input.close();
    console.log("Keys exploiting rule: " , Object.keys(ranges).filter((key) => ranges[key][ranges[key].length - 1] !== 1));
    process.exit();
});
