const nameInput = document.querySelector("#name-input");

document.getElementById("submit-button").addEventListener("click", () => {
  const sameMovies = document.querySelectorAll('input[type="radio"]:checked');
  alert(
    `${nameInput.value}님, 저와 ${sameMovies.length}개의 취향이 같으시네요!`
  );
});

document.getElementById("cancel-button");
