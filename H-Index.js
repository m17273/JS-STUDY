//통과

 
function solution(citations) {
    // citations를 오름차순 sort
    // 최대 인용된 횟수(배열의 마지막 값)를 h의 최대값으로 설정하기 위해서!
    citations.sort((a,b)=> {
        return a-b;
    })

    let arr = [];

    //0회부터 최대 인용 횟수까지 완전 탐색
    for (let h = 0; h <= citations.at(-1); h++){
        let cnt = 0;

    // 만약 h번 이상 인용한 논문의 갯수가 h보다 많거나 같을 때는 배열에 push
        for (let j = 0; j <= citations.length-1; j++){
            if (citations[j] >= h) {
                cnt += 1;
            }
        }
        if (cnt >= h) {
            arr. push(h);
        }
    }
    // 애초에 citations 배열을 오름차순 해뒀기 때문에, 배열 탐색이 끝나면 맨 뒷 값을 리턴해주면 됨
    return arr.at(-1);
}

console.log(solution([3,0,6,1,5]))