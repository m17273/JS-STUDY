//통과
// 2개씩 짝을 지어서 뭔가를 확인해야 하는 상황이 있다면 큐.스택 구조를 먼저 떠올려 볼 것

function solution(s){
    let new_s = s.split('');
    let sample = {'}' : '{', ']' : '[', ')' :'('}

    
    let cnt = 0;
    let answer = 0;
// 모두 닫는/여는 괄호만 들어왔을 때는 arr길이가 항상 0
// 그러나 이는 올바를 괄호가 아닌, 괄호의 짝이 없어 arr에 담기지 않는 상황
// 해당 예시를 걸러내기 위해, arr에서 짝이 맞아 pop되면 arr_checker도 += 1
// arr내에 뭔가가 들어갔다 나오면 arr_checker도 0이 아니므로 모두 닫는/여는 괄호만의 경우 걸러낼 수 있음
    let arr_checker = 0;

    while (cnt <=new_s.length-1){

        let arr = [];

        for(let i = 0; i<=new_s.length-1; i++){
            if (new_s[i] === "}" || new_s[i] === "]" || new_s[i] === ")") {
                if (arr.length !== 0 && arr.at(-1) === sample[new_s[i]]) {
                    arr_checker += 1;
                    arr.pop();
                }
            } else {
                arr.push(new_s[i]);
            }
        }

        //정답으로 인정되기 위해서는 arr에 실제 문자가 들어갔다 모두 pop되서 빈 배열이 되어야함
        // 따라서 arr_checker도 0이 아닌지 함께 조건에 포함
        if (arr.length === 0 && arr_checker != 0) {
            answer += 1;
        }

        let temp = new_s.shift();
        new_s.push(temp);
        cnt += 1
    }
    return answer;
}
console.log(solution("[)(]"))