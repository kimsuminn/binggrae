/* header.js */

// header_top
function headerTop() {
  let menuName = [
    {
      name: '구매포털시스템',
      img: 'https://kimsuminn.github.io/binggrae/img/main/link_arrow02.png',
      alt: 'link_arrow',
      link: 'https://srm.bing.co.kr/'
    },
    {
      name: '인재채용',
      img: 'https://kimsuminn.github.io/binggrae/img/main/link_arrow02.png',
      alt: 'link_arrow',
      link: 'https://recruit.bing.co.kr/app/web/main/index_new.jsp'
    }
  ]

  let headerTopList = document.querySelector('header .header_top ul');
  let addMenu = menuName.map(val => {
    return `
      <li>
        <a href=${val.link} target="_blank">
          <span>${val.name}</span>
          <img src=${val.img} alt=${val.alt}>
        </a>
      </li>
    `;
  }).join("");

  headerTopList.innerHTML = addMenu;
}

headerTop();

// header_container
function headerContainer() {
  // section 01
  function sec01() {
    let logo = [
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/logo-pc.png',
        alt: 'logo',
        className: 'web'
      },
      {
        img: 'https://kimsuminn.github.io/binggrae/img/main/logo_mo.png',
        alt: 'logo',
        className: 'mo'
      }
    ]
  
    let section01 = document.querySelector('header .header_container .header_section .header_sec01');
    let logoList = logo.map(val => {
      return `
        <img src=${val.img} alt=${val.alt} class=${val.className}>
      `;
    }).join("");
  
    section01.innerHTML = `
      <a href="./index.html">
        ${logoList}
      </a>
    `;
  }

  sec01();

  // section 02
  function sec02() {
    let menu = [
      {
        id: 1,
        title: '회사소개',
        subMenu: ['CEO 인사말', '경영이념', '사업분야', '히스토리']
      },
      {
        id: 2,
        title: '제품소개',
        subMenu: ['아이스크림', '우유/치즈', '발효유', '커피', '주스', '음료', '스낵/디저트', '건강지향', '수출제품']
      },
      {
        id: 3,
        title: '지속가능경영',
        subMenu: ['지속가능경영 체계', 'Eco-Friendly', 'Shared Value', 'Global Integrity', '윤리준법경영', '사회공헌', '보고서 및 정책']
      },
      {
        id: 4,
        title: '투자정보',
        subMenu: ['재무정보', '주식정보', '전자공고', '공시정보', 'IR자료실']
      },
      {
        id: 5,
        title: '뉴스룸',
        subMenu: ['새소식', '보도자료', '빙그레 스토리', '미디어<br>라이브러리']
      },
      {
        id: 6,
        title: '고객센터',
        subMenu: ['고객상담', '제품공급문의', '사이버 신고센터', '안전신문고']
      }
    ]

    let header = document.querySelector('header');
    let headerContainer = document.querySelector('header .header_container');
    let headerSection = document.querySelector('header .header_container .header_section');
    let section02 = document.querySelector('header .header_container .header_section .header_sec02');
    
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    
    nav.classList.add('gnb01');
    ul.classList.add('depth01');

    section02.appendChild(nav);
    nav.appendChild(ul);

    let menuList = menu.map(val => {

      let sub = val.subMenu;

      if (val.title === '제품소개') {
        let subList = sub.map((val2, idx) => {
          return `
            <li data-id=${idx+2}><a href="./product.html?category=${idx+2}">${val2}</a></li>
          `;
        }).join("");

        return `
          <li data-id=${val.id}>
            <a href="./product.html?category=1">${val.title}</a>
            <ul class="depth02">
              ${subList}
            </ul>
          </li>
        `;
      } else {
        let subList = sub.map(val2 => {
          return `
            <li><a href="#">${val2}</a></li>
          `;
        }).join("");

        return `
        <li>
          <a href="#">${val.title}</a>
          <ul class="depth02">
            ${subList}
          </ul>
        </li>
      `;
      }
    }).join("");

    ul.innerHTML = menuList;

    let gnb = document.querySelector('header .header_container .header_section .header_sec02 .gnb01');
    let mainMenu = document.querySelectorAll('header .header_container .header_section .header_sec02 .gnb01 .depth01 > li');

    function subMenuOpacity(op) {
      let subMenu = document.querySelectorAll('header .header_container .header_section .header_sec02 .gnb01 .depth01 > li > .depth02');
      subMenu.forEach(val => {
        let subMenuList = val.querySelectorAll('li');
        subMenuList.forEach(val => {
          val.style.opacity = `${op}`;
        })
      })
    }

    mainMenu.forEach(val => {

      val.addEventListener('mouseenter', () => {
        header.classList.add('on');
        header.style.borderRadius = '0 0 40px 40px';
        header.style.boxShadow = '0 1px 8px rgba(0, 0, 0, 0.1)';
        headerContainer.style.height = 'calc(120px + 420px)';
        headerSection.style.borderBottom = '1px solid #e7e7e7';
        subMenuOpacity(1);
        gnb.classList.add('visible');
      })

      val.addEventListener('mouseleave', () => {
        if (scrollY > 0) {
          header.classList.add('on');
          headerSection.style.borderBottom = '1px solid #e7e7e7';
        } else {
          header.classList.remove('on');
          headerSection.style.borderBottom = '1px solid transparent';
        }
        header.style.borderRadius = '0';
        header.style.boxShadow = 'none';
        headerContainer.style.height = '120px';
        subMenuOpacity(0);
        gnb.classList.remove('visible');
      })
    })


    // url에 따라 header menu 색상 변경
    mainMenu.forEach(val => {
      let mainA = val.querySelector('a');
      let path = window.location.pathname.split('/').pop();
      
      if (path == 'product.html') {
        if (Number(val.dataset.id) === 2) {
          mainA.classList.add('on');
        }
      }

      let sub = val.querySelectorAll('.depth02 li');
      let params = new URLSearchParams(window.location.search);
      let number = params.get('category');

      sub.forEach(menu => {
        let subA = menu.querySelector('a');
        let subId = Number(menu.dataset.id);

        if (subId == number) {
          subA.classList.add('on');
        } else {
          subA.classList.remove('on');
        }
      })
    })
  }

  sec02();

  function sec03() {
    let section03 = document.querySelector('.header_sec03 .right');
    section03.innerHTML = `
      <div class="lang">
        <p>
          <span>KR</span>
          <span class="triangle">
            <img src="https://kimsuminn.github.io/binggrae/img/layout/lang_btn.png" alt="lang_btn">
          </span>
        </p>
        <ul>
          <li><a href="./index.html">KR</a></li>
          <li><a href="./index.html">EN</a></li>
        </ul>
      </div>
    `;

    let langBtn = section03.querySelector('.lang p');
    langBtn.addEventListener('click', () => {
      let headerContainer = document.querySelector('header .header_container');
      let langList = section03.querySelector('.lang ul');
      headerContainer.classList.toggle('on');
      langList.classList.toggle('on');
    })

    // hamberger
    let ham = document.createElement('div');
    ham.classList.add('hamberger');
    section03.appendChild(ham);

    ham.innerHTML = `
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
      </a>
    `;

    let section02 = document.querySelector('header .header_container .header_section .header_sec02');
    let hamBtn = document.querySelector('.header_sec03 .right .hamberger a');
    let hamMenu = document.querySelector('.hamberger_menu');
    let hamContainer = document.querySelector('.hamberger_menu .ham_container');
    let body = document.querySelector('body');

    hamBtn.addEventListener('click', (e) => {
      e.preventDefault();
      hamBtn.classList.toggle('on');

      if (hamBtn.classList.contains('on')) {
        section02.style.display = 'none';
        hamMenu.style.right = '0';
        hamContainer.style.opacity = '1';
        body.style.overflow = 'hidden';
      } else {
        if (innerWidth > 1024) {
          section02.style.display = 'block';
        }
        hamMenu.style.right = '-100%';
        hamContainer.style.opacity = '0';
        body.style.overflow = 'visible';
      }
    })
  }

  sec03();
}

