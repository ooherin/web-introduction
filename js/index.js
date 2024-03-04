import { movies } from "../data/movies.js";
import { movieDataHTMLTemplate, movieSelectHTMLTemplate } from "./template.js";

const $nameInput = document.querySelector("#name-input");
const $submitButton = document.getElementById("submit-button");
const $retryButton = document.getElementById("reset-button");

//영화 테이블에 데이터 렌더링
const movieDataHTML = movies
  .map((movie) => {
    const { id, title, posterUrl, detail, link } = movie;
    return movieDataHTMLTemplate(id, title, posterUrl, detail, link);
  })
  .join("");

const tbody = document.querySelector("tbody");
tbody.insertAdjacentHTML("beforeend", movieDataHTML);

//영화 선택박스 렌더링
const movieSelectHTML = movies
  .map((movie) => {
    return movieSelectHTMLTemplate(movie.title, movie.enTitle);
  })
  .join("");

const selectMovieBox = document.querySelector("#select-like-movies-box");
selectMovieBox.insertAdjacentHTML("beforeend", movieSelectHTML);

//제출 버튼 로직
$submitButton.addEventListener("click", () => {
  submitInputs();
});

const submitInputs = () => {
  if (!validateNameInputVacant()) {
    alert("이름을 먼저 입력해 주세요!");
    $nameInput.focus();
    return;
  }
  checkMovieMatch();
  resetInputs();
};

const checkMovieMatch = () => {
  const $sameMovies = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  if (!$sameMovies.length) {
    return alert(`${$nameInput.value}님, 저랑 다른 취향의 소유자시군요!`);
  }
  alert(
    `${$nameInput.value}님, 저와 ${$sameMovies.length}개의 취향이 같으시네요!`
  );
};

const validateNameInputVacant = () => {
  return $nameInput.value;
};

//리셋 버튼 로직
$retryButton.addEventListener("click", () => {
  resetInputs();
});

//리셋인풋
const resetInputs = () => {
  $nameInput.value = "";
  const $movies = document.querySelectorAll('input[type="checkbox"]');
  [...$movies].forEach((movie) => {
    movie.checked = false;
  });
  $nameInput.focus();
};
