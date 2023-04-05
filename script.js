async function exibirAlunos(){

    const objs = await fetch('./bd.json')
    bd = await objs.json();
    console.log(bd)

    let resultado = document.getElementById("resultado")

    bd.alunos.forEach(element => {

        //console.log(element)
        const media = (element.avaliacaoParcial+element.avaliacaoRegimental+element.exercicio)/3
      const interger = parseInt(media)

      console.log(interger)
    
      if(interger >= 6){
        var status = "aprovado"
      } else if (interger >=2 && interger < 6){
        var status = "Avaliação Final"
      } else {
        var status = "Reprovado"
      }
    

        resultado.innerHTML += `
        <div class="conteiner2">
        <img src="${element.img}" class="conteiner" alt="">
        <p>Nome: ${element.nome}</p>
        <p>RGM: ${element.rgm}</p>
        <p>Av. Parcial: ${element.avaliacaoParcial}</p>
        <p>Exercícios: ${element.exercicio}</p>
        <p>Av. Regimental: ${element.avaliacaoRegimental}</p>
        <p>Média: ${interger}</p>
        <p> Status: ${status}</p>
        </div>
        `
    });
    
}