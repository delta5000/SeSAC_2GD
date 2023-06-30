/* if 문

if(조건식){참일때 실행할 문장}*/

if (5 > 3) {
  console.log("얍");
}

// let number = Number(prompt("숫자를 입력해 주세요"));

// number;

// if (number > 10) {
//   alert("10보다 큽니다");
// } else {
//   alert("10이거나 10보다 작습니다");
// }

// if (number > 10) {
//   console.log("10보다 큽니다");
// } else if (number === 10) {
//   console.log("입력한 수가 10이네요!");
// } else {
//   console.log("10보다 작은 수 입니다."2);
// }

//성적산출프로그램 만들기
//0~100까지의 수 입력
//91~100 A
//81~90 B
//71~80 C
//61~70 D
//나머지는 F

// if (number >= 90) {
//   console.log("A");
// } else if (number >= 80) {
//   console.log("B");
// } else if (number >= 70) {
//   console.log("C");
// } else if (number >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

let age = 50;

if (age > 20) {
  console.log("성인");
} else if (age < 20) {
  console.log("고등학생");
} else if (age < 15) {
  console.log("중학생");
} else {
  console.log("음수값입니다.");
}

let a = 4;

// switch(값){
//     case 1:
//         //값이 1이라면 실행할 문장
//         break;

//     case 'abcd':
//         //값이 abcd라면 실행할 문장
//         break;

//     default:
//         //위의 case가 모두 일치하지 않을 때 실행할 문장
//         break;
// }

switch (a) {
  case 3:
    console.log("입력값이 4보다 작습니다.");
    break;

  case 4:
    console.log("입력값이 4입니다.");
    break;
  case 5:
    console.log("a는 5입니다.");
    break;
  default:
    console.log("3,4,5가 아니네요");
    break;
}

//if문으로 홀수 짝수

let num = 4;

if (num % 2 == 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}

//시간 받아오기

let now = new Date().getHours();

console.log(now);

if (now > 12) {
  console.log("오후");
} else {
  console.log("오전");
}

now > 12 ? console.log("오후") : console.log("오전");

console.log(true || false);
console.log(true && false);
console.log(!!false && 3 > 5);
console.log(!!false);
