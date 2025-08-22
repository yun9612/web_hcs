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

  // 배너 스와이프
  const visualSwiper = new Swiper(".visualSwiper", {
    autoplay: {
      delay: 2200,
      disableOnInteraction: false,
    },
    loop: true,
  });

  // 메뉴 스와이프
  const menuSwiper = new Swiper(".menuSwiper", {
    slidesPerView: 1.5, //보여지는 갯수(모바일일 때)
    spaceBetween: 20, //css에서 gap주는게 아님
    loop: true,
    breakpoints: {
      590: { slidesPerView: 2.5 },
      768: { slidesPerView: 3.5 },
      1200: { slidesPerView: 4.5 },
    }, //작은 사이즈부터 점점 커지게 적어주기
  });
  // 뉴스 스와이프
  const newsSwiper = new Swiper(".newsSwiper", {
    slidesPerView: 1.5, //보여지는 갯수(모바일일 때)
    spaceBetween: 20, //css에서 gap주는게 아님
    loop: true,
    breakpoints: {
      590: { slidesPerView: 2.5 },
      1200: { slidesPerView: 3.5 },
    }, //작은 사이즈부터 점점 커지게 적어주기
  });

    // gotop 버튼
  const gotopBtn = this.document.querySelector("#goTop");
  gotopBtn.addEventListener("click", () => {
    this.window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}); //End
