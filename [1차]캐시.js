//통과


/* LRU 알고리즘: 페이지 교체 알고리즘. 사이즈 n인 배열에서 새로운 값을 넣으려고 하면 가장 오래된 값을 제거하고 새로운 값을 넣음
>> 타겟 배열에서 찾을 내용이 있다면 가장 최근으로 변경하고, 없다면 가장 오래된 요소를 삭제한 후 값을 삽입

예시 코드)
cache_size = 5
company_list = ['apple', 'samsung', 'dell', 'lg', 'dell', 'lg', 'dell', 'lenovo', 'asus', 'lenovo', 'apple']
cache = []

for company in company_list:
    if company in cache:
        cache.remove(company)
        cache.insert(len(company_list) - 1, company)
    else:
        if len(cache) >= cache_size:
            cache.pop(0)

        cache.append(company)

print(cache)

출력값)
['apple']
['apple', 'samsung']
['apple', 'samsung', 'dell']
['apple', 'samsung', 'dell', 'lg']
['apple', 'samsung', 'lg', 'dell']
['apple', 'samsung', 'dell', 'lg']
['apple', 'samsung', 'lg', 'dell']
['apple', 'samsung', 'lg', 'dell', 'lenovo']
['samsung', 'lg', 'dell', 'lenovo', 'asus']
['samsung', 'lg', 'dell', 'asus', 'lenovo']
['lg', 'dell', 'asus', 'lenovo', 'apple']
['lg', 'dell', 'asus', 'lenovo', 'apple']
 */


function solution(cacheSize, cities) {
    cities = cities.map(city => {
        return city.toUpperCase();
    });
    let cacheHit = 1;
    let cacheMiss = 5;
    let cnt = 0;
    let arr = [];

    for (let i = 0; i<=cities.length-1; i++) {
        
        // 캐쉬값이 0이라면 어떠한 값이 들어와도 cacheMiss이므로 예외처리가 필요
        if (cacheSize === 0) {
            return cities.length * cacheMiss
        } else {
                if (arr.length < cacheSize && !arr.includes(cities[i])) {
                    arr.push(cities[i]);
                    cnt += cacheMiss;
            } else {
                if (arr.includes(cities[i])) {
                    //만약 arr에 도시가 이미 있다면, filter()로 해당도시를 제외한 새로운 arr반환
                    //filter(): 콜백함수 실행 결과 true값을 새로운 배열로 반환(조건에 부합하는 값이 없을 시 빈 배열 반환)
                    arr = arr.filter((city)=> city !== cities[i])
                    arr.push(cities[i]);
                    cnt += cacheHit;
                } else {
                    arr.splice(0,1);
                    arr.push(cities[i]);
                    cnt += cacheMiss;
                }
            }
        }
        
    }
    return cnt

}

console.log(solution(0,['la', 'la']))