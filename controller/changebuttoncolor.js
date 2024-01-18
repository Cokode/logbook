export function changeButtonColor() {
  document.getElementById('buy').addEventListener("mouseover", function() {

    this.style.color = "white";
    this.style.backgroundColor = "green";

    
  }); // assuming 'buy' is an ID, so use '#'
  //let buttonRed = document.querySelector('sell'); // assuming 'sell' is an ID, so use '#'

}