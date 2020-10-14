// 자연수 N이 주어지면 자연수 N의 진약수의 합을 수식과 함께 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어집니다. (3<N<=100)
// ▣ 출력설명
// 첫 줄에 더하는 수식과 함께 합을 출력합니다

// 입력 : 20
// 출력 : 1 + 2 + 4 + 5 + 10 = 22

let N = 20;
let properDivisorArr = [];
for (let i = 1; i < N; i++) {
    if (N % i === 0) {
        properDivisorArr.push(i);
    }
}

let resultNumber = properDivisorArr.reduce((prev, curr) => {
    return prev += curr;
}, 0)

let result = properDivisorArr.join(' + ') + ` = ${resultNumber}`;

console.log(result)
