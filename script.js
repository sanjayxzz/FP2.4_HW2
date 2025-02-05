const items = [
  { Id: 1, Item: "item 1", status: "In Sale" },
  { Id: 2, Item: "item 2", status: "New Release" },
  { Id: 3, Item: "item 3", status: "New Release" },
  { Id: 4, Item: "item 4", status: "In Sale" },
  { Id: 5, Item: "item 5", status: "In Sale" },
];

const itemListContainer = document.querySelector("#itemList");
const filterRadioButtons = document.getElementsByName("status");

function renderItems(selectedStatus) {
  const filteredItems =
    selectedStatus === "all"
      ? items
      : items.filter((item) => item.status === selectedStatus);
  const itemListHTML = filteredItems
    .map(
      (item) => `
      <li>
        <strong>Id:</strong> ${item.Id}<br>
        <strong>Item:</strong> ${item.Item}<br>
        <strong>Status:</strong> ${item.status}
      </li>
      <hr />
    `
    )
    .join("");

  itemListContainer.innerHTML = itemListHTML;
}

// Initial render
renderItems("all");

// Add event listeners to radio buttons
filterRadioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener("change", function () {
    renderItems(this.value);
  });
});
