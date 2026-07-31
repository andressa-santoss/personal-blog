# 📰 The Daily Mind — Edição Confidencial

> *"Todas as notícias, confissões e devaneios que cabem na mente."*

Um diário online minimalista e pessoal mascarado de site de notícias clássico (estilo jornal impresso). O projeto foi criado com o objetivo de registrar pensamentos, reflexões e desabafo diário de forma privada, utilizando apenas tecnologias front-end.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído do zero utilizando apenas as tecnologias nativas da web:
* **HTML5** — Estrutura semântica das páginas e formulários.
* **CSS3** — Estilização personalizada focada na estética de jornais antigos (fontes serifadas, paleta de cores monocromática e sombras clássicas).
* **JavaScript (ES6+)** — Lógica de manipulação do DOM e persistência de dados.
* **LocalStorage API** — Armazenamento local no navegador para manter os posts salvos sem a necessidade de um banco de dados externo ou servidor.

---

## 🔒 Privacidade e Acesso

* **Apenas você tem acesso:** Como os dados são salvos no `localStorage` do seu navegador, as postagens ficam armazenadas localmente no seu dispositivo. 
* *Nota:* Se você limpar os dados de navegação (cookies/cache) ou usar o modo anônimo/privado, os posts salvos serão apagados.

---

## 🚀 Como Usar / Rodar o Projeto

Não é necessário instalar nenhuma dependência ou rodar servidores complexos (como Node.js ou Python). Siga os passos abaixo:

1. Baixe ou clone os arquivos do projeto para uma pasta no seu computador. Certifique-se de que os três arquivos principais estão juntos:
   * `index.html`
   * `style.css`
   * `script.js`
2. Dê um **duplo clique** no arquivo `index.html` para abri-lo diretamente no seu navegador padrão (Google Chrome, Firefox, Edge, etc.).
3. Pronto! O diário já estará funcionando.

---

## 📝 Como Publicar e Gerenciar suas "Matérias"

1. No topo da página, clique no botão **`+ Nova Manchete (Pensamento)`**.
2. Preencha os campos obrigatórios:
   * **Título da Manchete:** O tema principal do seu pensamento.
   * **Categoria:** Escolha entre Reflexão, Desabafo, Cotidiano ou Teoria da Mente.
   * **Conteúdo:** Escreva livremente como se estivesse redigindo uma matéria de jornal.
3. Clique em **`Enviar para a Redação`**. O post aparecerá instantaneamente no feed principal.
4. Se quiser remover algum registro, basta clicar no botão **`Retirar Matéria do Ar`** localizado na parte inferior de cada card.

---

## 📂 Estrutura de Arquivos

```text
/
├── index.html    # Estrutura e layout principal da página
├── style.css     # Estilos visuais e identidade de jornal
├── script.js     # Interatividade, salvamento e carregamento dos dados
└── README.md     # Documentação do projeto