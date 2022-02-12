const INPUT_NUMERO = document.getElementById('numero');
const INPUT_TITULAR = document.getElementById('titular');
const INPUT_CPF = document.getElementById('cpf');
const INPUT_CVV = document.getElementById('cvv');
const SELECT_MES = document.getElementById('mes');
const SELECT_ANO = document.getElementById('ano');

const CARD_NUMERO = document.getElementById('card-numero');
const CARD_TITULAR = document.getElementById('card-titular');
const CARD_BANDEIRA = document.getElementById('card-bandeira');

let meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
];

meses.map(function (cadaMes) {
  SELECT_MES.innerHTML += `<option>${cadaMes}</option>`;
});

INPUT_NUMERO.addEventListener('keyup', function() {
  CARD_NUMERO.innerHTML = INPUT_NUMERO.value;
  let digito = INPUT_NUMERO.value.split('')[0];

  let bandeiras = {
    4: "<img src=\"img/visa.png\" width=\"60px\">",
    5: "<img src=\"img/master.png\" width=\"60px\">",
    3: "<img src=\"img/dinners.png\" width=\"60px\">",
    6: "<img src=\"img/discover.png\" width=\"60px\">"
  }
  CARD_BANDEIRA.innerHTML = bandeiras[digito] || "<img src=\"img/outros.png\" width=\"60px\">";

})

INPUT_TITULAR.addEventListener('keyup', function() {
  CARD_TITULAR.innerHTML = INPUT_TITULAR.value.toUpperCase();
})
