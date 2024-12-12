let category = [
  {
    id: 1,
    img: 'https://kimsuminn.github.io/binggrae/img/product/ico_list.png',
    category: '전체'
  },
  {
    id: 2,
    img: 'https://kimsuminn.github.io/binggrae/img/category/ice-cream.png',
    category: '아이스크림'
  },
  {
    id: 3,
    img: 'https://kimsuminn.github.io/binggrae/img/category/milk.png',
    category: '우유/치즈'
  },
  {
    id: 4,
    img: 'https://kimsuminn.github.io/binggrae/img/category/yogurt.png',
    category: '발효유'
  },
  {
    id: 5,
    img: 'https://kimsuminn.github.io/binggrae/img/category/coffee.png',
    category: '커피'
  },
  {
    id: 6,
    img: 'https://kimsuminn.github.io/binggrae/img/category/juice.png',
    category: '주스'
  },
  {
    id: 7,
    img: 'https://kimsuminn.github.io/binggrae/img/category/drink.png',
    category: '음료'
  },
  {
    id: 8,
    img: 'https://kimsuminn.github.io/binggrae/img/category/snack.png',
    category: '스낵/디저트'
  },
  {
    id: 9,
    img: 'https://kimsuminn.github.io/binggrae/img/category/health.png',
    category: '건강지향'
  },
  {
    id: 10,
    img: 'https://kimsuminn.github.io/binggrae/img/category/export.png',
    category: '수출제품'
  },
]

function addCategory(category) {
  let menu = document.querySelector('section .product nav ul');
  let list = category.map(val => {
    return `
      <li class="swiper-slide" data-id=${val.id}>
        <a href="#">
          <img src=${val.img} alt=${val.id}>
          <p>${val.category}</p>
        </a>
      </li>
    `;
  }).join("");

  menu.innerHTML = list;

  let all = menu.querySelector('li:first-child');
  all.classList.add('on');
}

addCategory(category);

let swiper = new Swiper(".category", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 10,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 1,
      swipeToSlide: true,
    },
    360: {
      slidesPerView: 4,
      spaceBetween: 4,
      swipeToSlide: true,
    },
    500: {
      slidesPerView: 4,
      spaceBetween: 10,
      swipeToSlide: true,
    },
    750: {
      slidesPerView: 6,
      spaceBetween: 16,
      swipeToSlide: true,
    },
    1400: {
      slidesPerView: 10,
      spaceBetween: 16,
    }
  }
})

