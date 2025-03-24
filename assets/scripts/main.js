document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: false,
  });
});

////////////////////////////////////////

window.onload = () => {
  document.getElementById("ano").textContent = new Date().getFullYear();
};

////////////////////////////////////////

const item = [
  document.getElementById("btnPedir1"),
  document.getElementById("btnPedir2"),
];
const carrinho = document.getElementById("carrinho");
const itens = document.getElementById("itens__carrinho");

let classicoAdd = 0;
let duploAdd = 0;
////////////////////////////////////////

(() => {
  item[0].addEventListener("click", function () {
    carrinho.style.display = "block";
    quantidade = itens.innerText++;
    classicoAdd++;
  });

  item[1].addEventListener("click", function () {
    carrinho.style.display = "block";
    quantidade = itens.innerText++;
    duploAdd++;
  });

  carrinho.addEventListener("click", function () {
    //
  });
})();

////////////////////////////////////////

function itemCarrinho() {
  if (classicoAdd) return "Hambúrguer clássico";
  if (duploAdd) return "Hambúrguer duplo";
}

////////////////////////////////////////

function quantidadeItem() {
  if (classicoAdd) return classicoAdd;
  if (duploAdd) return duploAdd;
}

////////////////////////////////////////

const select = document.getElementById("select");
const checkboxTroco = document.getElementById("troco");

setTimeout(() => {
  checkboxTroco.style.display = "none";
}, 1000);

select.addEventListener("change", () => {
  if (select.value === "dinheiro") {
    checkboxTroco.style.display = "block";
  } else {
    checkboxTroco.style.display = "none";
  }
});


////////////////////////////////////////

const total = document.getElementById("total");

setInterval(() => {
  total.innerText = 'R$:' + valorTotal().toFixed(2);
}, 1000);

function valorTotal() {
  return classicoAdd * 16.99 + duploAdd * 23.99;
}

////////////////////////////////////////

const btnFinalizar = document.getElementById("btn-finalizar");
const formPedido = document.getElementById("form-pedido");

btnFinalizar.addEventListener("click", () => {
  formPedido.innerHTML = 'Pedido realizado com sucesso!';
  setTimeout(() => {
    carrinho.style.display = "none";
  carrinhodeCompras.style.display = "none";
  itens.innerText = 0;
  classicoAdd = 0;
  duploAdd = 0;
  }, 2000);
});

////////////////////////////////////////

function cancelarPedido() {
  carrinho.style.display = "none";
  itens.innerText = 0;
  classicoAdd = 0;
  duploAdd = 0;
}

////////////////////////////////////////

const btnFechar = document.getElementById("close");
const carrinhodeCompras = document.getElementById("comprar__carrinho");

btnFechar.addEventListener("click", () => {
  carrinhodeCompras.style.display = "none";
  document.querySelector("body").style.overflow = "auto";
});

carrinho.addEventListener("click", () => {
  carrinhodeCompras.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
});

////////////////////////////////////////

(() => {
  const data = new Date();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const previsaoDeEntrega = document.getElementById("previsao-entrega");
  if (hora) {
    previsaoDeEntrega.innerText = `Hoje às ${hora + 1}:${minuto}`;
  }
})();

////////////////////////////////////////


document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('numeroContato');

  input.addEventListener('input', () => {
      let numero = input.value.replace(/\D/g, '');

      if (numero.length > 10) {
          numero = numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (numero.length > 6) {
          numero = numero.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (numero.length > 2) {
          numero = numero.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      } else {
          numero = numero.replace(/(\d*)/, '($1');
      }

      input.value = numero;
  });
});