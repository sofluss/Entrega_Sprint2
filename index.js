const nombres = [];
const pagos = [];
const nombre = document.getElementById("nombre");
const pago = document.getElementById("pago");
const listado = document.getElementById("lista");
const resultado = document.getElementById("total");

function repartir() {
  agregarALista();
  mostrarEnPantalla();
  mostrarPagoIndiv();
}

function agregarALista() {
  pagos.push(pago.value);
  nombres.push(nombre.value);
}

function mostrarEnPantalla() {
  const li = document.createElement("li");
  const text = document.createTextNode(`  ${nombre.value}:  $${pago.value}`);
  li.classList.add("lista");

  li.appendChild(text);
  listado.appendChild(li);
}

function sumarVal(p) {
  let suma = 0;
  for (let pago of pagos) {
    suma += parseInt(pago);
  }
  return suma;
}

function mostrarPagoIndiv() {
  resultado.innerText = `TOTAL: ${sumarVal(pagos)} 
                        A cada uno le toca aportar: $${
                          (sumarVal(pagos) / nombres.length).toFixed(2)
                        } `;
}
