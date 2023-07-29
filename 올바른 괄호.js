/* 아래 코드는 일부 예제 틀림 + 효율성2 통과 못함
>>split()사용으로 배열을 만들지 않고 문자열에 직접 접근 시 시간 많이 단축됨
>>그래도 효울성 2는 통과를 못함

function solution(s){
    var checker = 0;

    if (s[0]==')' || s.length <= 1){
        return false;
    } else {
        for (let i = 0; i<=s.length-1; i++){
            if (s[i] == ')') {
                checker += 1;
            } else {
                checker += -1;
            }
        }
    };
        return checker == 0 ? true : false;
}
*/




// 프로그래머스 통과
/*
    1. stack구조를 활용한 문제풀이 방법
    2. 빈 배열을 만든 후, map으로 배열을 돌면서 요소가 
        '(' >> 빈 배열에 push
        ')' >> 배열의 맨 뒤 요소가 '(' 라면 완전한 괄호가 된 것이므로 맨 뒤 요소를 pop
    
    3. 어짜피 완전한 괄호가 되지 않으면 배열의 길이는 0이 될 수 없으므로 결국은 false를 반환하게 됨
    !! 다양한 자료 구조를 활용해 볼 것 > 특히 시간 초과가 뜨면 더욱 더 !!
    */
function solution(s){
    var checker = [];

    //얘는 안해도 무방(하니까 시간초과 뜸)
    /*if (s[0]===')'){
        return false;
    }
    */
    s.split('').map(x=>{
        if (x===')' && checker[checker.length-1] === '(') {
            checker.pop();
        } else {
            checker.push(x)
        }
    })

    return checker.length == 0
}

console.log(solution('(()())'))