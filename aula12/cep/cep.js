const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');

function limpaForm() {
  INPUT_LOGRADOURO.value = "";
  INPUT_BAIRRO.value = "";
  INPUT_CIDADE.value = "";
  INPUT_UF.value = "";
}

INPUT_CEP.addEventListener('blur', () => {
  fetch(`https://viacep.com.br/ws/${INPUT_CEP.value}/json/`)
    .then(resposta => resposta.json())
    .then(resposta => {
      // tratar resposta e verificar se há conteudo.
      if("erro" in resposta) {
        limpaForm();
        alert("CEP Inválido");
      }
      INPUT_LOGRADOURO.value = resposta.logradouro;
      INPUT_BAIRRO.value = resposta.bairro;
      INPUT_CIDADE.value = resposta.localidade;
      INPUT_UF.value = resposta.uf;

      INPUT_NUMERO.focus();
    });
})
