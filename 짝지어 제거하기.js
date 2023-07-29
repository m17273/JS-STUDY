/*
- 아래 방식대로 풀면 효율성 0점,,
- 스택 구조를 활용하여 리스트 맨 뒤에 값과 순회한 값을 비교하여 동일하면 리스트 내 동일값 pop

function solution(s){
    var s_arr = s.split('');
    var temp;

    var fn = (x) => {

        
        for (let i = 0; i<=x.length-2; i++){
            if (x[i] == x[i+1]){
                x.splice(i, 2)
                return x
            }
        }
        return 0;
  
    }
    temp = fn(s_arr);

    while(temp.length !==0 ) {
       if (temp.length === 1 || temp === 0){
        return 0
       } else {
        fn(temp)
       }
    }
    return 1
    
}
*/

//통과
// 스택을 활용해 빈 arr에 값을 넣어주며 동일한지 비교
// 쉽게 쉽게 생각하는 습관 필요!
function solution(s){

    var arr = [];

    for (let i = 0; i<=s.length-1; i++) {
        if (arr.length === 0 || s[i] != arr[arr.length-1]){
            arr.push(s[i]);
        } else if (s[i] == arr[arr.length-1]){
            arr.pop();
        }
    }
    return arr.length === 0 ? 1 : 0
}

console.log(solution('caabb'))