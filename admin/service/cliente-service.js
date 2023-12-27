export const clientesService = {
    listaClientes
}


const listaClientes = () => {
    return fetch('http://localhost:3000/profile')
    .then(resposta => {
        return resposta.json();
    })
}

