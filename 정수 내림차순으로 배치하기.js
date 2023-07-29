var temp;
var num_string;
var newarr;

function solution(n){
    // 숫자를 유사배열객체인 문자열로 변경
    num_string = String(n);

    // split함수 
    // 구분자를 기준으로 잘라진 문자열을 배열에 담는 함수
    newarr = num_string.split('');

    for(let i = 0; i<newarr.length; i++){
        for(let j = i+1; j<newarr.length;j++){
            if (newarr[i]<newarr[j]){
                temp = newarr[i];
                newarr[i] = newarr[j];
                newarr[j] = temp;
            };
        }
    }
    // join함수
    // 배열의 요소들을 연결하여 하나의 문자열로 만드는 함수
    // 구분값이 명시 안하면 쉼표로 연결
    var answer = newarr.join('');

    //parseInt함수 > 입력받은 문자열을 실제 숫자값으로 바꾸어 반환
    return parseInt(answer);
};

console.log(solution(118372))