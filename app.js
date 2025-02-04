let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  console.log(input.value);
  let name = input.value;
  if (name === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(name);
    input.value = "";
  }
}