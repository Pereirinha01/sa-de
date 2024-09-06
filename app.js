function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if(!campoPesquisa) {
        section.innerHTML = "<p>Digite algo para pesquisar</p>"
        return  
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
      titulo =  dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      // se titulo includes campoPesquisa
      if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)){
      
         // Constrói o HTML para cada resultado, formatando os dados do objeto
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="">${dado.titulo}</a> </h2>
        <p class="descricao-meta">${dado.descricao}</p> 
        <a target="_blank" href="${dado.link}">Mais informações</a> </div>
    `;
    }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atualiza o conteúdo HTML da seção com os resultados construídos
    section.innerHTML = resultados;
  }



