const submitButton = document.getElementById("submitButton");
const tableBody = document.getElementById("tableBody");
submitButton.click();
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Previeni l'invio del form

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");

  // Crea la nuova riga della tabella
  const row = document.createElement("tr");
  const nomeCell = document.createElement("td");
  nomeCell.textContent = nomeInput.value;
  const emailCell = document.createElement("td");
  emailCell.textContent = emailInput.value;
  row.appendChild(nomeCell);
  row.appendChild(emailCell);
  tableBody.appendChild(row);

  // Resetta i campi del form
  nomeInput.value = "";
  emailInput.value = "";
});
