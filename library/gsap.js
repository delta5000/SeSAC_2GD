let tl1 = gsap.timeline();
tl1
  .to(".cloud1", {
    scale: 1.5,
    opacity: 0,
    xPercent: 200,
  })
  .to(".cloud2", {
    scale: 2,
    opacity: 0,
    xPercent: -100,
  })
  .to(".sun", {
    scale: 1.2,
    opacity: 0.5,
    xPercent: -600,
    yPercent: 300, //왼쪽 아래로 떨어지는 동작
  });

ScrollTrigger.create({
  animation: tl1, //타임라인 이름 들어가면 됨
  trigger: ".section1", //기준점
  start: "top top",
  end: "bottom top",
  scrub: true,
  //   markers: true,
  pin: true,
});

let tl2 = gsap.timeline();

tl2.from(".div", {
  rotation: -720,
  opacity: 0,
  scale: 0,
});

ScrollTrigger.create({
  animation: tl2,
  trigger: ".section2",
  start: "top top",
  scrub: 2,
  pin: true,
  markers: true,
  end: "bottom 100%",
  end: "+=3000",
});
