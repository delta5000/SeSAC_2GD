// 함수 선언문
// function 함수이름(매개변수){
// 함수내용;
// }
// 함수 이름은 카멜케이스
function helloworld1() {
  console.log("hello world1");
}

helloworld1();

function helloworld2() {
  return "hello world2";
}

/* return
- 함수의 반환값 함수 내부 코드의 최종값
- 리턴 이후의 어쩌고는 실행되지 않음 */
console.log(helloworld2());

function add(num1, num2) {
  console.log(num1 + num2);
}

function add2(num1, num2) {
  return num1 + num2;
}

add(5, 10);

console.log(add2(2, 3));

const helloworld3 = function () {
  console.log("helloworld3");
};

helloworld3();
//함수 표현식은 선언 이후에 호출해줘야 한다.

const helloworld4 = () => {
  return "helloworld4";
};

console.log(helloworld4());

//매개변수가 있는 함수

function sayhello1(name) {
  return "안녕하세요" + name + "님";
}

console.log(sayhello1("안냐링"));

function sayhello2(text, name2) {
  console.log(`${text}, ${name2}님`);
}
//따옴표 아니고 벡틱임 물결무늬에 있는거
sayhello2("안녕", "수빈");

function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(3, 7));

function square(num3) {
  console.log(num3 * num3);
}

square(5);
