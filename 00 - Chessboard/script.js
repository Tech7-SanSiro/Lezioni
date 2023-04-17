var tbody = document.getElementById("chessboard");

for (var i = 0; i < 8; i++) {
  var tr = document.createElement("tr");

  for (var j = 0; j < 8; j++) {
    var td = document.createElement("td");

    if ((i + j) % 2 === 0) {
      td.className = "white";
    } else {
      td.className = "black";
    }

    tr.appendChild(td);
  }

  tbody.appendChild(tr);
}
