// 통과
// 가로, 세로의 길이마다 노란색 카펫이 나오는 규칙이 존재
// 규칙을 미리 찾아낼 수 있으면 규칙을 찾아서 식을 세우자!
// 노란색 카펫의 규칙을 찾아서 (총 카펫 수 - 노란색 카펫 = 갈색 카펫)을 적용해 입력값과 동일한지 비교

function solution(brown, yellow){
        var yellow_cnt;
        var brown_cnt;
        var total;
        var i = 3;

    while(true){
        yellow_cnt = 0;

        for (let j = 3; j<= i; j++){
            total = i*j;
            yellow_cnt += i-2
            brown_cnt = total - yellow_cnt;

            if (yellow_cnt == yellow && brown_cnt == brown) {
                return [i,j]
            } 
        }
        i++
    }
}

console.log(solution(24,24))