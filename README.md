
<!-- MODELO PROJETO FINALIZADO -->
<h1 align="center"> 
	  🚀✅ DevRedux - Concluído ✅🚀
</h1>

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO MENU DE NAVEGAÇÃO -->
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>



<!-- MODELO DESCRIÇÃO SOBRE O PROJETO: -->
## 💻 Sobre o projeto

<!-- EXPLICA O MOTIVO DO PROJETO -->
DevRedux é um projeto didático a dim de aprofundar meus conhecimentos na gestão de estado de aplicações React com o uso do Redux e Redux Saga.

<!-- LINHA DE DIVISÃO: -->
---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO FUNCIONALIDADES: -->
## ⚙️ Funcionalidades

 Validações de dados: Durante o desenvolvimento, implementei validações para garantir que campos essenciais, como endereço, sejam preenchidos corretamente antes de serem salvos. Além disso, assegurei que apenas usuários autenticados possam adicionar ou remover seus endereços, utilizando condicionais dentro dos reducers para maior controle e segurança.

- Redux Saga - Efeitos assíncronos: A parte mais interessante do projeto está no uso de Redux Saga para lidar com efeitos assíncronos, como o carregamento de dados de uma API externa (neste caso, uma lista de usuários). A saga orquestra as ações de forma eficiente, utilizando o call para realizar a requisição HTTP e o put para despachar as ações fetchUserSucces ou fetchUserFail, dependendo do resultado da API.

- Integração entre componentes e Redux: Estou usando useSelector para acessar o estado global e useDispatch para despachar ações dentro dos componentes. Por exemplo, no componente Home, ao clicar no botão "Buscar usuários", a ação fetchUsers é despachada e a saga é ativada para carregar os dados da API.

- Feedbacks para o usuário: Em casos de erro ou sucesso, como na atualização ou remoção de endereços, implementei alertas e mudanças no estado, para garantir uma comunicação clara com o usuário.

Esse projeto tem sido uma excelente oportunidade para aprender na prática como gerenciar o estado da aplicação de forma escalável e otimizada, além de me ajudar a entender melhor como utilizar Redux Saga para lidar com fluxos assíncronos complexos.

<!-- ---------------------------------------------------------------------- -->

<!-- EXEMPLO DE LAYOUT: -->
## 🎨 Layout



### Widget em uma página externa

![Web1](https://github.com/rodrigosousa94/dev-redux/blob/main/public/tela-login.png)
![Web2](https://github.com/rodrigosousa94/dev-redux/blob/main/public/2.png)


<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE COMO EXECUTAR O PROJETO -->
## 🚀 Como executar o projeto

1 - Baixar o Projeto <br>
2 - Instalar a pasta node_modules (npm install)<br>
3 - Rodar o projeto (npm run dev)

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE PRÉ REQUISITOS -->
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE TECNOLOGIAS -->
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-End** 

- React
- Redux
- Vite
- Css Module
- 
<!-- ---------------------------------------------------------------------- -->

<!-- MODELO DE COMO CONTRIBUIR PARA O PROJETO -->
## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)



