
function solution(arr) {
    if (arr.length == 1){
        return [-1];
    } else{
        // min()함수
        // 배열이 아니라 고유한 변수를 기대하므로 배열에서 찾고 싶을 땐 하기 방법으로 진행
        var arr_min = Math.min(...arr);

        // slice함수 & splice함수에 변수에 할당하면 변수값 = 반환값
        // slice의 반환값은 함수를 통해 제거된 요소(pop함수와 동일)
        // 함수에 함부로 함수명을 할당하지 않도록 조심할 것(반환값이 뭔지 알아보고 할당!)
        arr.splice(arr.indexOf(arr_min),1)

        return arr;
    }
}

console.log(solution([4,5,1]))