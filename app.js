//   change interval by clicking
const intervalSpans = document.querySelectorAll(".type span");
intervalSpans.forEach((span) => {
  span.addEventListener("click", () => {
    intervalSpans.forEach((s) => {
      s.classList.remove("selected");
    });
    span.classList.add("selected");
    // get json data
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        // loop all title names
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          const title = card.querySelector(".info span").innerHTML;
          // loop all json titles
          for (let i = 0; i < data.length; i++) {
            const current = card.querySelector(".second p");
            const previous = card.querySelector(".second p:nth-child(2)");
            if (data[i].title === title && span.innerHTML === "Daily") {
              current.innerHTML = `${data[i].timeframes.daily.current}hrs`;
              previous.innerHTML = `Last week - ${data[i].timeframes.daily.previous}hrs`;
            } else if (data[i].title === title && span.innerHTML === "Weekly") {
              current.innerHTML = `${data[i].timeframes.weekly.current}hrs`;
              previous.innerHTML = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
            } else if (
              data[i].title === title &&
              span.innerHTML === "Monthly"
            ) {
              current.innerHTML = `${data[i].timeframes.monthly.current}hrs`;
              previous.innerHTML = `Last week - ${data[i].timeframes.monthly.previous}hrs`;
            }
          }
        });
      })
      .catch((error) => console.error("Error loading JSON file:", error));
  });
});
