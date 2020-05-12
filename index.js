  function verificarCheckbox() {
    const aceiteButton = window.document.getElementById('aceitoCheckboxId');
if (aceiteButton.checked)  {
  document.getElementById("fazerTesteLink").style.display = "block";
} else {
  document.getElementById("fazerTesteLink").style.display = "none";
}
  }