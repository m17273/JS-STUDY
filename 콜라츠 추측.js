var cnt = 0;
var temp

function fn(num){
    cnt += 1;
    return num%2==0 ? num/2 : (num*3)+1;
}

function solution(num){
    if (num == 1) {
        return 0;
    } else {
        var temp = num;

        while (cnt <= 500){
            temp = fn(temp);

            if (temp != 1){
                continue;
            } else {
                return cnt
            }
        }
        return -1;
    }
}

console.log(solution(1))