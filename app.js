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

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos disponibles.");
  } else {
    let randomIndex = Math.floor(Math.random() * amigos.length);
    console.log(randomIndex);
      
    let amigoSorteado = amigos[randomIndex];
    document.getElementById("resultado").innerHTML = amigoSorteado;

    document.getElementById("resetear").disabled = false;
    document.getElementById("resetear").style.backgroundColor = "orange";
  }
}

function resetear() {
  amigos = [];
  document.getElementById("resultado").innerHTML = "";
}

