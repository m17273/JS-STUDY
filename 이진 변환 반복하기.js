//성공
// 0값만을 찾는 for을 통해 전체 문자열 길이에서 0의 갯수만 빼줘도 될 듯

function solution(s){
    var num = 0;
    var cnt = 0;
    var temp;

    var recur_fn = (str) => {
        cnt +=1;
        var new_str = ''

        for (let i = 0; i<=str.length - 1; i++){
            if (str[i] == '1') {
                new_str += str[i];
            } else {
                num += 1;
            }
        }
        return [new_str, new_str.length];
    }

    var temp = recur_fn(s);

    while (temp[0] !== '1') {
        var next_num = temp[1].toString(2);

        // 재귀함수에서 return 해준 값을 재귀함수에 넣어줄라고 하는 temp에 반드시 재할당 하는거 잊지말긔!!
        temp = recur_fn(next_num);
    }
    return [cnt, num]
}

console.log(solution("1111111"))