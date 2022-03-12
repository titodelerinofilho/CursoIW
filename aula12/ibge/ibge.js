const SELECT_REGIAO = document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_CIDADE = document.getElementById('cidade');

const urlEstados = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;
const urlMunicipios = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
  .then(resposta => resposta.json())
  .then(regioes => {
    regioes.map((cadaRegiao) => {
      SELECT_REGIAO.innerHTML += `
      <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
      `
  });
});

SELECT_REGIAO.addEventListener('change', () => {
  SELECT_ESTADO.innerHTML = '<option>--- Selecione ---</option>';
  fetch(urlEstados(SELECT_REGIAO.value))
    .then(response => response.json())
    .then(estados => {
      estados.map((cadaEstado) => {
        SELECT_ESTADO.innerHTML += `
        <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
        `
      });
    });
});

SELECT_ESTADO.addEventListener('change', () => {
  SELECT_CIDADE.innerHTML = '<option>--- Selecione ---</option>';
  fetch(urlMunicipios(SELECT_ESTADO.value))
  .then(response => response.json())
  .then(cidade => {
    cidade.map((cadaCidade) => {
      SELECT_CIDADE.innerHTML += `
      <option>${cadaCidade.nome}</option>
      `
    });
  })
})
