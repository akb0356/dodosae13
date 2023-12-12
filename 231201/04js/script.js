// const cbA = document.querySelector("#cbA");
// let checkedA = cbA.checked;
// const cbB = document.querySelector("#cbB");
// let checkedB = cbA.checked;
// const cbC = document.querySelector("#cbC");
// let checkedC = cbA.checked;

// console.log("checkedA 값", checkedA);
// console.log("checkedB 값", checkedB);
// console.log("checkedC 값", checkedC);
const cbA = document.querySelector("#cbA");
const log = document.querySelector(".log");

cbA.addEventListener("change", (e) => {
  const value = e.target.checked;
  document.querySelector(".log").innerText = log;
  if (value) {
    log = `체크되었습니다.`
  } else {
    log = `해제되었습니다.`
  }
});
