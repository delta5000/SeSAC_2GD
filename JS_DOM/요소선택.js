console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

console.log(document.getElementById("red"));
console.log(document.getElementById("green"));

console.log(document.getElementsByClassName("pink"));

console.log(document.getElementsByClassName("pink")[1]);

console.log(document.getElementsByTagName("div"));

console.log(document.getElementsByName("id"));

//querySelector 제일 많이 쓰게 될 것 같음
console.log(document.querySelector(".pink"));
//제일 먼저오는 핑크 클래스 하나만 출력함
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]'));

const divs = document.querySelectorAll("div");
console.log(divs);
const pinks = document.querySelectorAll(".pink");

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

for (let pink of pinks) {
  console.log(pink);
}
