import { movies } from "../data/movies.js";

const nameInput = document.querySelector("#name-input");

document.getElementById("submit-button").addEventListener("click", () => {
  const sameMovies = document.querySelectorAll('input[type="radio"]:checked');
  alert(
    `${nameInput.value}님, 저와 ${sameMovies.length}개의 취향이 같으시네요!`
  );
});

const movieDataHTMLTemplate = (id, title, posterUrl, detail, link) => {
  return `
  <tr>
    <td>${id}</td>
    <td>${title}</td>
    <td>
      <img
        src=${posterUrl}
        class="poster"
        alt=${title} 포스터
      />
    </td>
    <td>${detail}</td>
    <td><a href=${link}>바로가기</a></td>
  </tr>
`;
};

const movieDataHTML = movies
  .map((movie) => {
    const { id, title, posterUrl, detail, link } = movie;
    return movieDataHTMLTemplate(id, title, posterUrl, detail, link);
  })
  .join("");

const tbody = document.querySelector("tbody");
tbody.insertAdjacentHTML("beforeend", movieDataHTML);

const movieSelectHTMLTemplate = (title, enTitle) => {
  return `<span>${title}</span>
 <input type="radio" name=${enTitle} />`;
};

const movieSelectHTML = movies
  .map((movie) => {
    return movieSelectHTMLTemplate(movie.title, movie.enTitle);
  })
  .join("");

const selectMovieBox = document.querySelector("#select-like-movies-box");
selectMovieBox.insertAdjacentHTML("beforeend", movieSelectHTML);
