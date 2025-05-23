const allProduct = [
  {
    category: "seiko",
    title: "Seiko Prospex Speedtimer 'Panda'",
    price: "$540",
    imgSrc:
      "https://watchdirect.com.au/cdn/shop/products/SSC813P_800x.png?v=1636414442",
    sideImg:
      "https://watchdirect.com.au/cdn/shop/products/SRPD61_3_800x.png?v=1620612117",
  },
  {
    category: "seiko",
    title: "Seiko Sports Automatic Green Dial",
    price: "$238",
    imgSrc:
      "https://watchdirect.com.au/cdn/shop/products/SRPD61K1_29110053226970_jpg__41270.1585278880.1280.1280.png?v=1620611967",
    sideImg:
      "https://watchdirect.com.au/cdn/shop/products/SRPD61_3_800x.png?v=1620612117",
  },
  {
    category: "zinvo",
    title: "ZINVO BLADE RAINBOW",
    price: "$1,200",
    imgSrc: "Image/Zinvo11_1000x.webp",
    sideImg:
      "https://klassywatches.com/cdn/shop/products/Rainbow04_1000x.png?v=1632984247",
  },
  {
    category: "zinvo",
    title: "Zinvo blade dragon",
    price: "$430",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/BladeDragon_800x.png?v=1707151958",
    sideImg:
      "https://klassywatches.com/cdn/shop/files/8_2_800x.png?v=1707151958",
  },
  {
    category: "zinvo",
    title: "Zinvo Blade Trifecta",
    price: "$410",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/BladeTrifecta_1000x.png?v=1707148122",
    sideImg:
      "https://klassywatches.com/cdn/shop/files/L-28-OKcopy2_1000x.png?v=1707148122",
  },
  {
    category: "zinvo",
    title: "Zinvo Blade Black Magic Gem",
    price: "$410",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/s58x1_1000x.png?v=1694111082",
    sideImg:
      "https://klassywatches.com/cdn/shop/files/Q-3put_3_1000x.png?v=1694111082",
  },

  {
    category: "d1",
    title: "D1 MILANO UTBJ36 ULTRA THIN BRACELET",
    price: "$395",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/UTBJ36_1200x_482ecbfe-e7c3-46bd-9ca4-cb054fd36f1f_1000x.webp?v=1707793731",
    sideImg:
      "https://klassywatches.com/cdn/shop/files/UTBJ36_Emotional_1200x_83ff41da-a6fe-4d09-bdf2-1aa14dff88b9_1000x.webp?v=1707793749",
  },
  {
    category: "d1",
    title: "D1 MILANO SKRJ16 SKELETON<",
    price: "$725",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/SKRJ16_1200x_16ab1928-6384-4729-a679-a1cdc4efc126_1000x.webp?v=1707972635",
    sideImg:
      "https://klassywatches.com/cdn/shop/files/SKRJ16_Emotional_1200x_1e1cfd87-ebef-4e92-b038-16e7cd16543d_1000x.webp?v=1707972635",
  },
  {
    category: "d1",
    title: "D1 MILANO CHBJ06 Sprint Chronograph",
    price: "$535",
    imgSrc:
      "https://klassywatches.com/cdn/shop/products/CHBJ06_Front_1000x.png?v=1598509736",
    sideImg:
      "https://klassywatches.com/cdn/shop/products/CHBJ06_Emotional_1000x.png?v=1598509736",
  },
  {
    category: "d1",
    title: "D1 MILANO CHBJ12 CHRONOGRAPH",
    price: "$545",
    imgSrc:
      "https://klassywatches.com/cdn/shop/files/aNiRGxJs_1000x.png?v=1682388412",
    sideImg:
      "https://klassywatches.com/cdn/shop/files/GyNaXjHo_1000x.png?v=1682388419",
  },
  {
    category: "mstr",
    title: "MSTR AM139CB Ambassador Rose Gold",
    price: "$300",
    imgSrc:
      "https://klassywatches.com/cdn/shop/products/AM139CB_001_600x.png?v=1620756496",
    sideImg:
      "https://klassywatches.com/cdn/shop/products/ANGLE2-003_600x600.png?v=1620756496",
  },
  {
    category: "mstr",
    title: "MSTR AM1001LB Ambassador Polished 18k Gold",
    price: "$300",
    imgSrc:
      "https://klassywatches.com/cdn/shop/products/AM1001LS-01_2000x_2cd206e2-f8b9-4c59-8ce6-e29a143888f8_1000x.png?v=1620571819",
    sideImg:
      "https://klassywatches.com/cdn/shop/products/AM1001LS-03_2000x_af42382f-3a2a-4d7c-a477-420170b19317_1000x.png?v=1620571819",
  },
  {
    category: "mstr",
    title: "MSTR AM1024MVLB Venom Ambassador Black Leather",
    price: "$300",
    imgSrc:
      "https://klassywatches.com/cdn/shop/products/MSTR-AM1008SS-01_1000x.png?v=1620582857",
    sideImg:
      "https://klassywatches.com/cdn/shop/products/MSTR-AM1008SS-02_1000x.png?v=1620582857",
  },
  {
    category: "mstr",
    title: "MSTR AM1008SS Ambassador",
    price: "$350",
    imgSrc:
      "https://klassywatches.com/cdn/shop/products/MSTRAmbassadorAM177LBFrontView_1000x.png?v=1614240098",
    sideImg:
      "https://klassywatches.com/cdn/shop/products/MSTRAmbassadorAM177LBThreeQuarterView_1000x.png?v=1614240098",
  },
  {
    category: "rolex",
    title: "Rolex Submariner",
    price: "$11,000",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-submariner-no-date-114060-nuevo-a-estrenar-id14824-1602769842.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-submariner-date-116610ln-1621339579.png",
  },
  {
    category: "rolex",
    title: "Rolex Cosmograph Daytona",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-cosmograph-daytona-116518ln-pikachu-nuevo-id15368-copia-1721843112.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-cosmograph-daytona-116518ln-pikachu-nuevo-id15368-copia-1721843122.png",
  },
  {
    category: "rolex",
    title: "Rolex Oyster Perpetual",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-oyster-perpetual-116000-36mm-esfera-uva-id15495-1716895489.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-oyster-perpetual-116000-36mm-esfera-uva-id15495-1716895498.png",
  },
  {
    category: "rolex",
    title: "Rolex Oyster Perpetual 126000",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-oyster-perpetual-126000-36mm-esfera-rosa-candy-nuevo-a-estrenar-id15083-copia-1705589034.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/rolex-oyster-perpetual-126000-36mm-esfera-rosa-candy-nuevo-a-estrenar-id15083-copia-1705589050.png",
  },
  {
    category: "hublot",
    title: "Hublot Big Bang Calaveras Mexique",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-big-bang-calaveras-ceramic-ed-limitada-30pcs-id14523-1602773949.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-big-bang-calaveras-ceramic-ed-limitada-30pcs-id14523-1602773954.png",
  },
  {
    category: "hublot",
    title: "Hublot Classic Fusion Aerofusion ",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-classic-fusion-aerofusion-black-magic-45mm-nuevo-id15192-1650635728.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-classic-fusion-aerofusion-black-magic-45mm-nuevo-id15192-1650635732.png",
  },
  {
    category: "hublot",
    title: "Hublot Classic Fusion Chronograph ",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-classic-fusion-45mm-cronografo-oro-rosa-nuevo-id14861-1596805158.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-classic-fusion-45mm-cronografo-oro-rosa-nuevo-id14861-1596805170.png",
  },
  {
    category: "hublot",
    title: "Hublot Big Bang King All Black Blue ",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-big-bang-king-all-black-blue-48mm-edicion-limitada-id15193-1640710172.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/hublot-big-bang-king-all-black-blue-48mm-edicion-limitada-id15193-1640710176.png",
  },
  {
    category: "tudor",
    title: "Tudor Black Bay 79220R",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/tudor-black-bay-79220n-id14368-copia-1703089603.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/tudor-black-bay-79220n-id14368-copia-1703089608.png",
  },
  {
    category: "tudor",
    title: "Tudor Submariner 7928",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/1-tudor-submariner-7928-1967-1603191817.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/1-tudor-submariner-7928-1967-1603191820.png",
  },
  {
    category: "tudor",
    title: "Tudor Submariner 7922",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/tudor-submariner-7922-1954-1602774060.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/tudor-submariner-7922-1954-1602774075.png",
  },
  {
    category: "tudor",
    title: "Tudor Black Bay GMT",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/tudor-black-bay-gmt-79830rb-id14980-1615913856.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/tudor-black-bay-gmt-79830rb-id14980-1615913861.png",
  },
  {
    category: "seiko",
    title: "Seiko Grand Seiko Spring Drive",
    price: "Price on request",
    imgSrc:
      "https://www.ap-watches.com/ap-watches/fotos/seiko-grand-seiko-spring-drive-sbga229g-nuevo-id14809-1602764284.png",
    sideImg:
      "https://www.ap-watches.com/ap-watches/fotos/seiko-grand-seiko-spring-drive-sbga229g-nuevo-id14809-1602764287.png",
  },
];
const productWrapper = document.querySelector(".product-card-wrapper");
const filterBtn = document.querySelectorAll(".allProduct-Btn-wrapper button");
const btnWrapper = document.querySelector(".allProduct-Btn-wrapper");

btnWrapper.addEventListener("click", (e) => {
  const btnId = e.target.dataset.id;

  filterBtn.forEach((btn) => {
    if (btnId) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});

filterBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.currentTarget.dataset.id;
    const filteredProduct = allProduct.filter((item) => {
      return item.category == id;
    });
    if (id == "all") {
      showingProduct(allProduct);
    } else {
      showingProduct(filteredProduct);
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  showingProduct(allProduct);
});

// const showingProduct = allProduct.map((p) =>{

// })
const showingProduct = (productArr) => {
  const displayProduct = productArr
    .map((p) => {
      return `
    <div class="product-card">
          <div class="product-card-img feature-img">
            <img
              src="${p.imgSrc}"
              alt=""
              class=""
            />
            <img
              src="${p.sideImg}"
              class="hover-img"
              alt=""
            />
          </div>
          <div class="feature-detail">
            <h4 class="feature-name">${p.title}</h4>
            <p class="pricing">${p.price}</p>
          </div>
        </div>
    `;
    })
    .join("");
  productWrapper.innerHTML = displayProduct;
};

//fade in