headerContainer();

function headerScroll() {
  let header = document.querySelector('header');
  let headerSection = document.querySelector('header .header_container .header_section');
  let gnb = document.querySelector('header .header_container .header_section .header_sec02 .gnb01');

  document.addEventListener('scroll', () => {
    if (scrollY > 0) {
      header.classList.add('on');
      headerSection.style.borderBottom = '1px solid #e7e7e7';
    } else {
      if (gnb.classList.contains('visible')) {
        header.classList.add('on');
      } else {
        header.classList.remove('on');
        headerSection.style.borderBottom = '1px solid transparent';
      }
    }
  })
}

headerScroll();

function hamMenu() {
  // section 02
  let hamSection02 = document.querySelector('.hamberger_menu .ham_container .ham_sec02');
  
  let depth01 = document.createElement('ul');
  depth01.classList.add('depth01');

  let hamMenuList = [
    {
      id: 1,
      main: '회사소개',
      sub: ['CEO 인사말', '경영이념', '사업분야', '히스토리']
    },
    {
      id: 2,
      main: '제품소개',
      sub: ['전체보기', '아이스크림', '우유/치즈', '발효유', '커피', '주스', '음료', '스낵/디저트', '건강지향', '수출제품']
    },
    {
      id: 3,
      main: '지속가능경영',
      sub: ['지속가능경영 체계', 'Eco-Friendly', 'Shared Value', 'Global Integrity', '윤리준법경영', '사회공헌', '보고서 및 정책']
    },
    {
      id: 4,
      main: '투자정보',
      sub: ['재무정보', '주식정보', '전자공고', '공시정보', 'IR자료실']
    },
    {
      id: 5,
      main: '뉴스룸',
      sub: ['새소식', '보도자료', '빙그레 스토리', '미디어 라이브러리']
    },
    {
      id: 6,
      main: '고객상담',
      sub: ['고객상담', '1:1 문의하기', '제품공급문의', '사이버 신고센터', '안전신문고', '개인정보처리방침']
    }
  ]

  let hamInner = hamMenuList.map((val, idx) => {
    let subMenu = val.sub;

    if (val.main === '제품소개') {
      let subMenuList = subMenu.map((val, idx) => {
        return `
          <li data-id=${idx+1}>
            <a href="./product.html?category=${idx+1}">${val}</a>
            <figure><img src="https://kimsuminn.github.io/binggrae/img/layout/pc_ham_hover_img.png" alt="ham_hover"></figure>
          </li>
        `;
      }).join("");

      return `
        <li data-id=${val.id}>
          <a href="#">
            <span>${val.main}</span>
            <figure class="mo"><img src="https://kimsuminn.github.io/binggrae/img/main/m_ham_menu_btn.png" alt="mo" class='img_${idx + 1}'></figure>
          </a>
          <ul class="depth02">
            ${subMenuList}
          </ul>
        </li>
      `;
    } else {
      let subMenuList = subMenu.map(val => {
        return `
          <li>
            <a href="#">${val}</a>
            <figure><img src="https://kimsuminn.github.io/binggrae/img/layout/pc_ham_hover_img.png" alt="ham_hover"></figure>
          </li>
        `;
      }).join("");

      return `
        <li>
          <a href="#">
            <span>${val.main}</span>
            <figure class="mo"><img src="https://kimsuminn.github.io/binggrae/img/main/m_ham_menu_btn.png" alt="mo" class='img_${idx + 1}'></figure>
          </a>
          <ul class="depth02">
            ${subMenuList}
          </ul>
        </li>
      `;
    }
  }).join("");

  depth01.innerHTML = hamInner;
  hamSection02.appendChild(depth01);

  // moblie ham menu
  function mobileHam() {
    // ham section01
    let section01 = document.querySelector('.hamberger_menu .ham_container .ham_sec01');
    let container = document.createElement('div');

    container.classList.add('sec01_container');

    let ulList = document.createElement('ul');
    let sec01_menu = [
      {
        name: '구매포털시스템',
        link: 'https://srm.bing.co.kr/'
      },
      {
        name: '인재채용',
        link: 'https://recruit.bing.co.kr/app/web/main/index_new.jsp'
      }
    ]

    let liEel = sec01_menu.map(val => {
      return `
        <li>
          <a href=${val.link} target="_blank">
            <span>${val.name}</span>
            <img src="https://kimsuminn.github.io/binggrae/img/main/link_arrow02.png" alt="link_arrow">
          </a>
        </li>
      `;
    }).join("");

    ulList.innerHTML = liEel;
    section01.appendChild(container);
    container.appendChild(ulList);

    // close btn
    let closeBtn = document.createElement('button');
    closeBtn.classList.add('ham_close');
    closeBtn.setAttribute('type', 'button');
    closeBtn.innerHTML = `<img src='https://kimsuminn.github.io/binggrae/img/main/ham_close.png' alt='close'>`;

    container.appendChild(closeBtn);

    // ham section02
    let arrowBtn = document.querySelectorAll('.hamberger_menu .ham_container .ham_sec02 .depth01 > li');
    let arrowImgs = document.querySelectorAll('.hamberger_menu .ham_container .ham_sec02 .depth01 > li > a img');
    let depth02 = document.querySelectorAll('.hamberger_menu .ham_container .ham_sec02 .depth01 > li .depth02');
    let depthList = Array.from(depth02);
    
    arrowBtn.forEach(val => {
      let aTag = val.querySelector('.depth01 > li > a');
      let arrowImg = val.querySelector('.mo img');
      let ulList = val.querySelector('.depth02');
      let liList = ulList.querySelectorAll('li');
      
      aTag.addEventListener('click', (e) => {
        e.preventDefault();

        if (innerWidth > 1024) {
          return;
        }

        arrowImg.classList.toggle('on');

        arrowImgs.forEach((val2, idx) => {
          if (val2.classList.contains('on')) {
            if (arrowImg !== val2) {
              val2.classList.remove('on');
              if (depthList[idx].style.height !== '0') {
                depthList[idx].style.height = '0';
              }
            }
          }
        })

        if (arrowImg.classList.contains('on')) {
          ulList.style.height = `${liList.length * 50}px`;
        } else {
          ulList.style.height = '0';
        }

      })
    })

    // ham section03
    let section03 = document.querySelector('.hamberger_menu .ham_container .ham_sec03');
    let lang = document.createElement('ul');
    let aTag = document.createElement('a');

    lang.classList.add('lang_2');
    lang.innerHTML = `
      <li class='on'><a href="./index.html">KR</a></li>
      <li><a href="./index.html">EN</a></li>
    `;

    aTag.innerText = '오시는길';

    section03.appendChild(lang);
    section03.appendChild(aTag);
  }

  mobileHam();

  // close btn
  let closeBtn = document.querySelector('.hamberger_menu .ham_container .ham_sec01 button');
  let hamBtn = document.querySelector('.header_sec03 .right .hamberger a');
  let hamMenu = document.querySelector('.hamberger_menu');
  let hamContainer = document.querySelector('.hamberger_menu .ham_container');
  let body = document.querySelector('body');
  
  closeBtn.addEventListener('click', () => {
    hamMenu.style.right = '-100%';
    body.style.overflow = 'visible';
    
    if (hamBtn.classList.contains('on')) {
      hamBtn.classList.remove('on');
    }
  })

  // 외부영역 클릭시 ham menu 닫힘
  document.addEventListener('click', (e) => {
    if (window.innerWidth > 1024) {
      return;
    }

    if (hamContainer.contains(e.target) || hamBtn.contains(e.target)) {
      return;
    }

    if (hamBtn.classList.contains('on')) {
      hamBtn.classList.remove('on');
      hamMenu.style.right = '-100%';
      body.style.overflow = 'visible';
    }
  })

  // url에 따라 ham 메뉴 글자색 변경
  let hamMain = document.querySelectorAll('.hamberger_menu .ham_container .ham_sec02 .depth01 > li');
  
  hamMain.forEach(val => {
    let mainA = val.querySelector('a');
    let path = window.location.pathname.split('/').pop();

    if (path == 'product.html') {
      if (Number(val.dataset.id) === 2) {
        if (innerWidth > 1024) {
          val.classList.add('on');
        }
        mainA.classList.add('on');
        mainA.style.color = '#E72F28';

        let hamSub = val.querySelectorAll('.depth02 li');
        let params = new URLSearchParams(window.location.search);
        let number = params.get('category');

        hamSub.forEach(sub => {
          let subA = sub.querySelector('a');
          let subId = Number(sub.dataset.id);
          
          if (subId == number) {
            subA.classList.add('on');
          } else {
            subA.classList.remove('on');
          }

          if (subId == 1) {
            subA.classList.add('on');
          }
          
        });
      }
    }
  });
}

