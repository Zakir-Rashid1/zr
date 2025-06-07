//=====================Section 01====================

// ++++++++++++++Open side naviagation bar on click++++++++++++++
function openSideNavBar() {
  $("#hamburger-menu").on("click", () => {
    $("#main-nav-bar ul").toggleClass("side-nav-bar");
    $("#main-nav-bar>ul>li i").toggleClass("cross");
  });
}
openSideNavBar();

// ++++++++++++++Close side naviagation bar on click++++++++++++++
function closeSideNavBar() {
  $("#main-nav-bar ul>li i").on("click", () => {
    $("#main-nav-bar ul").toggleClass("side-nav-bar");
    $("#main-nav-bar ul>li i").toggleClass("cross");
  });
}
closeSideNavBar();

// ++++++++++++++Generate dynamic text++++++++++++++
function typeWriter() {
  const mySkills = ["Full Stack Developer", "AIML Developer", "Problem Solver"];
  let charIndex = 0;
  let wordIndex = 0;

  function dynmaicEffectofSkills() {
    const currentWord = mySkills[wordIndex];

    if (charIndex < currentWord.length) {
      $("#type-writter").append(currentWord[charIndex]);
      charIndex += 1;
      setTimeout(dynmaicEffectofSkills, 100); // Delay b/w each character
    } else {
      setTimeout(() => {
        $("#type-writter").fadeOut(300, function () {
          $(this).text("").fadeIn();
          charIndex = 0;
          wordIndex = (wordIndex + 1) % mySkills.length;
          dynmaicEffectofSkills();
        });
      }, 1000); //Delay b/w words
    }
  }

  dynmaicEffectofSkills();
}

typeWriter();

// Say hello button
const sayHello = $("#short-desc button");
sayHello.on("click", () => {
  $("html, body").animate(
    {
      scrollTop: $("#section-09").offset().top,
    },
    5000
  );
});

// Download CV button
const downloadCv = $("#download-cv-button");
downloadCv.on("click", () => {
  alert("Not availabe yet ☹️, website under maintaince");
});

//=====================Section 03====================
function dynamicImage() {
  $(window).on("scroll", function () {
    const sectionTop = $("#section-03").offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > sectionTop) {
      $("#slide-image").addClass("visible");
    } else {
      $("#slide-image").removeClass("visible");
    }
  });
}

dynamicImage();

//=====================Section 06====================
function progressBar() {
  $(".skill").each(function () {
    let prgBar = $(this);
    let $outerCircle = prgBar.find($(".outer-circle"));
    let $valueText = prgBar.find($(".inner-circle>span"));

    let progressStartValue = 0;
    let progressEndValue = $valueText.text();

    let progress = setInterval(() => {
      progressStartValue += 1;

      $valueText.text(`${progressStartValue}%`);
      let degree = progressStartValue * 3.6; // 100% = 360deg
      $outerCircle.css(
        "background",
        `conic-gradient(
        rgb(236, 228, 228) ${degree}deg,
              #1d1b1b ${degree}deg
                )`
      );
      if (progressStartValue >= progressEndValue) {
        clearInterval(progress);
      }
    }, 30);
  });
}

progressBar();




//=====================Chat button====================
// const chatButton = $(".cht-button");
// chatButton.on("click", () => {
//   alert("Chat Bot Unavailabe");
// });


