const INPUT_NUMERO = document.getElementById('numero');
const INPUT_TITULAR = document.getElementById('titular');
const INPUT_CPF = document.getElementById('cpf');
const INPUT_CVV = document.getElementById('cvv');
const SELECT_MES = document.getElementById('mes');
const SELECT_ANO = document.getElementById('ano');

const CARD_NUMERO = document.getElementById('card-numero');
const CARD_TITULAR = document.getElementById('card-titular');
const CARD_BANDEIRA = document.getElementById('card-bandeira');
const CARD_MES = document.getElementById('card-mes');
const CARD_ANO = document.getElementById('card-ano');
const CARD_CVV = document.getElementById('card-cvv');

const CARD_FRENTE = document.getElementById('card-frente');
const CARD_VERSO = document.getElementById('card-verso');


function mostrarFrente () {
  CARD_FRENTE.classList.remove('d-none');
  CARD_VERSO.classList.add('d-none');
}

function mostrarVerso () {
  CARD_VERSO.classList.remove('d-none');
  CARD_FRENTE.classList.add('d-none');
}

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

meses.map(function (cadaMes, pos) {
  SELECT_MES.innerHTML += `<option value="${pos+1}">${cadaMes}</option>`;
});

for (let ano = 2022; ano <= 2030; ano++) {
  SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}

INPUT_NUMERO.addEventListener('keyup', function() {
  mostrarFrente();
  CARD_NUMERO.innerHTML = INPUT_NUMERO.value;
  let digito = INPUT_NUMERO.value.split('')[0];

  let bandeiras = {
    4: '<img src="img/visa.png" width="60px">',
    5: '<img src="img/master.png" width="60px">',
    3: '<img src="img/dinners.png" width="60px">',
    6: '<img src="img/discover.png" width="60px">'
  }
  CARD_BANDEIRA.innerHTML = bandeiras[digito] || '<img src="img/outros.png" width="60px">';
});

SELECT_MES.addEventListener('change', function() {
  mostrarVerso();
  CARD_MES.innerHTML = SELECT_MES.value <= 9 ? "0" + SELECT_MES.value : SELECT_MES.value;
});

SELECT_ANO.addEventListener('change', function(){
  mostrarVerso();
  CARD_ANO.innerHTML = SELECT_ANO.value.substr(-2);
});

INPUT_CVV.addEventListener('keyup', function() {
  mostrarVerso();
  CARD_CVV.innerHTML = INPUT_CVV.value;
});

INPUT_TITULAR.addEventListener('keyup', function() {
  mostrarFrente();
  INPUT_TITULAR.value = INPUT_TITULAR.value.toUpperCase();
  CARD_TITULAR.innerHTML = INPUT_TITULAR.value.toUpperCase();
});

INPUT_NUMERO.addEventListener('focus', mostrarFrente);
INPUT_TITULAR.addEventListener('focus', mostrarFrente);
INPUT_CPF.addEventListener('focus', mostrarFrente);
SELECT_MES.addEventListener('focus', mostrarVerso);
SELECT_ANO.addEventListener('focus', mostrarVerso);
INPUT_CVV.addEventListener('focus', mostrarVerso);
