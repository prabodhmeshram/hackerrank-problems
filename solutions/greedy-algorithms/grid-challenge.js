// https://www.hackerrank.com/challenges/grid-challenge/problem
function gridChallenge(grid) {
    // Write your code here
    const sortedList = grid.map(g=> g.split("").sort());
    
    const listLength = sortedList.length;
    if(listLength === 1) return "YES"
    for(let i=0; i<listLength; i++ ){
        // let notSorted = false;
        for(let j=1; j<listLength; j++){
            if(sortedList[j][i] < sortedList[j-1][i]){
                return "NO"
            }
        }
    }
    return "YES";
}