document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-form-btn');
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');

    // Alternar visibilidade do formulário de nova postagem
    toggleBtn.addEventListener('click', () => {
        postForm.classList.toggle('hidden');
        toggleBtn.textContent = postForm.classList.contains('hidden') ? '+ Nova Manchete (Pensamento)' : 'Fechar Redação';
    });

    // Carregar posts salvos ao abrir a página
    loadPosts();

    // Evento de envio do formulário
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const category = document.getElementById('post-category').value;
        const content = document.getElementById('post-content').value;
        const date = new Date().toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        });

        const newPost = {
            id: Date.now(),
            title,
            category,
            content,
            date
        };

        savePost(newPost);
        postForm.reset();
        postForm.classList.add('hidden');
        toggleBtn.textContent = '+ Nova Manchete (Pensamento)';
        loadPosts();
    });

    // Função para salvar no localStorage
    function savePost(post) {
        let posts = JSON.parse(localStorage.getItem('journal_posts')) || [];
        posts.unshift(post); // Adiciona no começo da lista
        localStorage.setItem('journal_posts', JSON.stringify(posts));
    }

    // Função para carregar e exibir os posts
    function loadPosts() {
        let posts = JSON.parse(localStorage.getItem('journal_posts')) || [];
        postsContainer.innerHTML = '';

        if (posts.length === 0) {
            postsContainer.innerHTML = '<p style="font-style: italic; color: #666;">Nenhuma manchete registrada hoje na sua mente.</p>';
            return;
        }

        posts.forEach(post => {
            const card = document.createElement('article');
            card.classList.add('news-card');

            card.innerHTML = `
                <span class="news-category">${post.category}</span>
                <h3>${post.title}</h3>
                <div class="news-date">Publicado em: ${post.date}</div>
                <p>${post.content}</p>
                <button class="btn-delete" onclick="deletePost(${post.id})">Retirar Matéria do Ar</button>
            `;

            postsContainer.appendChild(card);
        });
    }
});

// Função global para deletar post
function deletePost(id) {
    if (confirm('Tem certeza de que deseja apagar este registro da sua mente?')) {
        let posts = JSON.parse(localStorage.getItem('journal_posts')) || [];
        posts = posts.filter(post => post.id !== id);
        localStorage.setItem('journal_posts', JSON.stringify(posts));
        location.reload(); // Recarrega para atualizar a tela
    }
}