hamMenu();

// aside btn
function help() {
  let chatBtn = document.querySelector('aside .chat .help');
  let textBox = document.querySelector('aside .chat .text_box');

  chatBtn.addEventListener('mouseenter', () => {
    textBox.style.display = 'block';
  })

  chatBtn.addEventListener('mouseleave', () => {
    textBox.style.display = 'none';
  })

  // chat box
  let chatBox = document.querySelector('.chat_box');

  chatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    chatBox.classList.toggle('open');
  })

  let closeChat = document.querySelector('.chat_box .chat_inner .chat_sec01 figure');
  closeChat.addEventListener('click', () => {
    chatBox.classList.remove('open');
  })

  // chat sec02
  let chatMenu = document.querySelector('.chat_box .chat_inner .chat_sec02 .menu');
  let clickMenu = chatMenu.querySelector('.menu .title');
  let showMenu = chatMenu.querySelector('.menu .menu_container');
  let closeMenu = chatMenu.querySelector('.menu .menu_container .menu_wrap button');
  
  clickMenu.addEventListener('click', () => {
    chatMenu.style.boxShadow = 'none';
    showMenu.style.height = '408px';
  })

  closeMenu.addEventListener('click', () => {
    chatMenu.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.2)';
    showMenu.style.height = '0';
  })

  // chat box close
  document.addEventListener('click', (e) => {
    if (chatBox.contains(e.target) || chatBtn.contains(e.target)) {
      return;
    }

    if (chatBox.classList.contains("open")) {
      chatBox.classList.remove("open");
    }
  })
}

