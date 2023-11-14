function solution(a) {
    let team1Sum = 0;
    let team2Sum = 0;

    let teamOne = true;
    for (let i = 0; i < a.length; i++) {
        if(teamOne) {
            team1Sum += a[i];
            teamOne = false;
        } else {
            team2Sum += a[i]
            teamOne = true;
        }

    }
    return [team1Sum, team2Sum];
}


console.log(solution([80]))