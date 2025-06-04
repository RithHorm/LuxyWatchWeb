const header = document.querySelector(".nav-bar");
const navLogo = document.querySelector(".nav-logo > img");
const li = document.querySelectorAll(".nav-link > a");
const toggle = document.querySelector(".nav-toggle i");
const navCart = document.querySelectorAll(".nav-user > button > i");
const navUser = document.querySelector(".nav-user  a i");
// const navUser = document.getElementById("user-btn");

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 0) {
//     header.classList.add("sticky");
//     navLogo.src = "Image/luxyWatchDark.png";
//     for (let list of li) {
//       list.style.color = "black";
//     }
//     toggle.style.color = "black";
//     // navUser.style.color = "black";

//     navCart.forEach((cart) => {
//       cart.style.color = "black";
//     });
//   } else {
//     header.classList.remove("sticky");
//     navLogo.src = "Image/luxyWatchLight.png";
//     for (let list of li) {
//       list.style.color = "white";
//     }
//     toggle.style.color = "white";
//     navUser.style.color = "white";

//     navCart.forEach((cart) => {
//       cart.style.color = "white";
//     });
//   }
// });
window.addEventListener("scroll", function () {
  if (window.innerWidth >= 1280) {
    if (window.scrollY > 0) {
      header.classList.add("sticky");
      navLogo.src = "Image/luxyWatchDark.png";
      for (let list of li) {
        list.style.color = "black";
      }
      toggle.style.color = "black";
      navUser.style.color = "black";
      navCart.forEach((cart) => {
        cart.style.color = "black";
      });
    } else {
      header.classList.remove("sticky");
      navLogo.src = "Image/luxyWatchLight.png";
      for (let list of li) {
        list.style.color = "white";
      }
      toggle.style.color = "white";
      navUser.style.color = "white";
      navCart.forEach((cart) => {
        cart.style.color = "white";
      });
    }
  } else if (window.innerWidth <= 1280) {
    if (window.scrollY > 0) {
      header.classList.add("sticky");
      navLogo.src = "Image/luxyWatchDark.png";
      toggle.style.color = "black";
      // navUser.style.color = "black";
      navCart.forEach((cart) => {
        cart.style.color = "black";
      });
    } else {
      header.classList.remove("sticky");
      navLogo.src = "Image/luxyWatchLight.png";
      // for (let list of li) {
      //   list.style.color = "white";
      // }
      toggle.style.color = "white";
      navUser.style.color = "white";
      navCart.forEach((cart) => {
        cart.style.color = "white";
      });
    }
  }
});
if (window.innerWidth <= 1280) {
  for (let list of li) {
    list.style.color = "black";
  }
}
// nav toggle

const navLists = document.querySelector(".nav-list");
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", function () {
  navLists.classList.toggle("show");
});
//Slider

const prevBtn = document.querySelector(".slide-btn-wrapper .prevBtn");
const nextBtn = document.querySelector(".slide-btn-wrapper .nextBtn");
const prodSlider = document.querySelectorAll(
  ".product-slider-wrapper .product-slider"
);
let counter = 0;

// Initialize first slide
prodSlider.forEach((slide, index) => {
  if (index === 0) {
    slide.classList.add("active");
  } else {
    slide.classList.remove("active");
  }
});

function nextSlide() {
  // Remove active class from current slide
  prodSlider[counter].classList.remove("active");

  // Update counter
  counter = (counter + 1) % prodSlider.length;

  // Add active class to next slide
  prodSlider[counter].classList.add("active");
}

function prevSlide() {
  // Remove active class from current slide
  prodSlider[counter].classList.remove("active");

  // Update counter
  counter = (counter - 1 + prodSlider.length) % prodSlider.length;

  // Add active class to previous slide
  prodSlider[counter].classList.add("active");
}

// Add event listeners
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Optional: Add auto-slide functionality
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-slide on hover
const sliderWrapper = document.querySelector(".product-slider-wrapper");
sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(slideInterval);
});

sliderWrapper.addEventListener("mouseleave", () => {
  slideInterval = setInterval(nextSlide, 5000);
});