help();

function topBtn() {
  let header = document.querySelector('header');
  let btn = document.querySelector('aside .top');
  let img = document.querySelector('aside .top img');

  if (scrollY == 0) {
    bottom();
  }

  document.addEventListener('scroll', () => {
    if (scrollY <= header.clientHeight) {
      img.style.transform = 'rotate(180deg)';
      bottom();
    } else {
      img.style.transform = 'rotate(0)';
      top();
    }
  })

  function top() {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    })
  }

  function bottom() {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    })
  }
}

topBtn();

// 챗봇 창 드래그 
// function chatBotDrag() {
//   let draggable = document.querySelector('.chat_box');
//   let title = document.querySelector('.chat_box .chat_inner .chat_sec01');
//   let isDragging = false;
//   let offsetX, offsetY;

//   draggable.addEventListener('mousedown', (e) => {
//     isDragging = true;

//     offsetX = e.clientX - draggable.offsetLeft;
//     offsetY = e.clientY - draggable.offsetTop;

//     title.style.cursor = 'grabbing';
//     title.style.userSelect = 'none';
//   });

//   document.addEventListener('mousemove', (e) => {
//     if (isDragging) {
//       let x = e.clientX - offsetX;
//       let y = e.clientY - offsetY;

//       if (x < 0) {
//         x = 8;
//       }

