let medico = {
  nome: 'Antonio Lucas',
  especialidades: ['Clínico', 'Cirurgião', 'Pediatra'],
  formacao: [
    {
      tipo: 'Graduação',
      local: 'UFC',
      curso: 'Medicina',
      inicio: '2014',
      termino: '2019'
    },
    {
      tipo: 'Mestrado',
      local: 'UFC',
      curso: 'Saúde Publica',
      inicio: '2019',
      termino: '2021'
    }
  ],
  experiencias: [
    {
      local: 'HGF',
      setor: 'UTI',
      atividades: 'Curativo em pacientes'
    },
    {
      local: 'Hospital do Exercito',
      setor: 'Pediatria',
      atividades: 'Cuidando das crianças'
    }
  ],
  documentos: [
    {
      tipo: 'CNH',
      numero: '183169789',
      regiao: 'CE'
    },
    {
      tipo: 'RG',
      numero: '201600021123-8'
    },
  ],
  crm: {
    tipo: 'CRM',
    numero: '222145-5-3',
    regiao: 'CE'
  }
}

const CONTEUDO = document.getElementById('conteudo-medico');

CONTEUDO.innerHTML = JSON.stringify(medico);
