export const movieDataHTMLTemplate = (id, title, posterUrl, detail, link) => {
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

export const movieSelectHTMLTemplate = (title, enTitle) => {
  return `<span>${title}</span>
 <input type="checkbox" name=${enTitle} />`;
};
