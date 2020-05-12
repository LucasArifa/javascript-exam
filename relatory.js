window.onload = function () {
  var relatorioAcertou = {
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0,
    question9: 0,
    question10: 0
  }
  var relatorioErrou = {
    question1: 0,
    question2: 0,
    question3: 0,
    question4: 0,
    question5: 0,
    question6: 0,
    question7: 0,
    question8: 0,
    question9: 0,
    question10: 0
  }
  if (window.localStorage.getItem('userRadiosList1')) {
    const userRadiosList1 = JSON.parse(window.localStorage.getItem('userRadiosList1'));

    if (userRadiosList1.question1) {
      if (userRadiosList1.question1 === 'certo') {
        relatorioAcertou.question1 += 1
      } else if (userRadiosList1.question1 !== 'certo') {
        relatorioErrou.question1 += 1
      }
    }
    if (userRadiosList1.question2) {
      if (userRadiosList1.question2 === 'errado') {
        relatorioAcertou.question2 += 1
      } else if (userRadiosList1.question2 !== 'errado') {
        relatorioErrou.question2 += 1
      }
      if (userRadiosList1.question3 === 'errado') {
        relatorioAcertou.question3 += 1
      } else if (userRadiosList1.question3 !== 'errado') {
        relatorioErrou.question3 += 1
      }
    }
    if (userRadiosList1.question4) {
      if (userRadiosList1.question4 === 'questao-4-alternativa-c') {
        relatorioAcertou.question4 += 1
      } else if (userRadiosList1.question4 !== 'questao-4-alternativa-c') {
        relatorioErrou.question4 += 1
      }
    }
    if (userRadiosList1.question5) {
      if (userRadiosList1.question5 === 'questao-5-alternativa-c') {
        relatorioAcertou.question5 += 1
      } else if (userRadiosList1.question5 !== 'questao-5-alternativa-c') {
        relatorioErrou.question5 += 1
      }
    }
    if (userRadiosList1.question6) {
      if (userRadiosList1.question6 === 'questao-6-alternativa-e') {
        relatorioAcertou.question6 += 1
      } else if (userRadiosList1.question6 !== 'questao-6-alternativa-e') {
        relatorioErrou.question6 += 1
      }
    }
    if (userRadiosList1.question7) {
      if (userRadiosList1.question7 === 'questao-7-alternativa-e') {
        relatorioAcertou.question7 += 1
      } else if (userRadiosList1.question7 !== 'questao-7-alternativa-e') {
        relatorioErrou.question7 += 1
      }
    }
    if (userRadiosList1.question8) {
      if (userRadiosList1.question8 === 'questao-8-alternativa-a') {
        relatorioAcertou.question8 += 1
      } else if (userRadiosList1.question8 !== 'questao-8-alternativa-a') {
        relatorioErrou.question8 += 1
      }
    }
    if (userRadiosList1.question9) {
      if (userRadiosList1.question9 === 'questao-9-alternativa-a') {
        relatorioAcertou.question9 += 1
      } else if (userRadiosList1.question9 !== 'questao-9-alternativa-a') {
        relatorioErrou.question9 += 1
      }
    }
    if (userRadiosList1.question10) {
      if (userRadiosList1.question10 === 'questao-10-alternativa-d') {
        relatorioAcertou.question10 += 1
      } else if (userRadiosList1.question10 !== 'questao-10-alternativa-d') {
        relatorioErrou.question10 += 1
      }
    }

  }
  if (window.localStorage.getItem('userRadiosList2')) {
    const userRadiosList2 = JSON.parse(window.localStorage.getItem('userRadiosList2'));

    if (userRadiosList2.question1) {
      if (userRadiosList2.question1 === 'certo') {
        relatorioAcertou.question1 += 1
      } else if (userRadiosList2.question1 !== 'certo') {
        relatorioErrou.question1 += 1
      }
    }
    if (userRadiosList2.question2) {
      if (userRadiosList2.question2 === 'errado') {
        relatorioAcertou.question2 += 1
      } else if (userRadiosList2.question2 !== 'errado') {
        relatorioErrou.question2 += 1
      }
    }
    if (userRadiosList2.question3) {
      if (userRadiosList2.question3 === 'errado') {
        relatorioAcertou.question3 += 1
      } else if (userRadiosList2.question3 !== 'errado') {
        relatorioErrou.question3 += 1
      }
    }
    if (userRadiosList2.question4) {
      if (userRadiosList2.question4 === 'questao-4-alternativa-c') {
        relatorioAcertou.question4 += 1
      } else if (userRadiosList2.question4 !== 'questao-4-alternativa-c') {
        relatorioErrou.question4 += 1
      }
    }
    if (userRadiosList2.question5) {
      if (userRadiosList2.question5 === 'questao-5-alternativa-c') {
        relatorioAcertou.question5 += 1
      } else if (userRadiosList2.question5 !== 'questao-5-alternativa-c') {
        relatorioErrou.question5 += 1
      }
    }
    if (userRadiosList2.question6) {
      if (userRadiosList2.question6 === 'questao-6-alternativa-e') {
        relatorioAcertou.question6 += 1
      } else if (userRadiosList2.question6 !== 'questao-6-alternativa-e') {
        relatorioErrou.question6 += 1
      }
    }
    if (userRadiosList2.question7) {
      if (userRadiosList2.question7 === 'questao-7-alternativa-e') {
        relatorioAcertou.question7 += 1
      } else if (userRadiosList2.question7 !== 'questao-7-alternativa-e') {
        relatorioErrou.question7 += 1
      }
    }
    if (userRadiosList2.question8) {
      if (userRadiosList2.question8 === 'questao-8-alternativa-a') {
        relatorioAcertou.question8 += 1
      } else if (userRadiosList2.question8 !== 'questao-8-alternativa-a') {
        relatorioErrou.question8 += 1
      }
    }
    if (userRadiosList2.question9) {
      if (userRadiosList2.question9 === 'questao-9-alternativa-a') {
        relatorioAcertou.question9 += 1
      } else if (userRadiosList2.question9 !== 'questao-9-alternativa-a') {
        relatorioErrou.question9 += 1
      }
    }
    if (userRadiosList2.question10) {
      if (userRadiosList2.question10 === 'questao-10-alternativa-d') {
        relatorioAcertou.question10 += 1
      } else if (userRadiosList2.question10 !== 'questao-10-alternativa-d') {
        relatorioErrou.question10 += 1
      }
    }

  }
  if (window.localStorage.getItem('userRadiosList3')) {
    const userRadiosList3 = JSON.parse(window.localStorage.getItem('userRadiosList3'));

    if (userRadiosList3.question1) {
      if (userRadiosList3.question1 === 'certo') {
        relatorioAcertou.question1 += 1
      } else if (userRadiosList3.question1 !== 'certo') {
        relatorioErrou.question1 += 1
      }
    }
    if (userRadiosList3.question2) {
      if (userRadiosList3.question2 === 'errado') {
        relatorioAcertou.question2 += 1
      } else if (userRadiosList3.question2 !== 'errado') {
        relatorioErrou.question2 += 1
      }
    }
    if (userRadiosList3.question3) {
      if (userRadiosList3.question3 === 'errado') {
        relatorioAcertou.question3 += 1
      } else if (userRadiosList3.question3 !== 'errado') {
        relatorioErrou.question3 += 1
      }
    }
    if (userRadiosList3.question4) {
      if (userRadiosList3.question4 === 'questao-4-alternativa-c') {
        relatorioAcertou.question4 += 1
      } else if (userRadiosList3.question4 !== 'questao-4-alternativa-c') {
        relatorioErrou.question4 += 1
      }
    }
    if (userRadiosList3.question5) {
      if (userRadiosList3.question5 === 'questao-5-alternativa-c') {
        relatorioAcertou.question5 += 1
      } else if (userRadiosList3.question5 !== 'questao-5-alternativa-c') {
        relatorioErrou.question5 += 1
      }
    }
    if (userRadiosList3.question6) {
      if (userRadiosList3.question6 === 'questao-6-alternativa-e') {
        relatorioAcertou.question6 += 1
      } else if (userRadiosList3.question6 !== 'questao-6-alternativa-e') {
        relatorioErrou.question6 += 1
      }
    }
    if (userRadiosList3.question7) {
      if (userRadiosList3.question7 === 'questao-7-alternativa-e') {
        relatorioAcertou.question7 += 1
      } else if (userRadiosList3.question7 !== 'questao-7-alternativa-e') {
        relatorioErrou.question7 += 1
      }
    }
    if (userRadiosList3.question8) {
      if (userRadiosList3.question8 === 'questao-8-alternativa-a') {
        relatorioAcertou.question8 += 1
      } else if (userRadiosList3.question8 !== 'questao-8-alternativa-a') {
        relatorioErrou.question8 += 1
      }
    }
    if (userRadiosList3.question9) {
      if (userRadiosList3.question9 === 'questao-9-alternativa-a') {
        relatorioAcertou.question9 += 1
      } else if (userRadiosList3.question9 !== 'questao-9-alternativa-a') {
        relatorioErrou.question9 += 1
      }
    }
    if (userRadiosList3.question10) {
      if (userRadiosList3.question10 === 'questao-10-alternativa-d') {
        relatorioAcertou.question10 += 1
      } else if (userRadiosList3.question10 !== 'questao-10-alternativa-d') {
        relatorioErrou.question10 += 1
      }
    }
  }

  if (relatorioAcertou && relatorioErrou) {

    if (relatorioAcertou.question1 > 0) {
      document.getElementById('tdQ1Acertou').innerText = `${relatorioAcertou.question1}x`
      document.getElementById('tdQ1Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question1 > 0) { }
    else {
      document.getElementById('tdQ1Acertou').style.backgroundColor = "grey"
    }
    if (relatorioErrou.question1 > 0) {
      document.getElementById('tdQ1Errou').innerText = `${relatorioErrou.question1}x`
      document.getElementById('tdQ1Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question1 > 0) { }
    else {
      document.getElementById('tdQ1Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question2 > 0) {
      document.getElementById('tdQ2Acertou').innerText = `${relatorioAcertou.question2}x`
      document.getElementById('tdQ2Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question2 > 0) { }
    else {
      document.getElementById('tdQ2Acertou').style.backgroundColor = "grey"
    }
    if (relatorioErrou.question2 > 0) {
      document.getElementById('tdQ2Errou').innerText = `${relatorioErrou.question2}x`
      document.getElementById('tdQ2Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question2 > 0) { } else {
      document.getElementById('tdQ2Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question3 > 0) {
      document.getElementById('tdQ3Acertou').innerText = `${relatorioAcertou.question3}x`
      document.getElementById('tdQ3Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question3 > 0) { }
    else {
      document.getElementById('tdQ3Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question3 > 0) {
      document.getElementById('tdQ3Errou').innerText = `${relatorioErrou.question3}x`
      document.getElementById('tdQ3Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question3 > 0) { } else {
      document.getElementById('tdQ3Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question4 > 0) {
      document.getElementById('tdQ4Acertou').innerText = `${relatorioAcertou.question4}x`
      document.getElementById('tdQ4Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question4 > 0) { }
    else {
      document.getElementById('tdQ4Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question4 > 0) {
      document.getElementById('tdQ4Errou').innerText = `${relatorioErrou.question4}x`
      document.getElementById('tdQ4Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question4 > 0) { } else {
      document.getElementById('tdQ4Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question5 > 0) {
      document.getElementById('tdQ5Acertou').innerText = `${relatorioAcertou.question5}x`
      document.getElementById('tdQ5Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question5 > 0) { }
    else {
      document.getElementById('tdQ5Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question5 > 0) {
      document.getElementById('tdQ5Errou').innerText = `${relatorioErrou.question5}x`
      document.getElementById('tdQ5Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question5 > 0) { } else {
      document.getElementById('tdQ5Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question6 > 0) {
      document.getElementById('tdQ6Acertou').innerText = `${relatorioAcertou.question6}x`
      document.getElementById('tdQ6Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question6 > 0) { } else {
      document.getElementById('tdQ6Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question6 > 0) {
      document.getElementById('tdQ6Errou').innerText = `${relatorioErrou.question6}x`
      document.getElementById('tdQ6Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question6 > 0) { } else {
      document.getElementById('tdQ6Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question7 > 0) {
      document.getElementById('tdQ7Acertou').innerText = `${relatorioAcertou.question7}x`
      document.getElementById('tdQ7Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question7 > 0) { } else {
      document.getElementById('tdQ7Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question7 > 0) {
      document.getElementById('tdQ7Errou').innerText = `${relatorioErrou.question7}x`
      document.getElementById('tdQ7Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question7 > 0) { } else {
      document.getElementById('tdQ7Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question8 > 0) {
      document.getElementById('tdQ8Acertou').innerText = `${relatorioAcertou.question8}x`
      document.getElementById('tdQ8Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question8 > 0) { } else {
      document.getElementById('tdQ8Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question8 > 0) {
      document.getElementById('tdQ8Errou').innerText = `${relatorioErrou.question8}x`
      document.getElementById('tdQ8Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question8 > 0) { } else {
      document.getElementById('tdQ8Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question9 > 0) {
      document.getElementById('tdQ9Acertou').innerText = `${relatorioAcertou.question9}x`
      document.getElementById('tdQ9Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question9 > 0) { } else {
      document.getElementById('tdQ9Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question9 > 0) {
      document.getElementById('tdQ9Errou').innerText = `${relatorioErrou.question9}x`
      document.getElementById('tdQ9Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question9 > 0) { } else {
      document.getElementById('tdQ9Errou').style.backgroundColor = "grey"
    }

    if (relatorioAcertou.question10 > 0) {
      document.getElementById('tdQ10Acertou').innerText = `${relatorioAcertou.question10}x`
      document.getElementById('tdQ10Acertou').style.backgroundColor = "green"
    } else if (relatorioErrou.question10 > 0) { } else {
      document.getElementById('tdQ10Acertou').style.backgroundColor = "grey"
    } if (relatorioErrou.question10 > 0) {
      document.getElementById('tdQ10Errou').innerText = `${relatorioErrou.question10}x`
      document.getElementById('tdQ10Errou').style.backgroundColor = "red"
    } else if (relatorioAcertou.question10 > 0) { } else {
      document.getElementById('tdQ10Errou').style.backgroundColor = "grey"
    }
  }

  if (window.localStorage.getItem('userNota3')) {
    const userNota3 = Number(window.localStorage.getItem('userNota3'));
    const userNota2 = Number(window.localStorage.getItem('userNota2'));
    const userNota1 = Number(window.localStorage.getItem('userNota1'));

    let media = (userNota1 + userNota2 + userNota3) / 3
    media = media.toFixed(1) ;

    window.document.getElementById('mediaNotaNum').innerText = `${media}%`
    window.document.getElementById('mediaNotaTxt2').innerHTML = `Média relativa à <strong>3 Tentativas</strong>`
  } else if (window.localStorage.getItem('userNota2')){
    const userNota2 = Number(window.localStorage.getItem('userNota2'));
    const userNota1 = Number(window.localStorage.getItem('userNota1'));
    
    let media = (userNota1 + userNota2) / 2
    media = media.toFixed(1) ;

    window.document.getElementById('mediaNotaNum').innerText =  `${media}%`
    window.document.getElementById('mediaNotaTxt2').innerHTML = `Média relativa à <strong>2 Tentativas</strong>`
    window.document.getElementById('mediaNotaTxt3').innerText = `de 100%`

  } else if (window.localStorage.getItem('userNota1')){
    const userNota1 = Number(window.localStorage.getItem('userNota1'));
    window.document.getElementById("mediaNotaNum").innerText =  `${userNota1}%`
    window.document.getElementById('mediaNotaTxt2').innerHTML = `Média relativa à <strong>1 Tentativa</strong>`
  }

if (relatorioErrou) {

  const sugestoes = window.document.getElementById('sugestoes');

  if (relatorioErrou.question1 > 0 || relatorioErrou.question2 > 0) {
    let sugestao1 = this.document.createElement('h4');
    let sugestao1txt = this.document.createTextNode(` - Manipulação das Propriedades de um Array`);
    sugestao1.appendChild(sugestao1txt);
    sugestoes.appendChild(sugestao1);
  } if (relatorioErrou.question3 > 0 ) {
    let sugestao2 = this.document.createElement('h4');
    let sugestao2txt = this.document.createTextNode(` - JavaScript interno e externo`);
    sugestao2.appendChild(sugestao2txt);
    sugestoes.appendChild(sugestao2);
  }if (relatorioErrou.question4 > 0 ) {
    let sugestao3 = this.document.createElement('h4');
    let sugestao3txt = this.document.createTextNode(` - Manipulação das propriedades dos Objetos Literais`);
    sugestao3.appendChild(sugestao3txt);
    sugestoes.appendChild(sugestao3);
  }if (relatorioErrou.question5 > 0 || relatorioErrou.question6 > 0 ) {
    let sugestao4 = this.document.createElement('h4');
    let sugestao4txt = this.document.createTextNode(` - Operadores de Incremento e Decremento`);
    sugestao4.appendChild(sugestao4txt);
    sugestoes.appendChild(sugestao4);
  }if (relatorioErrou.question7 > 0 || relatorioErrou.question10 > 0 ) {
    let sugestao5 = this.document.createElement('h4');
    let sugestao5txt = this.document.createTextNode(` - Métodos de acesso e Manipulação do HTML DOM`);
    sugestao5.appendChild(sugestao5txt);
    sugestoes.appendChild(sugestao5);
  }if (relatorioErrou.question8 > 0 ) {
    let sugestao6 = this.document.createElement('h4');
    let sugestao6txt = this.document.createTextNode(` - Estruturas condicionais em JavaScript`);
    sugestao6.appendChild(sugestao6txt);
    sugestoes.appendChild(sugestao6);
  }if (relatorioErrou.question9 > 0 ) {
    let sugestao7 = this.document.createElement('h4');
    let sugestao7txt = this.document.createTextNode(` - Map Objects em JavaScript`);
    sugestao7.appendChild(sugestao7txt);
    sugestoes.appendChild(sugestao7);
  }
}


}