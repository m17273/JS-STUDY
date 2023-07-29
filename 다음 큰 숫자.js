function solution(s){
    var num = s.toString(2);
    var num_cnt = 0;
    var temp;
    var next_num = s;

    for (let i = 0; i<=num.length-1; i++){
        if (num[i]==='1'){
            num_cnt += 1;
        }
    }

    var num_cnt_fn = (x) => {
        var new_num = x.toString(2);
        var new_num_cnt = 0;

        for (let i = 0; i<=new_num.length-1; i++){
            if (new_num[i] === '1'){
                    new_num_cnt += 1;
            }
        }
        return new_num_cnt;
    }

    while (num_cnt !== temp) {
        next_num += 1;
        temp = num_cnt_fn(next_num)
    }
    return next_num;
}

console.log(solution(15));