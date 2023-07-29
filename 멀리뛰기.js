//통과
// 피보나치수 문제라는 것을 기억할 것
// 문제에서 리턴값 % 1234567을 요구한 것도 int자료구조 특성 상, 피보나치수 처리 시 int가 처리할 수 있는 숫자범위를 넘어가게 되므로 제시한 조건
//>> 피보나치수를 계산한 다음에 나올 수를 1234567로 나눈 나머지 = 각 연산을 수행할 때마다 1234567로 나누는 것과 동일

function solution(n) {
    let arr = [1,2];
    let next_num;
    let first;
    let second;
    
    if (n === 1 || n===2) {
        return n
    }else {
        for (let i = 2; i <= n-1; i ++) {
            first = arr[i-2];
            second = arr[i-1];

            // int 범위 내에서 처리하기 위해 각 연산을 수행할 때마다 1234567을 나눔
            next_num = (first + second)%1234567;

            arr.push(next_num);
            first = second;
            second = next_num;
        }
        return arr.at(-1)
    }
    
}

console.log(solution(4))