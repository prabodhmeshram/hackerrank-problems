// https://www.hackerrank.com/challenges/maximum-perimeter-triangle/problem


function maximumPerimeterTriangle(sticks) {
    const descSticks = sticks.sort((a, b) => b - a);
    const totalCombination = descSticks.length;

    let validTriangleArray = [];
    let counter = 2;

    // Iterate till 3rd last elements only
    for (let i = 0; i < totalCombination - 2; i++) {
        const maxSide = descSticks[i];
        for (let j = i + 1; j < totalCombination - 1; j++) {
            if (maxSide < descSticks[j] + descSticks[j + 1]) {
                validTriangleArray.push(`${maxSide},${descSticks[j]},${descSticks[j + 1]}`);
            }
        }
    }
    
    if(!validTriangleArray.length){
        return [-1];
    }

    return [...new Set(validTriangleArray)][0].split(",").map(p=> parseInt(p)).reverse();
}