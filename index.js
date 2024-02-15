const perguntas = [
  {
    pergunta: "1. Assinale a CORRETA:",
    respostas: [
      "a. A artéria braquial profunda acompanha o N. radial anteriormente à diáfise do úmero.",
      "b. O M. flexor ulnar do carpo é agonista do M. extensor do carpo no movimento de adução da mão",
      "c. A V. cefálica ascende no braço no bordo medial do M. bíceps braquial, ansita no sulco deltopeitoral e após perfurar a fáscia clavipeitoral desemboca na V. axilar",
      "d. Os fascículos do plexo braquial recebem os seus nomes segundo sua posição anatômica em relação à Art. subclávia.",
    ],
    correta: 1
  },
  {
    pergunta: "2. Assinale a INCORRETA",
    respostas: [
      "a. O ligamento inguinal segue da espinha ilíaca anterossuperior até o tubérculo púbico",
      "b. O M. rombóide menor aduz a escápula.",
      "c. O M. infraespinal faz rotação lateral do braço.",
      "d. O arco palmar superficial é formado apenas pela A. ulnar.",
    ],
    correta: 3
  },
  {
    pergunta: "3. Assinale a alternativa INCORRETA:",
    respostas: [
      "a. A artéria vertebral normalmente entra no forame transversário da 6ª vértebra cervical.",
      "b. A 7ª vértebra cervical também é chamada de vértebra proeminente",
      "c. O forame vertebral da vértebra cervical é pequeno e circular.",
      "d. Os processos espinhosos do áxis (CII), e das vértebras CIII a CVI normalmente são bífidos.",
    ],
    correta: 2
  },
  {
    pergunta: "4. Assinale a alternativa INCORRETA:",
    respostas: [
      "a. A articulação atlantoaxial (entre atlas e áxis) mediana é classificada do tipo trocóidea.",
      "b. Nas vértebras lombares encontramos os processos mamilares e processos acessórios.",
      "c. As fóveas costais dos processos transversos existem em todas as vértebras torácicas.",
      "d. A característica que distingue a vértebra CII - áxis - é o dente que se projeta superiormente a partir de seu corpo.",
    ],
    correta: 2
  },
  {
    pergunta: "5. Assinale a alternativa INCORRETA:",
    respostas: [
      "a. Os vasos epigástricos inferiores fazem o limite lateral do anel inguinal profundo.",
      "b. O trígono inguinal é delimitado pelo ligamento inguinal, vasos epigástricos inferiores e bordo lateral do músculo reto do abdome.",
      "c. Através do canal inguinal, na mulher, identificamos o ligamento redondo do útero.",
      "d. O ligamento inguinal é formado por fibras do M. oblíquo externo do abdome.",
    ],
    correta: 0
  },
  {
    pergunta: "6. Cite o nome do nervo que passa através do canal inguinal e inerva, no homem, a região anterior do escroto, e região medial da raiz da coxa:",
    respostas: [
      "a. nervo ílioinguinal.",
      "b. nervo ílio-hipogástrico.",
      "c. ramo genital do nervo genitofemoral.",
      "d. nervo obturatório.",
    ],
    correta: 0
  },
  {
    pergunta: "7. Assinale a CORRETA:",
    respostas: [
      "a. A maioria das veias intercostais posteriores termina no sistema ázigo/hemiázigo.",
      "b. Este sistema conduz o sangue venoso até a veia cava inferior.",
      "c. A veia ázigo desemboca na veia braquiocefálica esquerda.",
      "d. A veia hemiázigo passa pelo forame da veia cava inferior.",
    ],
    correta: 0
  },
  {
    pergunta: "8. Assinale a INCORRETA:",
    respostas: [
      "a. A foice inguinal (tendão conjunto) é formada pelos músculos oblíquo externo, oblíquo interno e transverso do abdome.",
      "b. A artéria epigástrica inferior é um ramo da artéria ilíaca externa.",
      "c. O limite posterior do canal inguinal é formado pela tríade peritoneal (fáscia transversal, gordura pré-peritoneal e peritônio parietal).",
      "d. As fossas inguinais mediais situam-se entre as pregas umbilicais mediais e laterais.",
    ],
    correta: 0
  },
  {
    pergunta: "9. Assinale a INCORRETA:",
    respostas: [
      "a. O músculo reto do abdome faz a flexão do tronco.",
      "b. Os vasos epigástricos inferiores passam posteriormente ao M. reto do abdome e participam, junto com os vasos epigástricos superiores, dA vascularização do M. reto do abdome.",
      "c. A linha arqueada situa-se na lâmina posterior da bainha do músculo reto do abdome.",
      "d. A linha alba situa-se lateralmente aos Mm. retos do abdome.",
    ],
    correta: 3
  },
  {
    pergunta: "10. Assinale a INCORRETA:",
    respostas: [
      "a. Os nervos toracoabdominais percorrem a parede abdominal entre o músculo transverso do abdome e o músculo oblíquo interno do abdome.",
      "b. Os nervos toracoabdominais são formados pelas partes distais dos nervos intercostais atípicos T7-T11.",
      "c. Os nervos intercostais seguem nos espaços intercostais entre os músculos intercostais externos e intercostais internos.",
      "d. O nervo toracoabdominal T10 inerva a pele ao redor do umbigo.",
    ],
    correta: 2
  },
  {
  pergunta: "11. Assinale a INCORRETA:",
  respostas: [
    "a. O músculo eretor da espinha divide-se em 3 colunas: músculo iliocostal, longuíssimo e espinal.",
    "b. Uma lesão do nervo acessório comprometeria a elevação do ombro no lado da lesão.",
    "c. O músculo latíssimo do dorso faz extensão, rotação medial e adução do braço.",
    "d. O músculo peitoral maior faz abdução do braço.",
  ],
  correta: 2
  },
  {
    pergunta: "12. Ao fazer-se uma toracocentese (punção com agulha do espaço pleural) para a retirada de um derrame pleural (líquido que se coleta entre as pleuras parietal e visceral) você introduziria a agulha no espaço pleural na borda _____________ da costela, para evitar a lesão das estruturas vasculonervosas do espaço intercostal.",
    respostas: [
      "a. superior",
      "b. inferior",
      "c. lateral",
      "d. medial",
    ],
    correta: 0
  },
  {
    pergunta: "13. Sobre o M. diafragma, podemos afirmar que a estrutura que passa mais posteriormente através da abertura correspondente é:",
    respostas: [
      "a. esôfago",
      "b. estômago",
      "c. aorta",
      "d. V. cava inferior",
    ],
    correta: 2
  },
  {
    pergunta: "14. A sínfise manubrioesternal forma o ângulo do esterno (ângulo de Louis). Neste local articula-se a _______________ costela e a partir dele podemos contar os espaços intercostais (Moore).",
    respostas: [
      "a. 1ª",
      "b. 2ª",
      "c. 3ª",
      "d. 4ª",
    ],
    correta: 1
  },
  {
    pergunta: "15. Sobre a glândula mamária da mulher, assinale a INCORRETA:",
    respostas: [
      "a. A sua vascularização é realizada apenas pela A. axilar.",
      "b. A drenagem linfática da parte medial ocorre para os linfonodos paraesternais.",
      "c. A maior parte da linfa (>75%), sobretudo dos quadrantes laterais da mama, drena para os linfonodos axilares.",
      "d. O leito no qual a mama fica apoiada é formado pelos músculos peitoral maior serrátil anterior, e suas respectivas fáscias.",
    ],
    correta: 0
  },
  {
    pergunta: "16. A lesão do músculo supraespinal é a lesão mais comum das lesões do manguito rotador. Assinale a sua função e inervação:",
    respostas: [
      "a. Adução; radial.",
      "b. Abdução; axilar.",
      "c. Rotação lateral; radial.",
      "d. Abdução; supraescapular.",
    ],
    correta: 3
  },
  {
    pergunta: "17. Na síndrome do túnel do carpo ocorre a compressão do nervo mediano na sua passagem por aquele túnel. Assinale a alternativa INCORRETA em relação aos sintomas esperados nesta condição clínica:",
    respostas: [
      "a. Pode ocorrer perda dos movimentos de abdução e adução do 2º ao 5º dedos.",
      "b. Pode ocorrer parestesia nos três dedos e meio laterais.",
      "c. Pode ocorrer perda progressiva da coordenação e força no polegar.",
      "d. Pode ocorrer incapacidade de oposição do polegar.",
    ],
    correta: 3
  },
  {
    pergunta: "18. Na articulação radioulnar proximal pode ocorrer uma subluxação da cabeça do rádio, em situações de tração do antebraço. Qual o ligamento que circunda a cabeça do rádio e a mantém junto à ulna?",
    respostas: [
      "a. Ligamento radial.",
      "b. Ligamento ulnar.",
      "c. Ligamento anular.",
      "d. Ligamento triangular.",
    ],
    correta: 2
  },
  {
    pergunta: "19. Em uma situação na qual a clavícula desprende do acrômio (luxação acromioclavicular) poderá ocorrer lesão do(s) ligamento(s) ___________________, importante na união dos ossos que participam da articulação acromioclavicular:",
    respostas: [
      "a. Acromial.",
      "b. Clavicular.",
      "c. Coracoclavicular (conóide e trapezóide).",
      "d. Esternoclavicular.",
    ],
    correta: 2
  },
  {
    pergunta: "20. São limites do anel femoral, EXCETO:",
    respostas: [
      "a. Ligamento lacunar.",
      "b. Vasos epigástricos inferiores.",
      "c. Veia femoral.",
      "d. Ligamento inguinal",
    ],
    correta: 1
  },
  {
    pergunta: "21. Sobre a anatomia vasculonervosa do membro superior, é INCORRETO afirmar:",
    respostas: [
      "a. A artéria interóssea comum é ramo da artéria radial.",
      "b. A artéria braquial profunda acompanha o nervo radial em seu trajeto no sulco radial do úmero.",
      "c. A veia cefálica faz parte do sistema superficial e desemboca na veia axilar.",
      "d. A artéria braquial é acompanhada pelo nervo mediano.",
    ],
    correta: 0
  },
  {
    pergunta: "22. O folheto posterior da bainha do músculo reto do abdome, inferiormente à linha arqueada é formado por:",
    respostas: [
      "a. Aponeurose dos músculos oblíquos externo e interno do abdome.",
      "b. Fáscia transversal, gordura extraperitoneal e peritônio parietal.",
      "c. Aponeurose dos músculos oblíquo interno e transverso do abdome.",
      "d. Aponeurose do músculo transverso do abdome e fáscia transversal.",
    ],
    correta: 1
  },
  {
    pergunta: "23. Sobre a musculatura do ombro, é INCORRETO afirmar:",
    respostas: [
      "a. A porção lateral ou acromial do músculo deltóide e o supraespinal são abdutores do braço.",
      "b. O músculo infraespinal e o redondo maior são rotadores laterais do braço.",
      "c. O músculo subescapular e o redondo maior são rotadores medial do braço.",
      "d. As fibras anteriores e posteriores do deltóide são antagonistas, fazendo, respectivamente, rotação medial e rotação lateral do braço.",
    ],
    correta: 1
  },
  {
    pergunta: "24. Qual das seguintes estruturas NÃO é conteúdo do funículo espermático:",
    respostas: [
      "a. Artéria testicular.",
      "b. Ramo genital do nervo genitofemoral.",
      "c. Plexo pampiniforme.",
      "d. Nervo ílioinguinal.",
    ],
    correta: 3
  },
  {
    pergunta: "25. Indique a afirmativa CORRETA: (ESSA QUESTÃO REALMENTE ESTAVA NA PROVA!!!)",
    respostas: [
      "a. Eu sei tudo.",
      "b. Tudo o que não sei não existe.",
      "c. O aluno deve basear o seu estudo pelos apontamentos no caderno.",
      "d. “A vida é curta; a arte, longa; a ocasião, fugaz; a experiência, traiçoeira; e julgamento, difícil.” (HIPÓCRATES, 460 a.C.).",
    ],
    correta: 3
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