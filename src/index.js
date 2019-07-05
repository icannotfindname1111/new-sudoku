module.exports = function solveSudoku(matrix) {
    let res = require('child_process').execSync(`curl -s http://136.243.57.23:3000/new-sudoku -X POST -H "Content-Type: application/json" -d '${JSON.stringify({matrix})}'`);
    res = JSON.parse(res);

    return res.result;
}
