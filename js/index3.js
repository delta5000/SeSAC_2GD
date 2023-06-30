// var은 재선언이 가능.. 예상 못한 값 반환할 수 있음.
// let 재선언 불가능 재할당 가능.
// const 재선언 불가능 재할당 불가능. 선언과 동(시에 초기화 해야함

var name = "홍길동";
var name = "나비";

console.log(name);

let q = 10;
q - 5;
// 이런다고 5가 되지 않음

q = q - 5;
//이래야함
console.log(q);

//연산자

//산술연산자 : + - * /
//대입연산자 : =
//비교연산자 : == === != !== < > <= >=
//논리연산자 : !(not) &&(and) ||(or)

console.log(1 == 1);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 != 1);
console.log(1 != "1");
