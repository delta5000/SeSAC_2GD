//스크롤! 기반 애니메이션
//스크롤트리거 (스크롤 위치에 따라서 동작)

//start:요소시작점 스크롤시작점 (스크롤이 요소시작점에 만날 때 애니메이션이 시작된다)
//end:요소끝점 스크롤끝점 으로 구성

gsap.from(".box1", {
  scrollTrigger: {
    trigger: ".box1",
    start: "top 80%",
    end: "100% 50%",
    scrub: 1,
    // markers: true,
  },
  y: 800,
  opacity: 0,
});

gsap.to(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    start: "top top",
    scrub: 1,
    // markers: true,
  },
  rotate: 720,
  x: 500,
});

//타임라인과 함꼐 써보기

const tl = gsap.timeline();
//스크롤트리거를 내부에 작성
// tl.to(".circle1", {
//   scrollTrigger: {
//     trigger: "section", //스크롤기준정
//     //section에 top이 닿으면 애니메이션 시작
//     Animation: tl, //타임라인
//     start: "top top",
//     end: "bottom 50%", // 섹션의 바텀과 전체화면 높이의 50%와 만난다면 애니메이션이 끝난다
//     scrub: true, //애니메이션이 끝나도 다시 돌아갈 수 있다.
//   },
//   scale: 2,
//   opacity: 0.2,
// }).to(".circle2", {
//   scrollTrigger: {
//     trigger: "section", //스크롤기준정
//     //section에 top이 닿으면 애니메이션 시작
//     Animation: tl, //타임라인
//     start: "top top",
//     end: "bottom 50%", // 섹션의 바텀과 전체화면 높이의 50%와 만난다면 애니메이션이 끝난다
//     scrub: true,
//   },
//   scale:2,
//   opacity:0.3
// });
//타임 라인이 동작하지 않습니다..
//타임라인과 2개 이상의 요소에 애니메이션을 적용시킬 떄는
//creat() 메소드가 반드시 필요하다..

tl.to(".circle1", {
  scale: 2,
  opacity: 0.2,
})
  .to(".circle2", {
    scale: 2,
    opacity: 0.2,
  })
  .to(".circle3", {
    scale: 2,
    opacity: 0.2,
  });

ScrollTrigger.create({
  trigger: "section", //스크롤기준점
  //section에 top이 닿으면 애니메이션 시작
  animation: tl, //타임라인
  start: "top top",
  end: "bottom 50%", // 섹션의 바텀과 전체화면 높이의 50%와 만난다면 애니메이션이 끝난다
  scrub: true,
  markers: true,
  pin: true, //스크롤 동작동안 위치 고정여부 결정
});
