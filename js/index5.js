/*자바스크립트가 기본적으로 가지고 있는 객체
String, Number, Array, Date, Math, Object, ...


Date 객체
시간, 날짜정보를 얻을 때 사용*/

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); //0~11
console.log(now.getDate()); //1~31
console.log(now.getHours()); //0~23

console.log(now.getDay()); //0~6, 0(일요일)~6(토요일)

if (now.getDate() === 0 || now.getDate === 6) {
  console.log("주말");
} else console.log("평일");

const day = new Date().getDay();

console.log(day === 0 || day === 6 ? "주말" : "평일");

switch (day) {
  case 0:
  case 6:
    console.log("주말");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("평일");
    break;
}

let past = new Date(2020, 1, 20, 1, 1, 1);
//new Date(년, 월, 일, 시, 분, 초)
//시,분,초 설정 안하면 00시 00분 00초로 됨
console.log(past);

//math 객체
//수학적인 상수나 함수

console.log(Math.PI); // 파이
console.log(Math.E); //자연수 E
console.log(Math.SQRT2); //루트2

console.log(Math.max(100, -1, 30, 20, 5)); //최댓값 찾음
console.log(Math.min(100, -1, 30, 20, 5)); //최솟값 찾음

console.log(Math.ceil(5.155)); //올림
console.log(Math.floor(5.155)); //내림
console.log(Math.round(5.155)); //반올림

//난수 생성 -> random number
//0<= 난수 < 1
console.log(Math.random());

//0 < 10 정수값 출력
console.log(Math.floor(Math.random() * 10));

// 0 <= x <= 10

console.log(Math.round(Math.random() * 10));

// 20 <= x <= 22

//원래 랜덤은 0.111~9.111 20만들려면 곱하기 20
//20~22 수만 나오려면...

console.log(Math.floor(Math.random() * 3) + 20);

const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
