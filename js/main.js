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
});