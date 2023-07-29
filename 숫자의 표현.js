function solution(n){
    var start_num = Math.floor(n/2);
    var cnt = 1;

    for (let i = start_num; i>=1; i--){
        var temp = i;

        for (let j = i+1; j <= n; j++){
            //if문 안에서 조건 확인 후 더하지 말고 우선 더해서 더한 값을 조건이랑 맞춰보기
            // 그래야지 총합이 n보다 작은 경우에 대한 조건을 쓰지 않아 시간 단축 가능
            temp += j;

            //만약 다 맞는 것 같은데 시간부족이 뜬다면 느슨한 판단이 아닌, 확실한 판단 가능한 연산자 사용
            // === 로 요소의 타입까지 한번에 확인해서 시간을 세이브하는 것 필요!
            if (temp === n){
                cnt += 1;
                break
            } else if (temp > n){
                break
            } 
            }
        
        }
        return cnt;
    }
console.log(solution(15))