// main section 01
function searchItem() {
  let items = ['바나나맛우유', '더단백', '슈퍼콘', '요플레', '아카페라'];
  let itemList = document.querySelector('.front_container main .main_container .section_01 .item');

  let addItem = items.map(val => {
    return `
      <li><a href="#">#${val}</a></li>
    `;
  }).join("");

  itemList.innerHTML = addItem;
}

searchItem();

// section 02
let slide_item_01 = [
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/ice-cream.png',
    item: '아이스크림'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/milk.png',
    item: '우유/치즈'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/yogurt.png',
    item: '발효유'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/coffee.png',
    item: '커피'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/juice.png',
    item: '주스'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/drink.png',
    item: '음료'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/snack.png',
    item: '스낵/디저트'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/health.png',
    item: '건강지향'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/category/export.png',
    item: '수출제품'
  }
]

let slide_item_02 = [
  {
    img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo01.png',
    mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo01.png',
    text: '빙그레 건강 tft의<br>단백질 전문 브랜드'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo02.png',
    mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo02.png',
    text: '부담없는 캐주얼한 커피'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo03.png',
    mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo03.png',
    text: '39년 전통의<br>대한민국 Heritage'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo04.png',
    mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo04.png',
    text: '대한민국을 대표하는<br>No.1 가공우유'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo05.png',
    mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo05.png',
    text: '진한맛의 감동<br>프리미엄 아이스크림'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo06.png',
    mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo06.png',
    text: '남자를 위한 건강플랜,<br>마노플랜'
  },
  {
    img: 'https://kimsuminn.github.io/binggrae/img/main/sec02_logo07.png',
    mimg: 'https://kimsuminn.github.io/binggrae/img/main/m_sec02_logo07.png',
    text: '맛과 건강의 완벽한 조화,<br>비바시티'
  },
]

function product() {
  function slide01() {
    let slide_01 = document.querySelector('main .main_container .section_02 .sec02_slider_01 .swiper-wrapper')
  
    let slideAdd_01 = slide_item_01.map((val, idx) => {
      return `
        <li class="swiper-slide">
          <a href="#">
            <figure><img src=${val.img} alt=${idx + 1}></figure>
            <span>${val.item}</span>
          </a>
        </li>
      `;
    }).join("");
  
    slide_01.innerHTML = slideAdd_01;
  
    let slideHover = slide_01.querySelectorAll('.swiper-slide');
    slideHover.forEach((val, idx) => {
      let spanTag = val.querySelector('a span');
      
      val.addEventListener('mouseenter', () => {
        spanTag.style.backgroundColor = '#E5352A';
        spanTag.style.color = '#fff';
        spanTag.textContent = 'VIEW MORE';
      })
  
      val.addEventListener('mouseleave', () => {
        spanTag.style.backgroundColor = '#F9F9F9';
        spanTag.style.color = 'inherit';
        spanTag.textContent = `${slide_item_01[idx].item}`;
      })
    })
  
    let swiper_1 = new Swiper(".swiper_01", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 6,
      spaceBetween: 16,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        770: {
          slidesPerView: 6,
          spaceBetween: 16,
          slidesPerGroup: 1,
        },
      }
    });
  }

  slide01();

  function slide02() {
    let slide_02 = document.querySelector('main .main_container .section_02 .sec02_slider_02 .swiper-wrapper')
  
    let slideAdd_02 = slide_item_02.map((val, idx) => {
      return `
        <li class="swiper-slide">
          <div class="wrap">
            <img src=${val.img} alt=${idx + 1} class="title">
            <div class="hover">
              <div class="content">
                <img src=${val.img} alt=${idx + 1}>
                <span></span>
                <p>${val.text}</p>
              </div>
              <button type="button">구입하기</button>
            </div>
          </div>
        </li>
      `;
    }).join("");
  
    slide_02.innerHTML = slideAdd_02;

    function imgChange() {
      let li = slide_02.querySelectorAll('.swiper-slide');

      if (innerWidth <= 1024) {
        li.forEach((val, idx) => {
          let img = val.querySelector('.title');
          img.src = slide_item_02[idx].mimg;
        })
      } else {
        li.forEach((val, idx) => {
          let img = val.querySelector('.title');
          img.src = slide_item_02[idx].img;
        })
      }
    }

    imgChange();

    let swiper_2 = new Swiper(".swiper_02", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 10,
          slidesPerGroup: 3,
        },
        770: {
          slidesPerView: 4,
          spaceBetween: 0,
          slidesPerGroup: 1,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        1300: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
      }
    });
  }

  slide02();
}

