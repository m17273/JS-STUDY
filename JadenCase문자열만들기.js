// []를 활용해서 문자열 가져올 때는 런타임에러가 남ㅠ
// charAt() 활용해서 가져오면 정상적으로 작동
// 아마도 내가 모르는 범위를 넘어가는 인덱스가 있어서 그러는 듯..
function solution(s){
    var answer = '';
    var arr = s.split(' ');
    
    // 범위를 넘어가는 인덱스 기재 시
    //[] : undefined반환
    //charAt[]: ''(빈문자열) 반환
    var temp = arr.map(x=>x.charAt(0).toUpperCase()+x.slice(1).toLowerCase())
    
    // 화살표 함수 사용 시, 콜백 함수의 실행문이 한줄이면 return 생략 가능
    // return 쓰면 중괄호도 포함되어야 함
    // return 안쓰면 중괄호 제외
    answer = temp.join(' ');
    return answer;
}