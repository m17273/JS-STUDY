// 앞에서부터 칸을 계산하면 고려해야할 상황이 너무 많이 생김
// 뒤에서부터 생각해보기(내가 최종적으로 도착을 한 상황에서 어떻게 왔는가를 고려해보기)
// n이 짝수이면 어짜피 순간이동이 가능하므로 2로 나눈 값을 n에 할당
// n이 홀수이면 무조건 1칸 이동을 해야하므로, 한칸 앞으로 가서(-1) 순간이동 진행(cnt +=1)

function solution(n) {
    let answer = 0;

    while (n !== 0) {
        if (n%2 ===0) {
            n /=2;
        } else {
            n -= 1;
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(5000))