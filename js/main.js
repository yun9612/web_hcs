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

  //모바일메뉴 클릭하면 서브메뉴나오기
  const moMenus = this.document.querySelectorAll(".m_menu_list > li > a");
  const moSubmenus = this.document.querySelectorAll(".depth3");
  const moBtns = this.document.querySelectorAll(".more_btn");
  moMenus.forEach((moMenu, index) => {
    moMenu.addEventListener("click", () => {
      // 메인에 클래스주기
      const menucurrent = moMenus[index]; //각각에 클래스를 주기 위해서 [index]를 선택하고
      if (menucurrent.classList.contains("active")) {
        menucurrent.classList.remove("active"); //있으면 지우기
      } else {
        moMenus.forEach(function (menu) {
          menu.classList.remove("active"); //일단 있는거 다 지우게하고
        });
        menucurrent.classList.add("active"); //클릭한거에는 생기게하기
      }
      // 서브에 클래스주기
      const subcurrent = moSubmenus[index]; //각각에 클래스를 주기 위해서 [index]를 선택하고
      if (subcurrent.classList.contains("active")) {
        subcurrent.classList.remove("active"); //있으면 지우기
      } else {
        moSubmenus.forEach(function (sub) {
          sub.classList.remove("active"); //일단 있는거 다 지우게하고
        });
        subcurrent.classList.add("active"); //클릭한거에는 생기게하기
      }
      // 화살표 돌리는 클래스
      const btncurrent = moBtns[index];
      if (btncurrent.classList.contains("active")) {
        btncurrent.classList.remove("active");
      } else {
        btncurrent.classList.add("active");
      }
    });
  });
  // 배너 스와이프
  const visualSwiper = new Swiper(".visualSwiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  // 메뉴 스와이프
  const menuSwiper = new Swiper(".menuSwiper", {
    slidesPerView: 1.5, //보여지는 갯수(모바일일 때)
    spaceBetween: 20, //css에서 gap주는게 아님
    breakpoints: {
      590: { slidesPerView: 2.5 },
      768: { slidesPerView: 3.5 },
      1200: { slidesPerView: 4.5 },
    }, //작은 사이즈부터 점점 커지게 적어주기
  });
  //메뉴 탭
  const menutabs = this.document.querySelectorAll(".menu_bar > ul > li > a");
  const menuList = this.document.querySelectorAll(".menuSwiper");
  menutabs.forEach((menutab, index) => {
    menutab.addEventListener("click", (e) => {
      e.preventDefault();
      menutabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      menuList.forEach((list) => {
        list.classList.remove("active");
      });
      menutab.classList.add("active");
      menuList[index].classList.add("active");
    });
  });

  // 뉴스 스와이프
  const newsSwiper = new Swiper(".newsSwiper", {
    slidesPerView: 1.5, //보여지는 갯수(모바일일 때)
    spaceBetween: 20, //css에서 gap주는게 아님
    breakpoints: {
      590: { slidesPerView: 2.5 },
      1200: { slidesPerView: 3.5 },
    }, //작은 사이즈부터 점점 커지게 적어주기
  });
  // 뉴스탭
  const newstabs = this.document.querySelectorAll(".news_bar > ul > li > a");
  const newsList = this.document.querySelectorAll(".newsSwiper");
  newstabs.forEach((newstab, index) => {
    newstab.addEventListener("click", () => {
      newstabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      newsList.forEach((list) => {
        list.classList.remove("active");
      });
      newstab.classList.add("active");
      newsList[index].classList.add("active");
    });
  });

  // gotop 버튼
  const gotopBtn = this.document.querySelector("#goTop");
  this.window.addEventListener("scroll", function () {
    // console.log("스크롤시작");
    if (this.document.documentElement.scrollTop > 200) {
      gotopBtn.style.display = "block";
    } else {
      gotopBtn.style.display = "none";
    }
  });

  // 팝업창 닫기
  const popup = this.document.querySelector(".popup");
  const closeBtn = this.document.querySelector(".closeBtn");
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
}); //End
