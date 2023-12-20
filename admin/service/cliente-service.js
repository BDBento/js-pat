

const criaListaClientes = (nome, email) => {

    const linhaNovoCliente = document.createElement('tr');

    const conteudo = `
                    <td class="td" data-td>${nome}</td>
                    <td>${email}</td>
                    <td>
                        <ul class="tabela__botoes-controle">
                            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                        </ul>
                    </td> 
                    `;
    linhaNovoCliente.innerHTML = conteudo;
    return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

const listaClientes = () => {

    const promise = new Promise((resolve, reject) => {

        // cria uma requisição    
        const http = new XMLHttpRequest();

        //abre a conexão
        http.open("GET", "http://localhost:3000/profile");

        //escuta o evento de carregamento da requisição
        http.onload = () => {
            
            if (http.status >= 400) {
                reject(JSON.parse(http.response));
            } else {
                resolve(JSON.parse(http.response));
            }

        };
        http.send();

    }); 
    return promise;
}

//chama a função listaClientes e passa o parametro data
listaClientes()
.then(data => {
    data.forEach(elemento => {
        tabela.appendChild(criaListaClientes(elemento.nome, elemento.email));
    });
})
