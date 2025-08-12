window.addEventListener("load", function () {
  // nav에 올렸을때
  const nav = document.querySelector(".gnb");
  const h_bg = document.querySelector(".h_bg");
  nav.addEventListener("mouseenter", function () {
    h_bg.style.height = "200px";
  });
  //   nav에서 마우스를 뺐을 때
  nav.addEventListener("mouseleave", function () {
    h_bg.style.height = "0px";
  });

  // 햄버거 누르면 메뉴 들어오기
  const hamburger = this.document.querySelector(".hamburger");
  const mobilemenu = this.document.querySelector(".mobile_menu");
  const xicon = this.document.querySelector(".x_icon");
  hamburger.addEventListener("click", function () {
    mobilemenu.classList.add("active");
    document.body.style.overflow = mobilemenu.classList.contains("active") ? "hidden" : "";
  });
  xicon.addEventListener("click", function () {
    mobilemenu.classList.remove("active");
    document.body.style.overflow = "";
  });
});
