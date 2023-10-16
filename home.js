const tbody =document.querySelector(".tbody");

const datos = [1, 2, 3, 4, 5];

let tableNumbers = datos.map((num) => `<tr><td style="color: ${num%2 === 0 ? "yellow" : "green"}">Fila: ${num}</td></tr>`)

tbody.innerHTML = tableNumbers;
