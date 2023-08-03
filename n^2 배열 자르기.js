/* 
- 시간초과
- 10의 7승까지 n이 제시되므로, 배열을 돌리기 보다는 수식으로 풀기(시간복잡도 고려)


function solution(n,left, right) {
    let first_arr = [];

    for (let i = 0; i <= n-1; i++) {
        let second_arr = [];
        let push_num = i+1;

        for (let j = 0; j <= n-1; j++) {
            
            if (j < push_num) {
                second_arr.push(push_num);
            } else {
                push_num += 1
                second_arr.push(push_num);
            }
        }
        first_arr.push(second_arr);
    }
    // reduce() 활용을 많이 해볼 것
    // 2차원 배열 > 1차원으로 만들기 위해, acc를 배열에 먼저 배열에 복사 (복사하는 것으로 원본 배열 변경 시 같이 변경 x)
    // 그 뒤로 cur를 배열에 계속해서 복사하여 1차원 배열로 만듬 
    let answer_arr = first_arr.reduce((acc,cur)=>{
        return [...acc, ...cur]
    })
    
    return answer_arr.slice(left, right+1)
}

- 시간 초과
- 시간 복잡도가 너무 커서, 1차원 배열로 바로 진입해도 런타임 에러가 나는 것 같음
- 시간 복잡도가 클 경우, 배열보다는 수식으로 접근하기

function solution(n, left, right) {
    let arr = [];
    let cnt = 1;

    while (cnt <= n) {
        for (let i = 0; i<=n-1; i++) {
            if (i < cnt) {
                arr.push(cnt);
            } else {
                arr.push(i+1);
            }
        }
        cnt += 1;
    }
    return arr.slice(left, right+1)
}

*/

// 통과
// 시간복잡도가 클 때는 배열보다는 수식으로 풀 것
// (x,y) 좌표값 = x 좌표 & y 좌표 중 큰 값 + 1
// ex) (1,2) = 3 / (2,0) = 3

// 규칙을 캐치해보쟈 ㅠㅠ
function solution(n, left, right) {
    let arr = [];
    let x;
    let y;
    
    while ( left <= right ) {
        if (left < n) {
            x = 0;
            y = left
        } else {
            x = Math.floor(left/n);
            y = left%n;
        }

        let max_num = Math.max(x,y);
        arr.push(max_num + 1)
        left += 1;
    }
    return arr

}

console.log(solution(4,7,14))