let productItem = [
  {
    id: 1,
    name: '요플레 제로',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_001.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 2,
    name: '캐치티니핑 요구르트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_002.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 3,
    name: '바나나맛우유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_003.png',
    count: 5,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 4,
    name: '요플레 오리지널',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_004.png',
    count: 10,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 5,
    name: '메로나',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_005.png',
    count: 4,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 6,
    name: '요플레 닥터캡슐',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_006.png',
    count: 4,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 7,
    name: '투게더',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_007.png',
    count: 5,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 8,
    name: '끌레도르',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_008.png',
    count: 27,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 9,
    name: '붕어싸만코',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_009.png',
    count: 4,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 10,
    name: '슈퍼콘',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_010.png',
    count: 3,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 11,
    name: '오틀리',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_011.png',
    count: 5,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 12,
    name: '아카페라 올데이',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_012.png',
    count: 3,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 13,
    name: '아카페라 사이즈업 벤티',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_013.png',
    count: 2,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 14,
    name: '식물성 비유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_014.png',
    count: 1,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 15,
    name: '요플레 그릭',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_015.png',
    count: 3,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 16,
    name: '아카페라 CUP',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_016.png',
    count: 2,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 17,
    name: '프로바이오틱스 스트링치즈',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_017.png',
    count: 2,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 18,
    name: '요플레 토핑',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_018.png',
    count: 3,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 19,
    name: '요플레 프로틴',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_019.png',
    count: 4,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 20,
    name: '그라시아',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_020.png',
    count: 4,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 21,
    name: '닥터캡슐',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_021.png',
    count: 1,
    menu: '건강지향',
    menu_code: 9
  },
  {
    id: 22,
    name: '더:단백',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_022.png',
    count: 16,
    menu: '건강지향',
    menu_code: 9
  },
  {
    id: 23,
    name: '빙그레 빙수',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_023.png',
    count: 2,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 24,
    name: '아연워터',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_024.png',
    count: 2,
    menu: '건강지향',
    menu_code: 9
  },
  {
    id: 25,
    name: '빙그레 생크림빵',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_025.png',
    count: 2,
    menu: '스낵/디저트',
    menu_code: 8
  },
  {
    id: 26,
    name: '비바시티',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_026.png',
    count: 3,
    menu: '건강지향',
    menu_code: 9
  },
  {
    id: 27,
    name: '비비빅',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_027.png',
    count: 2,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 28,
    name: '빵또아',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_028.png',
    count: 4,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 29,
    name: '뽕따',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_029.png',
    count: 1,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 30,
    name: '요맘때',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_030.png',
    count: 13,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 31,
    name: '링키바',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_031.png',
    count: 2,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 32,
    name: '쿠앤크',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_032.png',
    count: 3,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 33,
    name: '엔초',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_033.png',
    count: 1,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 34,
    name: '까페오레',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_034.png',
    count: 1,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 35,
    name: '따옴바',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_035.png',
    count: 5,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 36,
    name: '카카오바',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_036.png',
    count: 3,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 37,
    name: '캔디바',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_037.png',
    count: 1,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 38,
    name: '생귤탱귤',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_038.png',
    count: 2,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 39,
    name: '디핀다트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_039.png',
    count: 4,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 40,
    name: '바나나맛우유 MiNi',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_040.png',
    count: 3,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 41,
    name: '엑설런트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_041.png',
    count: 2,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 42,
    name: '더위사냥',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_042.png',
    count: 2,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 43,
    name: '파워캡',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_043.png',
    count: 2,
    menu: '아이스크림',
    menu_code: 2
  },
  {
    id: 44,
    name: '타임가공유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_044.png',
    count: 2,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 45,
    name: '리랙스',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_045.png',
    count: 2,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 46,
    name: '빙그레우유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_046.png',
    count: 3,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 47,
    name: '굿모닝우유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_047.png',
    count: 2,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 48,
    name: '모짜렐라 피자치즈',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_048.png',
    count: 1,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 49,
    name: '통모짜 스트링치즈',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_049.png',
    count: 1,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 50,
    name: '프로틴 스트링치즈',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_050.png',
    count: 1,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 51,
    name: '11칼로리 곤약젤리',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_051.png',
    count: 3,
    menu: '스낵/디저트',
    menu_code: 8
  },
  {
    id: 52,
    name: '요플레 Only',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_052.png',
    count: 4,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 53,
    name: '요플레 플레인',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_053.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 54,
    name: '요플레 플레인 화이트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_054.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 55,
    name: '요플레 클래식',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_055.png',
    count: 1,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 56,
    name: '래핑카우 벨큐브',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_056.png',
    count: 6,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 57,
    name: '래핑카우 포션',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_057.png',
    count: 6,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 58,
    name: '요플레 이지드링크',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_058.png',
    count: 1,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 59,
    name: '요플레 라이트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_059.png',
    count: 3,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 60,
    name: '끼리',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_060.png',
    count: 5,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 61,
    name: '미니베이비벨',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_061.png',
    count: 2,
    menu: '우유/치즈',
    menu_code: 3
  },
  {
    id: 62,
    name: '요플레 오프룻',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_062.png',
    count: 3,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 63,
    name: '요플레 바이오플레',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_063.png',
    count: 4,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 64,
    name: '요플레 짜먹는 키즈',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_064.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 65,
    name: '쥬시쿨',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_065.png',
    count: 3,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 66,
    name: '뽀로로와 친구들',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_066.png',
    count: 2,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 67,
    name: '빙그레 요구르트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_067.png',
    count: 1,
    menu: '발효유',
    menu_code: 4
  },
  {
    id: 68,
    name: '꽃게랑',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_068.png',
    count: 6,
    menu: '스낵/디저트',
    menu_code: 8
  },
  {
    id: 69,
    name: '야채타임',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_069.png',
    count: 1,
    menu: '스낵/디저트',
    menu_code: 8
  },
  {
    id: 70,
    name: '스모키베이컨칩',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_070.png',
    count: 1,
    menu: '스낵/디저트',
    menu_code: 8
  },
  {
    id: 71,
    name: '쟈키쟈키',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_071.png',
    count: 1,
    menu: '스낵/디저트',
    menu_code: 8
  },
  {
    id: 72,
    name: '뽀로로와 친구들 비스킷',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_072.png',
    count: 3,
    menu: '스낵/디저트',
    menu_code: 8
  },
  {
    id: 73,
    name: '[수출] 메로나',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_073.png',
    count: 6,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 74,
    name: '[수출] 붕어싸만코',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_074.png',
    count: 5,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 75,
    name: '[수출] 바나나맛우유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_075.png',
    count: 9,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 76,
    name: '[수출] 아카페라',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_076.png',
    count: 5,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 77,
    name: '[수출] 뽕따',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_077.png',
    count: 3,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 78,
    name: '[수출] 빵또아',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_078.png',
    count: 3,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 79,
    name: '[수출] 비비빅',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_079.png',
    count: 2,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 80,
    name: '[수출] 더위사냥',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_080.png',
    count: 1,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 81,
    name: '[수출] 엔초',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_081.png',
    count: 1,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 82,
    name: '[수출] 꽃게랑',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_082.png',
    count: 3,
    menu: '수출제품',
    menu_code: 10
  },
  {
    id: 83,
    name: '마노플랜',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_083.png',
    count: 1,
    menu: '건강지향',
    menu_code: 9
  },
  {
    id: 84,
    name: '아카페라 스페셜티 PET',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_084.png',
    count: 3,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 85,
    name: '아카페라 사이즈업',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_085.png',
    count: 4,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 86,
    name: '아카페라 심플리',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_086.png',
    count: 3,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 87,
    name: '아카페라 오리지널',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_087.png',
    count: 5,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 88,
    name: '오늘의 커피',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_088.png',
    count: 2,
    menu: '커피',
    menu_code: 5
  },
  {
    id: 89,
    name: '따옴',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_089.png',
    count: 12,
    menu: '주스',
    menu_code: 6
  },
  {
    id: 90,
    name: '따옴 Plus',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_090.png',
    count: 1,
    menu: '주스',
    menu_code: 6
  },
  {
    id: 91,
    name: '따옴 Organic',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_091.png',
    count: 3,
    menu: '주스',
    menu_code: 6
  },
  {
    id: 92,
    name: '쥬시쿨 에이드',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_092.png',
    count: 3,
    menu: '주스',
    menu_code: 6
  },
  {
    id: 93,
    name: '야채랑',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_093.png',
    count: 1,
    menu: '주스',
    menu_code: 6
  },
  {
    id: 94,
    name: '맑은차',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_094.png',
    count: 5,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 95,
    name: '빙그레 아이스티',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_095.png',
    count: 2,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 96,
    name: '빙그레 슈퍼부스트',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_096.png',
    count: 2,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 97,
    name: '빅썬',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_097.png',
    count: 1,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 98,
    name: '검은깨콩 두유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_098.png',
    count: 1,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 99,
    name: '맛있는콩 두유',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_099.png',
    count: 1,
    menu: '음료',
    menu_code: 7
  },
  {
    id: 100,
    name: 'D.D.D',
    img: 'https://kimsuminn.github.io/binggrae/img/product/item_100.png',
    count: 3,
    menu: '스낵/디저트',
    menu_code: 8
  },
]

