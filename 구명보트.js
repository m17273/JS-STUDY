/* 
- 통과
- 그러나 모두 시간 초과
ㄴ 2중 for문으로 인해서일 듯
function solution(people,limit) {

    people.sort((a,b)=> {
        return a-b
    })

    var checker = Array(people.length).fill(0);
    var cnt = 0;

    for (let i = 0; i<=people.length-1; i++){
        
        if (checker[i] !== 1) {
            for(let j = people.length-1; j>i; j--) {
                if (people[i] + people[j] <= limit && checker[j] !== 1){
                    checker[j] = 1;
                    break
                } 
            }
            checker[i] = 1;
            cnt += 1;
        }
    
        
    }
    return cnt;
}

- TC 통과
- 시간초과
>> 아무래도 splice()에서 시간을 많이 잡아먹는 것 같음

function solution(people, limit) {

    var cnt = 0;

    people.sort((a,b)=> {
        return a-b;
    })

    while (people.length > 0) {
        target = people.pop();
        cnt += 1;
        for (let i = 0; i<= people.length-1; i++){
            if (people[i] + target <= limit) {
                
                // splice(n,m,z): 자르고자 하는 시작 인덱스 n,m개까지,잘린 부분을 z로 치환(1개 이상 가능)
                // 삭제되어 있는 값을 포함하는 배열 반환 & 원본 배열에도 변경이 가해짐
                
                // slice(n,m): 시작 인덱스 n, 종료 인덱스 m
                // 삭제되어 있는 값을 포함하는 배열 반환 & 원본 배열은 그대로 유지
                people.splice(i,1);
                
                break
            }
        }

    }
    return cnt;

}
*/

//통과
// for문도 시간 초과 & splice도 시간초과 뜸
// 따라서 target에 인덱스를 저장해두고 시작 인덱스를 늘려가는 방식
// 보트에 2명이 타면 맨 뒤에 값이 pop되면서 결국 [target 인덱스 = people배열의 길이 -1] 점을 while의 조건으로 설정
function solution(people, limit) {

    var target = 0;
    var cnt = 0;

    people.sort((a,b)=> {
        return b-a;
    })

    while (target <= people.length-1) {
        if(people[target] + people[people.length-1] > limit){
            cnt += 1;
            target += 1;
        } else {
            cnt += 1;
            people.pop();
            target += 1
        }
    }   
    return cnt;

}

console.log(solution([50,70,30,50,80], 100))