// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function() {
    mostrarPosts();

    document.querySelector("#postForm").addEventListener("submit", addPost); 
}

//CREATE
function addPost(infosDoEvento) {
    infosDoEvento.preventDefault(); // Impede o envio do formulário

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;
    const dataPost = new Date().toLocaleString(); // Pega a data atual formatada

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost
    };
    posts.unshift(novoPost); // Adiciona o novo post no início do array
    mostrarPosts(); // Atualiza a lista de posts
}
//READ
function mostrarPosts(){
    //Pega o elemento da lista de posts
    const listaPosts = document.querySelector("#postList");
    listaPosts.innerHTML = ""; // Limpa a lista antes de adicionar novos posts

    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div");
        cardPost.classList.add("card-post");
        cardPost.innerHTML = `
            <h2>${pegaItem.text}</h2>
            <img src="${pegaItem.image}"/>
            <p><strong>Categoria:</strong> ${pegaItem.category}</p>
            <p><strong>Data:</strong> ${pegaItem.date}</p>

            <div>
                <button class="btn-editar">Editar</button>
                <button class="btn-deletar">Deletar</button>
            </div>
        `;
        listaPosts.append(cardPost);
})
}
//UPDATE
function editarPost(){}
//DELETE
function deletarPost(){}

// const pessoa = {
//     nome: "João",
//     idade: 30,
//     Tags: ["amigo", "programador", "gamer"],
//     "Empresas trabalhadas": ["Empresa A", "Empresa B"],
//     cidade: "São Paulo"
// };

// console.log(pessoa.nome);
// console.log(pessoa[idade])