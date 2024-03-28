## Exemplo de Filtragem de Alunos Aprovados

Este é um exemplo simples de como utilizar JavaScript para filtrar alunos aprovados com base em suas notas.

### Funcionalidades

- Cria um array de objetos de alunos com nome e nota.
- Define uma função para retornar apenas os alunos que tiveram nota maior ou igual a 6.
- Exibe o resultado no console.

### Como Usar

1. Clone este repositório ou copie o código para um arquivo JavaScript.
2. Execute o código em um ambiente JavaScript (por exemplo, no navegador ou em um ambiente Node.js).
3. Observe a saída no console para ver os alunos aprovados.

### Exemplo de Uso

```javascript
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 }
  ];
  
  function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
  }
  
  const alunosAprovadosArray = alunosAprovados(alunos);
  console.log(alunosAprovadosArray);
```

### Resultado Esperado

```plaintext
[
  { nome: 'João', nota: 7 },
  { nome: 'Pedro', nota: 8 },
  { nome: 'Ana', nota: 6 }
]
```

Este código irá retornar uma lista apenas com os alunos que obtiveram nota maior ou igual a 6.
