// 아이디 정규식 검사
// 영어 대소문자와 숫자를 포함하여 6~12자리 이내면 true
export const idCheck = (id) => {
  let regExp = /[a-zA-Z0-9]{6,12}/i;
  return regExp.test(id);
};

// 닉네임 정규식 검사
// 특수문자를 제외한 3~8자리 문자가 아니면 false
export const nickCheck = (nick) => {
  let regExp = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if (nick.length < 3 || nick.length > 8 || regExp.test(nick)) {
    return false;
  } else {
    return true;
  }
};

// 패스워드 정규식 검사
// 숫자,영문으로 6~12자 이내면 true
export const passwordCheck = (password) => {
  let regExp = /[a-zA-Z0-9]{6,12}/i;

  return regExp.test(password);
};

export const emailCheck = (email) => {
  let _reg =
    /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

  return _reg.test(email);
};

export const commentCheck = (comment) => {
  let _reg = /.{5,100}/;
  return _reg.test(comment);
};
