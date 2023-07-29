//통과
// 배열의 가장 작은 값 * 가장 큰 값 순으로 누적해야 최소값 도출 가능

function solution(arr1, arr2){
    var answer = 0;
    var arr1_sort = arr1.sort((a,b)=>a-b);
    var arr2_sort = arr2.sort((a,b)=>b-a);

    for (let i = 0; i<=arr1_sort.length-1; i++){
        answer += arr1_sort[i]*arr2_sort[i];
    }
    return answer;
}

console.log(solution([1,2], [3,4]))