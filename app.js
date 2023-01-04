let maniBtn = document.getElementById("mani-icon");
let pediBtn = document.getElementById("pedi-icon");
let ornamentBtn = document.getElementById("ornament-icon");
let browsBtn = document.getElementById("brows-icon");
let defPrices = document.getElementById("defalut")
let maniPrices = document.getElementById("mani-price");
let pediPrices = document.getElementById("pedi-price");
let ornamentPrices = document.getElementById("zdobienia-price");
let browsPrices = document.getElementById("brows-price");

/*Sprawdza który z elementów ma klasę active i zmienia ją na nieaktywną, 
żeby można było wyświetlić kolejny element */
function checkActive () {
    let prices = [defPrices ,maniPrices, pediPrices, ornamentPrices, browsPrices];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i].classList == "active") {
            prices[i].classList = "unactive";
        };
    };
};

/*Na początek sprawdza czy id klikniętego elementu zgadza się z tym podanym w if,
następnie odpala funkcję changeActive i ustawia klasę active na elemencie który ma się wyświetlić*/
function changePrices() {
    targetID = this.id; //this.id odnosi się do klikniętego właśnie elementu
    if (targetID == "mani-icon" || targetID == "icon-mani") {
        checkActive();
        maniPrices.classList = "active";
    } else if (targetID == "pedi-icon" || targetID == "icon-pedi") {
        checkActive();
        pediPrices.classList = "active";
    } else if (targetID == "ornament-icon" || targetID == "icon-ornament") {
        checkActive();
        ornamentPrices.classList = "active";
    }else if (targetID == "brows-icon" || targetID == "icon-ornament") {
        checkActive();
        browsPrices.classList = "active";
    };
};

maniBtn.addEventListener("click", changePrices);
pediBtn.addEventListener("click", changePrices);
ornamentBtn.addEventListener("click", changePrices);
browsBtn.addEventListener("click", changePrices);

/* **************************************************************************************** */
// Gallery

let slides = document.querySelectorAll(".slide");
let nextBtn = document.getElementById("nextbtn");
let previousBtn = document.getElementById("prevbtn");
let curSlide = 0;
let maxSlide = slides.length - 1;

function changePhoto() {
  slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});
};

window.onload = function() {
  function changingPhotoOnLoad() {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    
    changePhoto();
  }
  setInterval(changingPhotoOnLoad, 2000)
};

nextBtn.addEventListener("click", function () {
    if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      changePhoto();
});

previousBtn.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  changePhoto();
});