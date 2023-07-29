function solution(numbers){
    var answer = []; 

    // for/in문은 프로퍼티 이름만 꺼내서 변수에 할당(=인덱스 숫자).
    // 프로퍼티값을 가져오려면 []안에 넣어서 가져와야 함.
    for (i in numbers){
        console.log(numbers[i]);
        answer.push((numbers[i]*2));
    }
    return answer;
}

console.log(solution([1,2,3,4,5]))