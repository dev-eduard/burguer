document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: false,
  });
});

////////////////////////////////////////

window.onload = function () {
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

(function itenAdd() {
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
