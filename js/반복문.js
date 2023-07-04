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

<<<<<<< HEAD
for (i = 0; i < 10000; i + 1) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
=======
// for (let i = 0; i < 10000; i++) {
//   if (i % 13 === 0 && i % 2 === 1) {
//     console.log(i);
//   }
// }

//2중포문(포문안에 포문넣기) 구구단 만들기.

for (let i = 2; i < 10; i++) {
  console.log(`------${i}단-----------`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//while 문 작성
let n1 = 1; //while 내부에서 사용할 변수의 초기화작업
while (n1 <= 5) {
  console.log(n1);
  n1++;
}

let n2 = 10;
while (n2 >= 6) {
  console.log(n2);
  n2--;
}

//while 과 if를 사용해서 1~10까지의 짝수 출력

let n3 = 1;
while (n3 < 11) {
  if (n3 % 2 === 0) {
    console.log(n3);
  }
  n3++;
}

let n4 = 1;
while (true) {
  console.log(n4);
  n4++;
  if (n4 === 11) {
    break;
>>>>>>> d32e853a212841fc496586080fe1a148229f150e
  }
}

//confirm
//확인 -> 트루반환
//취소 -> 거짓반환
// let n5 = 0;
// while (confirm("계속진행?")) {
//   n5++;
//   alert(n5 + "번째 alert");
// }

//continue
//현재의 반복을 멈추고 다음 반복으로 넘어감
//break
//반복문에서 반복을 멈추고 즉시 탈출
// 1~10 홀수의 합 구하기

let sum2 = 0;
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum2 = sum2 + i;
}
console.log(sum2);

//0~100숫자중에서 2또는 5의 배수 총합 구하기

//for문으로
let sum3 = 0;
for (let no7 = 0; no7 < 101; no7++) {
  if (no7 % 2 === 0 || no7 % 5 === 0) {
    sum3 = sum3 + no7;
  }
}
console.log(sum3 + "은 총합");

let sum4 = 0;
let n8 = 0;
while (n8 < 101) {
  n8++;
  if (n8 % 2 === 0 || n8 % 5 === 0) {
    sum4 = sum4 + n8;
  }
}
console.log(sum4);
