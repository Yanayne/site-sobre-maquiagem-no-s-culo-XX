function pesquisar() {

    let section = document.getElementById
        ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado</p>"
        return
    }


    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLocaleUpperCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {


            resultados += `
       }
       <div class="item-resultado">
           <h2><a href="[link para referência]">${dado.titulo}</a><h2>
           <p class="descricao-meta">${dado.descricao}</p>
           <p class="">${dado.caracteristicas_principais}</p>
           <p class="">${dado.inspiracoes}</p>
           <a href=${dado.link} >Imagens de exemplo</a>
       </div>
       ;

        console.log(dado.titulo.includes(campoPesquisa)){

        }

       if(!resultados){
       resultados = "<p>Nada foi encontrado. Você não digitou uma década </p>"
       }
        `
        }

        section.innerHTML = resultados

    }

}