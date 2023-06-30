// for 문
//for(변수 초기화; 조건식(어디까지 증가? 감소?);증감){
//    반복할 코드
//}
//세미클론으로 구분한다. 3가지 값이 필요하다. 처음엔 변수 초기화.

//index++; index = index+1; index+=1; 1씩 늘어난다.

for (let i = 0; i < 10; i = i + 1) {
  console.log("안녕");
}

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log(sum);

let fruits = ["사과", "망고", "수박", "바나나나"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i] + " 좋아");
}

//배열에 들어가 있는 넘버형 데이터의 합 구하기

let numArr = [100, 200, 99, 58, 77, 23];
let numsum = 0;

for (let i = 0; i < numArr.length; i++) {
  sum = sum + numArr[i];
}

console.log(sum);

// for (i = 0; i < 21; i = i + 2) {
//   console.log(i);
// }

// for (i = 0; i < 10000; i + 13) {
//   console.log(i);
// }

//10000까지의 숫자 중에서
//13의 배수면서 홀수인 숫자를 찾아봅시다.

//

// %13 해서 나머지가 0인걸 찾으면 될 것 같음..

for (let i = 0; i < 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

for (let i = 0; i < 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}
