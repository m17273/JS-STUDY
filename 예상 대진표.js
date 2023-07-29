// 통과
// a와 b가 이겼을 경우, 다음 게임에서 부여받는 게임 참가 순서는 '자신의 값 + 1'을 2로 나눈 몫
// 너무 어렵게 생각하지 말고, 전체를 그려서 그 속에서의 규칙을 찾아내려고 해볼 것 ㅠㅠ


function solution(n,a,b){
    var cnt = 0;

    while (a != b) {
        a = Math.floor((a+1)/2);
        b = Math.floor((b+1)/2);
        cnt += 1
    }
    return cnt;

}