function product(list) {
  let itemBox = document.querySelector('.itemBox');
  let moreBtn = document.querySelector('.itemList > button');
  let itemCnt = document.querySelector('.itemList h3');

  let itemPerPage = 16;
  let currentPage = 1;
  let totalItems = list.length;

  itemBox.innerHTML = '';
  itemCnt.textContent = `전체제품(${totalItems})`;
  moreBtn.style.display = 'block';

  function renderProducts() {
    let startIndex = (currentPage - 1) * itemPerPage;
    let endIndex = currentPage * itemPerPage;
    let itemsToShow = list.slice(startIndex, endIndex);

    itemsToShow.forEach(val => {
      let itemList = `
        <li>
          <a href="#">
            <div class="img">
              <img src=${val.img} alt=${val.id}>
              <div class="deco">
                <div class="deco_1">
                  <p>${val.name}</p>
                </div>
                <div class="deco_2">
                  <p>${val.count}개 제품</p>
                </div>
              </div>
              <button type="button">더보기</button>
            </div>
            <p>${val.name}</p>
          </a>
        </li>
      `;

      itemBox.innerHTML += itemList;
    });

    if (endIndex >= totalItems) {
      moreBtn.style.display = 'none';
    } else {
      moreBtn.style.display = 'block';
    }
  }

  moreBtn.addEventListener('click', () => {
    currentPage++;
    renderProducts();
  })

  renderProducts();
}

function tabBtn() {
  let tabMenu = document.querySelectorAll('section .product nav ul li');


  tabMenu.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      swiper.slideTo(idx);
      
      let categoryId = e.currentTarget.dataset.id;

      let url = new URL(window.location);
      let currentCategory = url.searchParams.get('category');
      

      if (currentCategory !== categoryId) {
        url.searchParams.set('category', categoryId);
        window.history.pushState({ category: categoryId }, '', url);
      }

      let filterItem = productItem.filter(val => val.menu_code == e.currentTarget.dataset.id);

      tabMenu.forEach(val => val.classList.remove('on'));
      btn.classList.add('on');

      e.currentTarget.dataset.id == 1 ? product(productItem) : product(filterItem);

      // header 메뉴 색 변경
      let headerMenu = document.querySelector('header .header_container .header_section .header_sec02 .gnb01 .depth01 > li:nth-child(2)')
      let subMenu = headerMenu.querySelectorAll('.depth02 li');
      
      subMenu.forEach(val => {
        let aTag = val.querySelector('a');

        let current = e.currentTarget.dataset.id;
        let menu = val.dataset.id;
        
        if (current == menu) {
          aTag.classList.add('on');
        } else {
          aTag.classList.remove('on');
        }
      })

      // ham 메뉴 색 변경
      let hamMenu = document.querySelector('.hamberger_menu .ham_container .ham_sec02 .depth01 > li:nth-child(2)');
      let hamSub = hamMenu.querySelectorAll('.depth02 li');

      hamSub.forEach(val => {
        let aTag = val.querySelector('a');
        
        let current = e.currentTarget.dataset.id;
        let menu = val.dataset.id;

        if (menu != 1) {
          if (current == menu) {
            aTag.classList.add('on');
          } else {
            aTag.classList.remove('on');
          }
        }
      })
    })
  })

  let params = new URLSearchParams(window.location.search);
  let categoryId = params.get('category');

  if (categoryId) {
    let selectedTab = [...tabMenu].find(btn => btn.dataset.id === categoryId);
    if (selectedTab) {
      selectedTab.click();
    }
  } else {
    product(productItem);
  }
}

tabBtn();