# Página de Cadastro e Login

Esta aplicação de cadastro e login foi desenvolvida com React, utilizando o Yup para validação de formulários e conectada a um banco de dados MySQL. O sistema realiza login e permite o cadastro de novos usuários, com a parte de servidor desenvolvida em Node.js. No login, é necessário fornecer o e-mail e a senha, enquanto no cadastro são requeridos o nome de usuário, e-mail e senha. O projeto é totalmente responsivo, adaptando-se a diferentes tamanhos de tela, como de dispositivos móveis, tablets e desktops.

## Principais Tecnologias Utilizadas

- React
- JavaScript
- HTML5
- CSS3
- Yup
- Node
- MySQL
- Vite

## Funcionalidades

- Cadastro de Usuário: O usuário pode criar uma conta preenchendo um formulário com validação usando o Yup.
- Login de Usuário: O usuário pode fazer login, com uma mensagem de sucesso ou falha exibida conforme o resultado.
- Responsividade: O layout da aplicação se ajusta automaticamente a diferentes dispositivos, oferecendo uma boa experiência em telas menores.

## Como Executar

1. Clone o repositório com `git clone https://github.com/isaccruz78/login-register-page.git` na sua máquina através do `terminal` ou `git bash`, ou, se preferir, acesse o projeto hospedado em [https://isaccruz78.github.io/login-register-page/](https://isaccruz78.github.io/login-register-page/) (porém, sem o funcionamento do banco de dados, servidor e o funcionamento correto de rotas).
2. Instale as dependências com `npm install` na pasta do repositório.
3. Configure o banco de dados MySQL, criando uma tabela e definindo o campo "email" como UNIQUE KEY.
4. Inicie o servidor com `node service.js`, referenciando o local do arquivo `service.js` no `terminal`.
5. Inicie o projeto com Vite usando `npm run dev` na pasta do repositório.

## Autor

### Isac Cruz (isaccruz78) - Estudante da Universidade Estácio de Sá

[![LINKEDIN](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/isaccruz)

## Imagens

![imglogindesk](https://github.com/user-attachments/assets/fcdc64a6-810e-48ca-8c81-dc0307410857)
![imgresgisdesk](https://github.com/user-attachments/assets/4e59364f-91be-4ef8-abd9-ea4c752ab57c)
![imgloginmobile](https://github.com/user-attachments/assets/009fc9c1-fd55-4aac-aa70-358900eba620)
![imgregismobile](https://github.com/user-attachments/assets/576d401c-4025-4162-9d0c-9f77a131985e)

