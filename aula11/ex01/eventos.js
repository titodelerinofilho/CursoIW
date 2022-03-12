let cliente = {
  nome: 'Chiquim',
  sobrenome: 'Silva',
  dataNascimento: '01/01/2001',
  endereco: {
    residencial: {
      logradouro: 'Rua Irlanda',
      numero: 51
    },
    comercial: {
      logradouro: 'Rua Carolino de Aquino',
      numero: 445
    }
  },
  telefones: [
    {
        operadora: 'TIM',
        numero: '99984-9788',
        ddd: 85
    },
    {
        operadora: 'OI',
        numero: '4002-8922',
        ddd: 11
    }
  ]
}

const NOME = document.getElementById('nome-completo');
const ENDERECO = document.getElementById('endereco');
const TELEFONE = document.getElementById('telefone');
const TITLENOME = document.getElementById('cliente');

TITLENOME.innerHTML = cliente.nome;
NOME.innerHTML = `${cliente.nome} ${cliente.sobrenome}`;
ENDERECO.innerHTML = `${cliente.endereco.residencial.logradouro}, ${cliente.endereco.residencial.numero}`;

var telefones = cliente.telefones.map(function (item) {
  return item.numero;
})

TELEFONE.innerHTML = telefones;
