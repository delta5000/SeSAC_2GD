//an==문자열 관련 메소드

/*
length : 공백포함 문자열의 길이 알려줌

toUpperCase

toLowerCase

trim : 양쪽 공백 업애기

slice() : 괄호에는 인텍스 번호가 들어가면 됨.
슬라이드 된 부분부터 끝까지 출력함
숫자 두개 넣으면 앞번호 포함부터 뒷번호 전까지 뽑아줌.
마이너스 숫자도 가능. 맨 뒷숫자부터 시작함.

replace :첫번째만 바꿈

replaceAll

repeat

indexOf() : 글자가 몇번째인지 찾아줌

charAt() : 번호를 넣으면 그 번호의 문자열을 반환함

split() :내부 문자열을 배열로 변경.

*/

let str1 = "   strawberry Moon   ";

console.log(str1[4]);
console.log(str1.length);

let srt2 = str1.trim();

console.log("대문자로 변경" + srt2.toUpperCase());
console.log("소문자로 변경" + srt2.toLowerCase());

let fruit = "applemango";
console.log(fruit.indexOf("z")); //없는 문자는 -1로 반환

let msg = "바람이 불어온다";

console.log(msg.replace("불어", "프랑스어"));

console.log("mew".repeat(5));

let date = "2023.07.03";

console.log(date.split("."));
console.log(date.split(""));

//배열 관련 메소드
/*
push : 배열 끝에 추가. 기존 배열 완전 변경됨

pop : 배열 끝 요소 제거. 마찬가지로 기존 배열 변경됨

shift : 배열 앞에 제거. "

unshift : 배열 앞에 추가 "

includes : 해당 배열에 지정한 요소가 있는지 확인하는 메소드

length : 배열 길이 확인

indexOf 

reverce : 배열 순서 뒤집음

join : 배열을 문자열로 변경. ()안의 문자열을 기준으로 합쳐짐.

*/

let arr1 = [1, 2, 3, 4, 5];
arr1.push(6);

console.log(arr1);

arr1.pop();
console.log(arr1);

let arr3 = [6, 7, 8, 9, 10];
let alphabets = ["a", "b", "c", "d", "e", "f"];

for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

//for each (function 요소,인덱스,배열)

//배열.foreach (value,index,array)=>{})

alphabets.forEach((value, index, array) => {
  console.log(array);
});

//map, filter, find

//map = 배열 내의 모든 원소에 대해 함수 호출한 결과를 모아서 새로운 배열 반환
//filter = 조건을 만족하는 요소들을 배열로 반환
//find = 조건을 만족하는 요소 중 첫번째 값 반환
//매개변수로 익명함수 (함수표현식, 화살표함수)
//배열 자체를 변경시켜주지 않기 때문에 새로운 변수에 저장해서 사용

//map
// [배열].map(function(v, i, a){배열 인덱스 어레이 관련 식})

let arr4 = [1, 2, 3, 4, 5];
arr4.map(function (num) {
  return num * 2;
});

console.log(arr4);

const multiArr = arr4.map(function (el) {
  return el * 2;
});
console.log(multiArr);

//filter

arr2 = ["dog", "cat", "doggo", "kitty"];

let c = arr2.filter(function (el) {
  return el.length > 4;
});
console.log(c);

//find

let findrs1 = multiArr.find(function (el) {
  return el > 7;
});
console.log(findrs1);

//화살표 함수 : 중괄호 필요없음. 중괄호 없을때 리턴 필요없음.
let findrs = multiArr.find((el) => el > 7);
console.log(findrs);

let arr4a = arr4.map((el) => el * 2);
console.log(arr4a);

let arr2a = arr2.filter((el) => el.length > 4);
console.log(arr2a);

//for in

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

for (let area in areaNum) {
  console.log(area); //오브젝트의 키가 문자열로 출력됨
  //   areaNum.Seoul
  //   areaNum["Seoul"] 대괄호 접근법
  console.log(areaNum[area]);
}