//      Click Feature

const productsMenu = [
  {
    category: "bestSeller",
    title: "ZINVO BLADE RAINBOW",
    price: "$1,200",
    imgSrc: "Image/Zinvo11_1000x.webp",
    rotateImg:
      "https://klassywatches.com/cdn/shop/products/Rainbow04_1000x.png?v=1632984247",
  },
  {
    category: "bestSeller",
    title: "Zinvo blade dragon",
    price: "$430",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/BladeDragon_800x.png?v=1707151958",
    rotateImg:
      "https://klassywatches.com/cdn/shop/files/8_2_800x.png?v=1707151958",
  },
  {
    category: "bestSeller",
    title: "Rolex Deepsea ",
    price: "$16,865",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-sea-dweller-deepsea-126660-james-cameron-nuevo-a-estrenar-id15239-1650384749.png",
    rotateImg:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-sea-dweller-deepsea-126660-james-cameron-nuevo-a-estrenar-id15239-1650384763.png",
  },
  {
    category: "bestSeller",
    title: "Rolex Submariner",
    price: "$11,000",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-submariner-date-1680-white-mk1-1975-id14831-copia-1711456122.png",
    rotateImg:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-submariner-date-116610ln-1621339579.png",
  },

  {
    category: "trending",
    title: "Zinvo Blade Trifecta",
    price: "$410",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/BladeTrifecta_1000x.png?v=1707148122",
    rotateImg:
      "https://klassywatches.com/cdn/shop/files/L-28-OKcopy2_1000x.png?v=1707148122",
  },
  {
    category: "trending",
    title: "D1 MILANO UTBJ36 ULTRA THIN BRACELET",
    price: "$395",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/UTBJ36_1200x_482ecbfe-e7c3-46bd-9ca4-cb054fd36f1f_1000x.webp?v=1707793731",
    rotateImg:
      "https://klassywatches.com/cdn/shop/files/UTBJ36_Emotional_1200x_83ff41da-a6fe-4d09-bdf2-1aa14dff88b9_1000x.webp?v=1707793749",
  },
  {
    category: "trending",
    title: "D1 MILANO SKRJ16 SKELETON",
    price: "$725",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/SKRJ16_1200x_16ab1928-6384-4729-a679-a1cdc4efc126_1000x.webp?v=1707972635",
    rotateImg:
      "https://klassywatches.com/cdn/shop/files/SKRJ16_Emotional_1200x_1e1cfd87-ebef-4e92-b038-16e7cd16543d_1000x.webp?v=1707972635",
  },
  {
    category: "trending",
    title: "Zinvo Blade Black Magic Gem",
    price: "$410",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/s58x1_1000x.png?v=1694111082",
    rotateImg:
      "https://klassywatches.com/cdn/shop/files/Q-3put_3_1000x.png?v=1694111082",
  },
];

const featureBtn = document.querySelectorAll(".feature-btn-wrapper button");
const featureWrapper = document.querySelector(".feature-card-wrapper");
const btnContainer = document.querySelector(".feature-btn-wrapper");

btnContainer.addEventListener("click", (e) => {
  const btnId = e.target.dataset.id;
  //   console.log(btnId);
  featureBtn.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

featureBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    const filteredMenu = productsMenu.filter((items) => {
      //   if (items.category == id) {
      //     return items;
      //   }
      return items.category == id;
    });
    if (id == "trending") {
      showProduct(filteredMenu);
    } else {
      showProduct(filteredMenu);
    }
  });
});

const showProduct = (arrayProducts) => {
  const displayProducts = arrayProducts
    .map((p) => {
      return ` <div class="feature-card">
          <div class="feature-img">
            <img
              src="${p.imgSrc}"
              alt=""
            />
            <img
              src="${p.rotateImg}"
              alt=""
              class="hover-img"
            />
          </div>
          <div class="feature-detail">
            <h4 class="feature-name">${p.title}</h4>
            <p class="pricing">${p.price}</p>
          </div>
        </div>`;
    })
    .join("");
  featureWrapper.innerHTML = displayProducts;
};
