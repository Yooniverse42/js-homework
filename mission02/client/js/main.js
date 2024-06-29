import { data } from './data.js'

/* ---------------------------------- 노드 생성 --------------------------------- */
function getNode(node, context = document) {
  if(context.nodeType !== 9) context = document.querySelector(context);
  return context.querySelector(node);
}

const nav = getNode('.nav');


/* ------------------------------ is-active 추가 ------------------------------ */
function addActive(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  
  if(!target) return;

  const navUl = getNode('ul', 'nav')
  const ulChildren = [...navUl.children]

  ulChildren.forEach(li => li.classList.remove('is-active'))
  target.classList.add('is-active')
}
// nav.addEventListener('click', addActive);


/* --------------------------------- 배경색 변경 --------------------------------- */
function setBgColor(e){
  e.preventDefault();
  const target = e.target.closest('li');
  
  if(!target) return;

  const index = target.dataset.index;
  const body = getNode('body');

  body.style.background = `
  linear-gradient(to bottom, ${data[index-1].color[0]}, ${data[index-1].color[1]})
  `;
  body.style.transition = `
  all 0.3
  `;

}
// nav.addEventListener('click', setBgColor);


/* --------------------------------- 이미지 변경 --------------------------------- */
function setImage(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  
  if(!target) return;

  const index = target.dataset.index;
  const poster = getNode('.visual > div > img');
  poster.src = `./assets/${data[index-1].name}.jpeg`;
  poster.alt = data[index-1].alt;
}
// nav.addEventListener('click', setImage);


/* ---------------------------------- 제목 변경 --------------------------------- */
function setNameText(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  
  if(!target) return;

  const index = target.dataset.index;
  const nickName = getNode('.nickName');
  nickName.textContent = `${data[index-1].name}`;
}
// nav.addEventListener('click', setNameText);


/* ----------------------------------- !실행! ---------------------------------- */
function handleClick(e){
  try {
    addActive(e);
    setBgColor(e);
    setImage(e);
    setNameText(e);
  }catch {
    console.log('에러남');
  }

}

nav.addEventListener('click', handleClick);



