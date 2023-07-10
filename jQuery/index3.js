console.log(window);
console.log($(window));

console.log(document);
console.log($(document));

//mouse event
//click (제일 많이 쓸)

$(".p-msg").on("click", function () {
  $(".p-msg").css("color", "blue");
});

$(".p-msg").click(function () {
  $(".p-msg").css("color", "red");
});

$(".num").click(function () {
  //   $(".num").css("color", "yellow");
  $(this).css("color", "tomato");
});

//JS..for문으로 접근 할 수 있다.

const nums = document.querySelectorAll(".num");
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", () => {
    console.log(nums[i]);
  });
}

//mouseover
// $(".numbers").on("mouseover", () => {
//   $(".numbers").css("background-color", "skyblue");
//   $(".numbers").append("<div>mouseover로 추가된 자식</div>");
// });

// $(".numbers").mouseover(() => {
//   $(".numbers").css("background-color", "pink");
//   $(".numbers").append("<div>mouseover로 추가된 자식</div>");
// });

//hover()

$(".div-hover").hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);

$("#form").submit(function (e) {
  e.preventDefault();
  const todo = $("#todo").val();
  console, log(todo);
});
