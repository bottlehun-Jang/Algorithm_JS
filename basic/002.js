// 자연수 A, B가 주어지면 A부터 B까지의 합을 수식과 함께 출력하세요.
// ▣ 입력설명
// 첫 줄에 자연수 A, B가 공백을 사이에 두고 차례대로 입력된다. (1<=A<B<=100)
// ▣ 출력설명
// 첫 줄에 더하는 수식과 함께 합을 출력합니다

// 입력 : 3, 7
// 출력 : 3 +4 +5 +6 +7 = 25 

const A = 3, B = 7;

const numberArr = [];
let sum = 0;

for (let i = A; i < B + 1; i++) {
    numberArr.push(`${i}`);
    sum += i;
}

let result = numberArr.join('+ ');
result += `= ${sum}`;

console.log(result);

// Array에 숫자 push하여 수식 정보 저장
// Array.join을 통해 수식 정보 가공 후 string 출력
// Templete String 으로 표현하여 가공된 수식 정보와 sum값을 string 출력.