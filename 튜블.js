//통과
function solution(s) {

    // 튜플 괄호를 취급하고 있지 않아, 하기 방법으로 변경
    // 이같은 replce() & split() 접근 방법도 잘 기억해 둘 것
    let s_arr = s.replace('{{','').replace('}}','').replace('}}','').split('},{');
    let result = [];


    s_arr.sort((a,b)=>{
        return a.length - b.length
    });

    s_arr = s_arr.map(el => el.split(','));

    s_arr.forEach(x => {
        for (let i = 0; i <= x.length -1; i ++) {
            if (!result.includes(Number(x[i]))) {
                result.push(Number(x[i]));
            }
        }
    })
    
    return result; 
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))