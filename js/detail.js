//메인페이지에서 받아온 id값 불러오기
const movieId = JSON.parse(localStorage.getItem("movieId"));
console.log(movieId);

//input 값들 불러오기
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const contentsInput = document.querySelector("#contents");
const commentBtn = document.querySelector("#comment-btn");

commentBtn.addEventListener("click", function () {
  if (
    nameInput.value === "" ||
    passwordInput.value === "" ||
    contentsInput.value === ""
  ) {
    return alert("내용을 입력해주세요.");
  }
  // console.log(`이름: ${nameInput.value}`);
  // console.log(`비밀번호: ${passwordInput.value}`);
  // console.log(`컨텐츠: ${contentsInput.value}`);
  let commentArr;
  let commentKey = `comment${movieId}`;
  // console.log(JSON.parse(localStorage.getItem(commentKey)))
  if (JSON.parse(localStorage.getItem(commentKey))) {
    commentArr = JSON.parse(localStorage.getItem(commentKey));
  } else {
    commentArr = [];
  }

  let commentValue = {
    writer: nameInput.value,
    password: passwordInput.value,
    contents: contentsInput.value,
  };
  commentArr.push(commentValue);
  localStorage.setItem(commentKey, JSON.stringify(commentArr));

  nameInput.value = "";
  passwordInput.value = "";
  contentsInput.value = "";
  alert("댓글이 성공적으로 작성되었습니다.");
});
