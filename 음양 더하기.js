function solution(absolutes, signs) {
    var answer = 0;
    

    //true, false는 문자열로 보면 안됨
    // boolean으로 봐서 따옴표 없이 기재
    for (let i = 0; i<=signs.length-1; i++){
        if (signs[i]==true){
            absolutes[i] = absolutes[i]+'';
        } else {
            absolutes[i] = '-' + absolutes[i];
        }
    }
    
    absolutes.forEach( x =>{
        answer += Number(x)
    })
    return answer
}

console.log(solution([4,7,12], [true, false, true]))