// 최대공약수: 유클리드 호제법
// 최소공배수: 두 수의 곱 / 최대공약수

//통과
//여러 수의 최대공약수 & 최소공배수를 구하기 위해서는 배열 내 임의의 두 수에 대한 최대공약수 & 최소공배수를 구한 후 해당 값을 배열의 다음값과 비교하여 계속해서 구해주면 됨

function solution(arr) {
    let first;
    let second;
    let third;
    let multiple;

    while (arr.length !== 1) {
        arr.sort((a,b)=> {
            return b-a;
        });

        first = arr[0];
        second = arr[1];
        
        multiple = first*second;

        while (first%second !== 0){
            if(first%second !== 0){
                third = first%second
                first = second;
                second = third
            }
        }
        arr.splice(0,2,multiple/second);
    }
    return arr[0]
}

console.log(solution(([1,2,3])))