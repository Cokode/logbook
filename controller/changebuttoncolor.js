export function changeButtonColor() {
  
  let buy = document.querySelector('#buy');
  let sell = document.getElementById('sell');

  if (buy) {
    buy.addEventListener("mouseover", function() {
      buy.style.color = "white";
      buy.style.backgroundColor = "green";
    });

    buy.addEventListener("mouseout", function() {
      buy.style.color = ""; // Reset to default color
      buy.style.backgroundColor = ""; // Reset to default background color
    });
  }

  if (sell) {
    sell.addEventListener("mouseover", function() {
      sell.style.color = "white";
      sell.style.backgroundColor = "#da422e";

    });

    sell.addEventListener("mouseout", function() {
      sell.style.color = "red"; // Reset to default color
      sell.style.backgroundColor = "white"; // Reset to default background color
    });
  }
}