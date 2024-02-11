const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "variable myVar = 10;",
        "let myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual destes métodos é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "console.log()",
        "print()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes é um tipo de dados em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Ambos",
      ],
      correta: 2
    },
    {
      pergunta: "Como você chama uma função em JavaScript?",
      respostas: [
        "call myFunction()",
        "myFunction()",
        "invoke myFunction()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Para selecionar múltiplos elementos",
        "Para selecionar o primeiro elemento que corresponde a um seletor especificado",
        "Para selecionar elementos com base em uma classe",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de verificar o tipo de uma variável em JavaScript?",
      respostas: [
        "typeof(myVar)",
        "myVar.type()",
        "typeOf.myVar",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de concatenar strings em JavaScript?",
      respostas: [
        "str1.concat(str2)",
        "str1 + str2",
        "concat(str1, str2)",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método que adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array em JavaScript?",
      respostas: [
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
  ];
    //procura a tag do quiz
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
  
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    //mostra na tela o total de acertos
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    // loop ou laço de repetição, clona as perguntas
    for(const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
  
      // troca a pergunta 01 pela informada no código
      quizItem.querySelector('h3').textContent = item.pergunta
  
      // Clona as respostas
      for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        // valida se esta correta
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta =  event.target.value == item.correta
          
          corretas.delete(item)
          if(estaCorreta){
            corretas.add(item)
          }
          mostrarTotal.textContent =  corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)      
      }
      // remove a primeira pergunta pois rodou a rotina acima
      quizItem.querySelector('dl dt').remove()
  
      // coloca a pergunta na tela
      quiz.appendChild(quizItem)
    }