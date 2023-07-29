function solution(x) {
    var num_str = x + ""
    var total = 0;
    
    var mapfn = (x) => Number(x);
    var newarr = num_str.split('').map(mapfn);
    
    //foreEach를 통해 배열 순회(for문으로 도는 것과 동일)
    // forEach 사용을 위해서는 익명함수 필요하며, ES6 화살표 함수를 통해 코드 단순화 가능
    newarr.forEach(x=>{
        total+=x;
    })

    return (x%total==0 ? true : false)

}

console.log(solution(10));