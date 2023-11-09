window.addEventListener("DOMContentLoaded", () => {
  bindTrade();
});

function bindTrade() {
  const elements = document.querySelectorAll(".btn-danger");
  const tradeContainer = document.querySelector("#trade-list-container");

  elements.forEach((e) => {
    e.addEventListener("click", ($event) => {
      const tradeId = $event.target.getAttribute("tradeid");
      axios
        .delete("/trades/" + tradeId)
        .then(function (response) {
          tradeContainer.innerHTML = response.data;
          bindTrade();
        })
        .catch(function (err) {
          console.log(err);
        });
    });
  });
}
