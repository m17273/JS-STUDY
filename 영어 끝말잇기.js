// 18번

function solution(n, words) {
    var result = {}
    // 객체에 값을 넣을 때는 중괄호에 바로 넣으면 안됨(배열의 개념이 아님)
    // 따라서 프로퍼티 값을 먼저 읽은 후 할당하고자 하는 수를 대입해야 됨!!!!
    result[words[0]] = 1
   
    var cnt = 1;
    var num = 1;

    for (let i = 1; i <= words.length-1; i++){
        
        if (num >= n) {
            num = 0;
            cnt += 1
        } 

        var before = words[i-1];
        num += 1;

        // result 객체에 프로퍼티값을 추가하며 중복값 판단
        // result를 미리 선언하여 중복값을 미리 찾아두면 중복 문자열이 들어왔을 때 해당 문자를 먼저 말한 사람이 탈락하게 됨
        // 이를 방지하기 위해 그때그때 객체에 넣어 중복값을 판단

        result[words[i]] = (result[words[i]] || 0) + 1

        if(words[i][0] != before[before.length-1] || result[words[i]] > 1) {
            return [num, cnt]
        } 
    }
    if (num*cnt === words.length){
        return [0,0]
    } else {
        return [num, cnt]
    }
    
}

console.log(solution(3 ,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))