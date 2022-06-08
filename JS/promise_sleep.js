/**
 * Write a function that return a promise that resolved
 * after a number of milliseconds
 */

function sleep(ms) {
    // put your code here
}

(async () => {
    console.time('test delay');
    await sleep(5000);
    console.timeEnd('test delay'); // expected about 5000ms
})()
