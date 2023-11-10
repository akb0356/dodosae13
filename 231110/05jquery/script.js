$(function () {
  $("#wrap p:hidden").css({
    display: "block",
    background: "#ff0",
  });
  // zone1 에서 선택된 애의 val 값을 찾아서 콘솔창에 추가해줘?
  let z1 = $("#zone1 :selected").val();
  console.log(z1);

  let z2 = $("#zone2 :checked").val();
  console.log(z2);

  let z3 = $("#zone3 :checked").val();
  console.log(z3);
});
