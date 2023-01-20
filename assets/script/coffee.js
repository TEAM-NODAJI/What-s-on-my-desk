const menu = [
  {
    id: 1,
    title: "아메리카노",
    category: "coffee",
    price: 3500,
    img: "item-1.jpg",
    desc: `추출한 에스프레소 샷에 물을 부어 마시는 연한 커피. 블렌딩 방식이나 원두의 원산지에 따라 산미, 풍미 단맛, 부드러운 맛 등을 다양하게 즐길 수 있다.`,
  },
  {
    id: 2,
    title: "에스프레소",
    category: "coffee",
    price: 3000,
    img: "item-2.jpg",
    desc: `원두를 곱게 갈아서 압축한 후, 고온의 물을 고압으로 통과시켜 추출해낸 이탈리안 정통커피.`,
  },
  {
    id: 3,
    title: "카페라떼",
    category: "coffee",
    price: 4000,
    img: "item-3.jpg",
    desc: `에스프레소에 뜨거운 우유를 넣어 만드는 커피.`,
  },
  {
    id: 4,
    title: "카푸치노",
    category: "coffee",
    price: 4000,
    img: "item-4.jpg",
    desc: `에스프레소, 뜨거운 우유, 그리고 우유 거품을 재료로 만드는 커피. 보통 코코아 가루나 계피 가루를 뿌려 마신다.`,
  },
  {
    id: 5,
    title: "롤케익 & 아메리카노 세트",
    category: "SetMenu",
    price: 9000,
    img: "item-5.jpg",
    desc: `쌀가루로 만든 부드럽고 촉촉한 모카롤케익 + 아메리카노 세트`,
  },
  {
    id: 6,
    title: "크로와상 & 아메리카노 세트",
    category: "SetMenu",
    price: 10000,
    img: "item-6.jpg",
    desc: `여러 겹으로 이루어져 있는 텍스처가 특징인 초승달 모양의 크로와상 + 아메리카노 세트. 크로플로 변경 가능.`,
  },
  {
    id: 7,
    title: "파르페",
    category: "coffee",
    price: 7000,
    img: "item-7.jpg",
    desc: `기본 파르페 구성 - 아이스크림, 웨하스, 죠리퐁, 초코시럽, 빼빼로, 솜사탕`,
  },
  {
    id: 8,
    title: "초콜릿 & 라떼 세트",
    category: "SetMenu",
    price: 8000,
    img: "item-8.jpg",
    desc: `수제 초콜릿 3구 + 라떼 세트. 초콜릿 선택 가능`,
  },
  {
    id: 9,
    title: "아포카토",
    category: "coffee",
    price: 5500,
    img: "item-9.jpg",
    desc: `아이스크림 위에 진한 에스프레소를 끼얹어 먹는 이탈리아 대표 디저트`,
  },
  {
    id: 10,
    title: "밀크티",
    category: "coffee",
    price: 5000,
    img: "item-10.jpg",
    desc: `홍차에 우유를 넣은 스윗 로얄 밀크티. 홍차 종류 선택 가능`,
  },
  {
    id: 11,
    title: "딸기 에끌레어",
    category: "dessert",
    price: 3000,
    img: "item-11.jpg",
    desc: `크림을 넣고 그 위에 딸기 시럽을 바른 길쭉한 모양의 슈 페이스트리 디저트`,
  },
  {
    id: 12,
    title: "라즈베리 케이크",
    category: "dessert",
    price: 6000,
    img: "item-12.jpg",
    desc: `몽떼크림과 라즈베리 잼을 샌드한 조각 케이크`,
  },
  {
    id: 13,
    title: "카페모카",
    category: "coffee",
    price: 4500,
    img: "item-13.jpg",
    desc: `진한 초콜릿 모카 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무리한 커피`,
  },
  {
    id: 14,
    title: "컵케익",
    category: "dessert",
    price: 4000,
    img: "item-14.jpg",
    desc: `라즈베리가 주 재료인 페어리 케이크. 포장 가능`,
  },
  {
    id: 15,
    title: "초코무스 케이크",
    category: "dessert",
    price: 6500,
    img: "item-15.jpg",
    desc: `촉촉하고 얇은 초콜릿 스폰지 사이사이에 부드러운 초코무스가 듬뿍 올라간 초코케이크`,
  },
  {
    id: 16,
    title: "티라미수",
    category: "dessert",
    price: 8000,
    img: "item-16.jpg",
    desc: `커피에 적신 사보이아르디 및 마스카르포네를 주재료로 만든 디저트`,
  },
  {
    id: 17,
    title: "마카롱 & 아메리카노 세트",
    category: "SetMenu",
    price: 5500,
    img: "item-17.jpg",
    desc: `수제 마카롱 3구 + 아메리카노 세트. 마카롱 선택가능`,
  },
  {
    id: 18,
    title: "팬케이크",
    category: "dessert",
    price: 7000,
    img: "item-18.jpg",
    desc: `폭신한 딸기 수플레 팬케이크. 시럽 선택 가능`,
  },
];


const openMenuModal = document.querySelector(".btn-coffee");
const coffeeModal = document.querySelector(".coffee-modal-wrap");
const btnCloseModal = document.querySelector(".off-modal");

const contItems = document.querySelector(".cont-coffee-items");
const contBtns = document.querySelector(".cont-coffee-btns");

openMenuModal.addEventListener("click",() => {
  coffeeModal.classList.remove("hidden");
  setMenuItems(menu);
  setMenuBtns();
})

btnCloseModal.addEventListener("click", () => {
  coffeeModal.classList.add("hidden");
});

function setMenuItems(menuItems) {
  let setMenu = menuItems.map((item) => {
    return `
    <article class="menu-item">
      <img src="https://raw.githubusercontent.com/TEAM-NODAJI/What-s-on-my-desk/main/assets/images/coffee/${item.img}" class="coffee-img-item" alt=${item.title}>
      <div class="coffee-item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="coffee-price">${new Intl.NumberFormat().format(item.price)} 원</h4>
        </header>
        <p class="coffee-txt-item">
          ${item.desc}
        </p>
      </div>
    </article>
    `;
  });
  setMenu = setMenu.join("");
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
  // console.log(filterBtns);

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