product();

// section 03
let qnaList = [
  '빙그레 건강기능식품을 주문할 수 있는 몰이 따로 있나요?',
  '아이스크림에는 왜 소비기한이 없나요?',
  '제품 소비기한 뒤에 있는 알파벳 기호는 무엇인가요?',
  '아이스크림, 음료 등 제품 공급(납품) 관련 문의드리고 싶어요.',
  '요플레 분리배출(라벨 제거) 방법 알려주세요.',
  '빙그레 제품을 구입할 수 있는 온라인 몰이 있나요?'
]

function counsel() {
  let qna = document.querySelector('.section_03 .contents_box .qna .qna_list');
  let list = qnaList.map(val => {
    return `
      <li>
        <a href="#">
          <p>Q. ${val}</p>
          <figure>
            <img src="https://kimsuminn.github.io/binggrae/img/main/link_arrow01.png" alt="link_arrow" class="webTab">
            <img src="https://kimsuminn.github.io/binggrae/img/main/m_link_arrow01.png" alt="link_arrow" class="mobile">
          </figure>
        </a>
      </li>
    `;
  }).join("");

  qna.innerHTML = list;
}

counsel();

// scroll event
function scrollEvent() {
  let slide_01 = document.querySelector('main .main_container .section_02 .slider .swiper_01 .swiper-wrapper');
  let slide_02 = document.querySelector('main .main_container .section_02 .slider .swiper_02 .swiper-wrapper');
  let counsel = document.querySelector('main .main_container .section_03 .contents_box .counsel');
  let qnaBtn = document.querySelector('main .main_container .section_03 .contents_box .qna .qna_title button');
  let box = document.querySelector('main .main_container .section_04 .allbox');
  
  function onScroll(el) {
    let elTop = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    elTop < windowHeight ? el.classList.add('visible') : el.classList.remove('visible');
  }

  window.addEventListener('scroll', () => {
    onScroll(slide_01);
    onScroll(slide_02);
    onScroll(counsel);
    onScroll(qnaBtn);
    onScroll(box);
  });
}

scrollEvent();

// resize
window.addEventListener('resize', () => {
  let li = document.querySelectorAll('.sec02_slider_02 .swiper .swiper-wrapper .swiper-slide');
  let sec03Img = document.querySelectorAll('.section_03 .contents_box .counsel > div');
  if (innerWidth <= 1024) {
    li.forEach((val, idx) => {
      let img = val.querySelector('.title');
      img.src = slide_item_02[idx].mimg;
    })

    sec03Img[0].style.backgroundImage = 'url(https://kimsuminn.github.io/binggrae/img/main/m_sec04_backimg01.png)';
    sec03Img[1].style.backgroundImage = 'url(https://kimsuminn.github.io/binggrae/img/main/m_sec04_backimg02.png)';
  } else if (innerWidth > 1024) {
    li.forEach((val, idx) => {
      let img = val.querySelector('.title');
      img.src = slide_item_02[idx].img;
    })

    sec03Img[0].style.backgroundImage = 'url(https://kimsuminn.github.io/binggrae/img/main/sec04_backimg01.png)';
    sec03Img[1].style.backgroundImage = 'url(https://kimsuminn.github.io/binggrae/img/main/sec04_backimg02.png)';
  }

  let sectionTitle = document.querySelector('.section_04 h2');
  if (innerWidth <= 440) {
    sectionTitle.innerHTML = '빙그레 임직원 및 종사자<br>온라인 제보';
  } else if (innerWidth > 440) {
    sectionTitle.innerHTML = '빙그레 임직원 및 종사자 온라인 제보';
  }
})