const toggleBtn = document.querySelector(".menu-toggle-btn");

const navigation = document.querySelector(".nav");

toggleBtn.addEventListener("click", () => {
  console.log("hi");
  navigation.classList.toggle("active");
});

// 제대로 적용이 되었나 확인하는 키워드
// console.log(toggleBtn);
