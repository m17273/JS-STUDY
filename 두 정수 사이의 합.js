function solution(a,b){
    var num = 0;

    if (a>b){
        var i = b;

        while(i<=a){
            num += i;
            i++;
        }
    } else{
        var i = a;

        while(i<=b){
            num += i;
            i++
        }
    }
    return num;
}

console.log(solution(3,5))