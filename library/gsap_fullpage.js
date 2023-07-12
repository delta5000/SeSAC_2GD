const slide = gsap.timeline();

slide
  //   .from(".red", {
  //     xPercent: -100,
  //   })
  .from(".orenge", {
    yPercent: 100,
  })
  .from(".yellow", {
    xPercent: 100,
  })
  .from(".green", {
    yPercent: -100,
  });

ScrollTrigger.create({
  animation: slide,
  trigger: "main",
  markers: true,
  start: "top top",
  pin: true,
  scrub: 2,
  end: "+=4000", //스크롤 길이 설정
});
