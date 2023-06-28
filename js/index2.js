console.log("안녕하세요");
// 확인 버튼이 있는 알림창이 나타남 3형제
// alert("알라트와요 확인버튼이 있사와요");
// confirm("컨펌이와요 확인 취소가 있어요");
// prompt("프롬프트와요 뭔갈 적을 수 있어요");

// 1.문자열, string
let myname = "수빈";
let mycity = "Seoul";

console.log(myname);

console.log("제 이름은", myname, mycity, "에 살고있지요");
console.log("내이름은" + myname + "이고용,사는곳은" + mycity + "애용");
console.log(`내 이름은${myname} 사는곳은 ${mycity}`);

let myinfo = "내이름은" + myname + "이고용,사는곳은" + mycity + "애용";
let myinfo2 = `내 이름은${myname} 사는곳은 ${mycity}`;

console.log(myinfo);
console.log(myinfo2);
// 쉼표를 이용해서 문자열을 연결하는 것은 안됩니다.

//2. Number
//연산 가능
let no1 = 100;
let no2 = 3.14;

console.log(no1 + no2);

console.log(myname + no1); //숫자가 문자열취급되어 연결.
console.log(myname - no1); //NaN Not a number

//3. Boolean

let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

//4.undefined

let undef;
console.log(undef);

//5.Array 배열
let fruits = ["orenge", "kiwi", "apple", "mango"];

let fruits2 = new Array("orenge", "kiwi", "mango", "apple");

console.log(fruits);
console.log(fruits2);

console.log(fruits[2]);

// 2차원 배열, 배열 안에 배열이 있는 형태
let kr = [
  ["가", "나", "다"],
  ["거", "너", "더"],
  ["고", "노", "도"],
];

console.log(kr[2][2]);

const letters = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters[3][0],
  letters[1][3],
  letters[0][1],
  letters[0][3],
  letters[2][2]
);

console.log(
  letters[3][0] + letters[1][3] + letters[0][1] + letters[0][3] + letters[2][2]
);

// 6.object
// 배열은 순서가 있는 반면에
// 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근

let cat = {
  name: "skittles",
  age: "1",
  iscute: true,
};

console.log(cat);
console.log(cat.name);
console.log(cat.age);
console.log(cat.iscute);

let me = {
  name: "Subin",
  age: "28",
  city: "seoul",
};

let und;
console.log(typeof "문자");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof NaN);
console.log(typeof und);
console.log(typeof function () {});

// let likeNo = prompt("가장 좋아하는 숫자는?");
// likeNo = Number(likeNo);
// console.log(likeNo + 10);

// 형변환
// 문자열

let str1 = true;
let str2 = 123;
let str3 = null;

console.log(typeof String(str1));
console.log(typeof str1.toString());

let mathScore = "77";
let engScore = "88";

mathScore = Number(mathScore);
engScore = Number(engScore);

let avgScore = mathScore + engScore;

prompt(avgScore / 2);

let number = "number";
let string = "string";

string = String(string);
number = Number(number);

console.log(typeof number + " isn`t " + typeof string + " data type.");

let a = {
  name: 1,
  type: 2,
};

console.log(
  "typeof 를 Array 이나 null에 사용하면," +
    typeof a +
    "결과를 얻을 수 있습니다."
);
