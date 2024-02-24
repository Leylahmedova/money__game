const form = document.getElementById("form");
const search = document.getElementById("search");
const submit = document.getElementById("submit");
const main = document.getElementById("main");
const money = [500, 200, 100, 50, 20, 10, 5, 1];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";
  let amount = +search.value;
  money.map((a) => {
    let count = Math.trunc(amount / a);
    amount = amount - count * a;
    if (count) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let i = 0; i < count && i < 5; i++) {
        const image = document.createElement("img");
        image.classList.add("img");
        image.src = `./images/${a}.jpg`;
        image.style.left = `${i * 60}px`;
        row.append(image);
      }
      if (count > 5) {
        const h1 = document.createElement("h1");
        h1.textContent = `${count - 5}X`;
        row.append(h1);
      }
      main.append(row);
    }
  });
});
