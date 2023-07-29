function solution(s){
    var arr = s.split(' ');
    arr.sort((a,b)=> {
        return b-a;
    })
    var max = arr[arr.length-1];
    var min = arr[0];

    return max + " " + min;
    
}

console.log(solution('-1 -2 -3 -4'))