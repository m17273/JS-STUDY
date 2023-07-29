//통과
//최소의 값을 구하기 위해서는 최대의 수를 우선 먼저 넣어보는 것이 문제 해결에 유리!!

function solution(k, tangerine) {
    
    // 객체를 만들어 배열 내 중복값을 카운트
    let checker = {};

    for (let i = 0; i<=tangerine.length-1; i++) {
        checker[tangerine[i]] = ( checker[tangerine[i]] || 0 ) + 1
    }

    // 객체를 오름차순 하기 위해서는 객체를 돌며 빈 배열에 [key, value] 값으로 push해주기
    let checker_arr = [];
    
    for (let key in checker) {
        checker_arr.push([key, checker[key]])
    }
    
    // 배열에 넣어진 값을 sort
    // [key, value]의 순이므로, value값을 기준으로 오름차순 하여 배열 내 재정렬
    checker_arr.sort((a,b)=> {
        return b[1] - a[1];    
    })

    // 일단 k는 1부터이므로 한 종류의 과일은 무조건 고르는 것으로 간주하여 cnt는 1부터 시작
    let cnt = 1;

    // checker.arr를 돌며 가장 큰 값부터 k에서 빼기 시작
    // 만약에 1종류 크기의 귤을 모두 다 뺐는데도 k가 여전히 크다면 다른 크기의 귤을 추가로 빼야 하므로 cnt += 1
    for (let i = 0; i<=checker_arr.length -1; i++){
        k -= checker_arr[i][1];

        if (k > 0) {
            cnt += 1;
        } 
    }
    // 만약 뺀 값이 0보다 작거나 같다면 한 크기의 귤로도 모두 채울 수 있다는 의미이므로 cnt는 더하지 않고 그대로 리턴
    return cnt;
}

console.log(solution(2,[1,1,1,1,2,2,2,3]))