// Criar um array de objetos de alunos com nome e nota
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 }
  ];
  
  // Função para retornar apenas os alunos com nota maior ou igual a 6
  function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Chamando a função e exibindo o resultado
  const alunosAprovadosArray = alunosAprovados(alunos);
  console.log(alunosAprovadosArray);
  