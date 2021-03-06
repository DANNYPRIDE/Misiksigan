// 문자열+숫자로 이루어진 랜덤 5글자 반환
export const randomId = () => {
  return Math.random().toString(36).substring(2, 7);
};

// 이메일 형식인지 확인 (true 혹은 false 반환)
export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

// 숫자에 쉼표를 추가함. (10000 -> 10,000)
export const addCommas = (n: number) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// 13,000원, 2개 등의 문자열에서 쉼표, 글자 등 제외 후 숫자만 뺴냄
// 예시: 13,000원 -> 13000, 20,000개 -> 20000
export const convertToNumber = (string: string) => {
  return parseInt(string.replace(/(,|개|원)/g, ''));
};

// ms만큼 기다리게 함.
export const wait = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

// 숫자만 입력 받게
export const onlyNumber = (n: string) => {
  return n.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
};

// POST CODE
// export const handlePost = (
//   postCode: string,
//   address1: string,
//   address2: string,
// ) => {
//   new daum.Postcode({
//     oncomplete: function (data: string) {
//       postCode.value = data.zonecode;
//       address1.value = data.address;
//       address2.value = data.buildingName;
//     },
//   }).open();
// };

// date YYYY-MM-DD
export const dateYearMonthDay = (date: string) => {
  const result = date.split('-');
  let year = Number(result[0]);
  let month: string | number = Number(result[1]);
  month = month >= 10 ? month : '0' + month;
  let day = Number(result[2].slice(0, 2));
  const hyphenFormat = `${year}-${month}-${day}`;
  return hyphenFormat;
};
