//통과

//너무 어렵게 생각하지 말 것.
// for문을 돌면서 홀수이면 버리고, 짝수일때만 변수에 더해주면 끝!

function solution(n){
    var num = 0;
    for (let i = 1; i<=n; i++){
        if (i%2 != 0){
            continue
        } else {
            num += i
        }
    }
    return num;
}

console.log(solution(10))