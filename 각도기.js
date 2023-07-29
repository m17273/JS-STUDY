function solution(angle) {
    //js에서는 '비교숫자<숫자<비교숫자'와 같은 연산 불가
    //&& 연산 사용하면 동일한 값 도출 가능
    //a&&b : a가 true면, b값 자체를 반환
    //       a가 false면, b값 판단 안하고 a값 자체를 반환
    if (0<angle && angle<90){
        return 1;
    } else if (angle==90){
        return 2;
    } else if (90<angle && angle<180){
        return 3;
    } else{
        return 4
    }
}

console.log(solution(91))