//       if (y < 0) {
//         y = 8;
//       }

//       draggable.style.left = `${x}px`;
//       draggable.style.top = `${y}px`;
//     }
//   });

//   document.addEventListener('mouseup', () => {
//     isDragging = false;
//     title.style.cursor = 'grab';
//   })
// }

// if (innerWidth > 769) {
//   chatBotDrag();
// }


// init
window.addEventListener('resize', () => {
  let section02 = document.querySelector('.header_sec02');
  let hamBtn = document.querySelector('.header_sec03 .right .hamberger a');
  let hamMenu = document.querySelectorAll('.ham_sec02 .depth01 > li .depth02');
  
  if (innerWidth > 1024) {
    section02.style.display = 'block';

    if (hamBtn.classList.contains('on')) {
      section02.style.display = 'none';
    }
  } else if (innerWidth <= 1024) {
    section02.style.display = 'none';
  }

  hamMenu.forEach(val => {
    if (innerWidth > 1024) {
      val.style.height = 'auto';
    } else if (innerWidth <= 1024) {
      let arrowBtn = document.querySelectorAll('.hamberger_menu .ham_container .ham_sec02 .depth01 > li');

      arrowBtn.forEach(val => {
        let arrowImg = val.querySelector('.mo img');

        if (arrowImg.classList.contains('on')){
          arrowImg.classList.remove('on');
        }
      })
      val.style.height = '0';
    }
  })

  let hamMain = document.querySelectorAll('.hamberger_menu .ham_container .ham_sec02 .depth01 > li');
  
  hamMain.forEach(val => {
    let path = window.location.pathname.split('/').pop();
    
    if (path == 'product.html') {
      if (Number(val.dataset.id) === 2) {
        innerWidth > 1024 ? val.classList.add('on') : val.classList.remove('on');
      }
    }
  });
})