// 기존부터 from으로 변화

gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3,
  yoyo: true,
  ease: "linear",
  ease: "bounce.out",
});

const staggerAll = document.querySelectorAll(".stagger");
console.log(staggerAll);

// from, to의 타겟은 staggerAll이다
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 1.5,
  repeat: -1, //인피니트를 준 것 같이 된다
});
//stagger적용 시키면 배열의 순서대로 움직인다.

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
});

// 타임라인 사용
// 연속적인 애니메이션을 만들기 위해서 사용

let timeline = gsap.timeline();

//따로 쓰기
timeline.to(".skyblue", {
  x: 400,
  duration: 2,
});
timeline.to(
  ".gray",
  {
    x: 450,
    duration: 2,
  },
  "<" //이전동작과 똑같은 시간에 움직이기
);

timeline.to(
  ".yellow",
  {
    x: 500,
    duration: 2,
  },
  "+=5" //전체동작 끝나고 + 지연시간(초)
);

//타임라인에 이어서 쓰기
// timeline
//   .to(".skyblue", {
//     x: 400,
//     duration: 2,
//   })
//   .to(".gray", {
//     x: 450,
//     duration: 2,
//   })

//   .to(".yellow", {
//     x: 500,
//     duration: 2,
//   });

/*
to/from의 세 번째 매개변수
=같은 타임라인 내부에서 한 번에 동작하는 방법

2(숫자) : 전체 타임라인에 대해서 ~ 초 뒤에 시작한다는 의미
        (absolutely)

"<" : 이전 움직임과 동시에 시작
"+=2" : 마지막에 끝난 움직임보다 ~초 뒤에 시작하겠다.

*/

//스크롤! 기반 애니메이션
//스크롤트리거 (스크롤 위치에 따라서 동작)

//start:요소시작점 스크롤시작점 (스크롤이 요소시작점에 만날 때 애니메이션이 시작된다)
//end:요소끝점 스크롤끝점 으로 구성
