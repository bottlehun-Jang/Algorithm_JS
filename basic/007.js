// 영어단어 복구
// 현수의 컴퓨터가 바이러스에 걸려 영어단어가 뛰어쓰기와 대소문자가 혼합되어 표현된다.
// 예를 들면 아름다운 이란 뜻을 가지고 있는 beautiful 단어가 “bE au T I fu L” 과 같이
// 컴퓨터에 표시되고 있습니다. 위와 같이 에러로 표시되는 영어단어를 원래의 표현대로 공백을
// 제거하고 소문자화 시켜 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 바이러스에 걸린 영어단어가 주어진다. 바이러스에 걸린 영어단어의 길이(공백포함)는
// 100을 넘지 않는다. 문자사이의 공백은 연속적으로 존재할 수 있습니다. 입력은 알파벳과 공
// 백만 주어집니다.
// ▣ 출력설명
// 첫 줄에 소문자로 된 정상적인 영어단어를 출력한다.

// 입력 : bE au T I fu L
// 출력 : beautiful

let input = "bE au T I fu L"

String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

// Type 1_ prototype을 이용하여 method 추가.
let input2 = input.replaceAll(' ', '');
input2 = input2.toLowerCase();

// Type 2_ replace 정규식을 이용하여 조건 추가.
input = input.replace(/ /g, '');
input = input.toLowerCase();

console.log(input + '/' + input2);