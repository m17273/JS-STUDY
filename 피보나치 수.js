/*
문제에서 1234567로 나눈 나머지를 정답으로 내놓으라는 것은 문제를 꼰 것이 아니라 int 자료형의 범위 내에 항상 값이 있을 수 있도록 한 배려이며, 
자료형의 크기에 제한이 있는 언어를 쓸 경우 (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용해서 
매번 계산 결과에 1234567으로 나눈 나머지를 대신 넣는 것으로 int 범위 내에 항상 값이 존재함을 보장할 수 있다.

>> 피보나치수를 계산한 다음에 나올 수를 1234567로 나눈 나머지 = 각 연산을 수행할 때마다 1234567로 나누는 것과 동일
>>int라는 자료형은 -2,147,483,648 ~ 2,147,483,647까지의 값만을 표현하지만, 피보나치 수는 정말 빠르게 증가하므로
  이미 일정 범위 이상의 결과값 자체가 수의 범위를 넘겨서 나머지를 구할 수 없었던 것!

*/

//내가 푼 버전
// int 자료형의 범위 내에 존재하기 위해 각 연산을 수행할 때마다 1234567로 나누기!
function solution(n){
    var arr = [0,1];

    for (let i = 2; i<=n; i++){
        var next_num = arr[i-1] + arr[i-2];
        arr.push(next_num%1234567);
    }
    return arr[n]
}

console.log(solution(2));


// 예시 답안(DP 활용)
function solution(n){
    var first = 0;
    var second = 1;
    var next_num;

    for (let i = 2; i<=n; i++){
        next_num = (first + second)%1234567;
        first = second;
        second = next_num;
    }
    return next_num
}

console.log(solution(4))