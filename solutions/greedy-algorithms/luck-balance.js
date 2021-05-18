// https://www.hackerrank.com/challenges/luck-balance/problem

function luckBalance(k, contests) {
    // Write your code here
    const totalContest = contests.length;
    let luckTotal = 0;
    let mustWin = []; 
    for(let i=0; i< totalContest; i++){
        if(!contests[i][1]){
            luckTotal += contests[i][0];
        }else{
            mustWin.push(contests[i][0]);
        }
    }
    const sortedMustWins = mustWin.sort((a,b)=> b-a);
    const mustWinLength = sortedMustWins.length;
    for(let j=0; j < mustWinLength; j++){
        if(j < k){
            luckTotal += sortedMustWins[j]; 
        }else{
            luckTotal -= sortedMustWins[j];
        }
    }
    return luckTotal;
}
