// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/
'use strict';

function minimumAbsoluteDifference(arr) {
    // Write your code here

    const sortedArr = arr.sort();
    let minDiff = Math.abs(sortedArr[1] - sortedArr[0]);
    const totalNum = sortedArr.length;
    for(let i=2; i<totalNum; i++){
        minDiff = Math.min(Math.abs(sortedArr[i] - sortedArr[i-1]), minDiff);
    }
    return minDiff;
}
