const menu = [
  {
    id: 1,
    title: "아메리카노",
    category: "coffee",
    price: 3500,
    img: "../assets/images/coffee/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "에스프레소",
    category: "coffee",
    price: 3000,
    img: "../assets/images/coffee/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "카페라떼",
    category: "coffee",
    price: 4000,
    img: "../assets/images/coffee/item-3.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "카푸치노",
    category: "coffee",
    price: 4000,
    img: "../assets/images/coffee/item-4.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "롤케익 & 아메리카노 세트",
    category: "SetMenu",
    price: 9000,
    img: "../assets/images/coffee/item-5.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "크로와상 & 아메리카노 세트",
    category: "SetMenu",
    price: 10000,
    img: "../assets/images/coffee/item-6.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "파르페",
    category: "coffee",
    price: 7000,
    img: "../assets/images/coffee/item-7.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "초콜릿 & 라떼 세트",
    category: "SetMenu",
    price: 8000,
    img: "../assets/images/coffee/item-8.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "아포카토",
    category: "coffee",
    price: 5500,
    img: "../assets/images/coffee/item-9.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "밀크티",
    category: "coffee",
    price: 5000,
    img: "../assets/images/coffee/item-10.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "딸기 에끌레어",
    category: "dessert",
    price: 3000,
    img: "../assets/images/coffee/item-11.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 12,
    title: "라즈베리 케이크",
    category: "dessert",
    price: 6000,
    img: "../assets/images/coffee/item-12.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 13,
    title: "카페모카",
    category: "coffee",
    price: 4500,
    img: "../assets/images/coffee/item-13.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 14,
    title: "컵케익",
    category: "dessert",
    price: 4000,
    img: "../assets/images/coffee/item-14.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 15,
    title: "초코무스 케이크",
    category: "dessert",
    price: 6500,
    img: "../assets/images/coffee/item-15.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 16,
    title: "티라미수",
    category: "dessert",
    price: 8000,
    img: "../assets/images/coffee/item-16.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 17,
    title: "마카롱 & 아메리카노 세트",
    category: "SetMenu",
    price: 5500,
    img: "../assets/images/coffee/item-17.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 18,
    title: "팬케이크",
    category: "dessert",
    price: 7000,
    img: "../assets/images/coffee/item-18.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const contItems = document.querySelector(".cont-items");
const contBtns = document.querySelector(".cont-btns");

window.addEventListener("DOMContentLoaded", () => {
  setMenuItems(menu);
  setMenuBtns();
})

function setMenuItems(menuItems) {
  let setMenu = menuItems.map((item) => {
    return `
    <article class="menu-item">
      <img src=${item.img} class="img-item" alt=${item.title}>
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">${item.price}원</h4>
        </header>
        <p class="txt-item">
          ${item.desc}
        </p>
      </div>
    </article>
    `;
  });
  setMenu = setMenu.join("");
  console.log(setMenu);
  contItems.innerHTML = setMenu;
}

function setMenuBtns() {
  const categories = menu.reduce(
    (item, menus) => {
      if (!item.includes(menus.category)) {
        item.push(menus.category);
      }
      return item;
    },
    ["all"]
  );
  const filterBtns = categories.map((category) => {
    return`
      <button type="button" class="filter-btn" data-id=${category}>${category}</button>
    `;
  }).join("");
  console.log(filterBtns);

  contBtns.innerHTML = filterBtns;
  const categoryBtns = contBtns.querySelectorAll(".filter-btn");

  categoryBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;

      const filterMenu = menu.filter((item) => {
        if(item.category === category) {
          return item;
        }
      });
      if(category === "all"){
        setMenuItems(menu);
      } else {
        setMenuItems(filterMenu);
      }
    });
  });
}