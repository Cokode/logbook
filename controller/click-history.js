import { logHistory } from "../view/history.js"

export default function historyclick() {

  document.getElementById("history-text").addEventListener("click", function() {
    logHistory();
    //window.onload
    this.style.color = "red";
  })
}


