
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const inputEmail = document.querySelector('.user-email-input')
const inputPassword = document.querySelector('.user-password-input')


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



// email 정규표현식을 사용한 validation
function emailVali(text) {
  return emailReg(text) === false ? inputEmail.classList.add('is--invalid') : inputEmail.classList.remove('is--invalid')
}

// pw 정규표현식을 사용한 validation
function pwVali(text) {
  return pwReg(text) === false ? inputPassword.classList.add('is--invalid') : inputPassword.classList.remove('is--invalid')
}


// 로그인 버튼을 클릭시 조건처리
function login(id, pw) {
  if(id === user.id && pw === user.pw) window.location.href = 'welcome.html'
}

login(inputEmail.value, inputPassword.value)














