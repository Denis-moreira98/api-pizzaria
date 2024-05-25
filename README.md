<div align="center">
  
![logo](https://github.com/Denis-moreira98/api-pizzaria/assets/72985107/68e4a1f0-c155-405a-b68a-f1e6a5636e4b)

</div>

# API Pizzaria 🍕

## Sobre o projeto

Uma aplicação desenvolvida para o gerenciamento de pedidos, produtos, categorias e autenticação de usuários. Utilizando o token JWT para autenticação, a API segue os padrões de arquitetura MVC e os princípios RESTful.

## Funcionalidades

### Usuários
- **Cadastro de Usuários:** Permite o registro de novos usuários na plataforma.
- **Login:** Permite que usuários registrados façam login na aplicação.
- **Detalhes do Usuário:** Fornece informações detalhadas do usuário com base no token de autenticação.

### Categorias
- **Cadastro de Categorias:** Permite a criação de novas categorias para os produtos.
- **Listagem de Categorias:** Apresenta todas as categorias cadastradas na plataforma.
- **Remoção de Categoria:** Permite a exclusão de uma categoria existente.

### Produtos
- **Cadastro de Produtos:** Permite adicionar novos produtos, associando-os a uma categoria.
- **Listagem de Produtos por Categoria:** Apresenta todos os produtos de uma categoria específica.
- **Edição de Informações de Produto:** Permite modificar informações de um produto existente.
- **Listagem de Todos os Produtos:** Apresenta todos os produtos cadastrados na plataforma.

### Pedidos
- **Criação de Pedido:** Permite a criação de novos pedidos.
- **Remoção de Pedido:** Permite a exclusão de um pedido existente.
- **Adição de Produtos ao Pedido:** Permite adicionar produtos a um pedido em andamento.
- **Remoção de Produto do Pedido:** Permite remover produtos de um pedido em andamento.
- **Listagem de Todos os Pedidos:** Apresenta todos os pedidos realizados na plataforma.
- **Detalhes do Pedido:** Fornece informações detalhadas de um pedido específico.
- **Envio de Pedido:** Marca um pedido como enviado, retirando-o do modo de rascunho.
- **Finalização de Pedido:** Finaliza um pedido em andamento.

## Requisitos para rodar localmente

Para executar o projeto localmente, são necessários os seguintes requisitos:

- [Nodejs](https://nodejs.org/en/download/current) (versão 18 ou superior)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
  
Após a instalação, crie um banco de dados no pgAdmin e lembre-se do nome do banco e da senha.

## Configuração do Ambiente

1. Clone o repositório:
   
    ```bash
    git clone https://github.com/Denis-moreira98/api-pizzaria
    ```
2. Acesse a pasta raiz do projeto:
   
    ```bash
    cd api-pizzaria
    ```
3. Instale as dependências:
   
    ```bash
    yarn add
    ```
4. Configure as variáveis de ambiente. Consulte o arquivo `.env.example` para referência.

<div align="center">
  
  ![Group 1 (2)](https://github.com/Denis-moreira98/api-pizzaria/assets/72985107/1db608df-833e-4b4c-8c04-f4d4a9f78803)

</div>

5. Execute as migrações no banco de dados:
   
    ```bash
    npx prisma migrate dev
    ```
6. Inicie o servidor:
   
    ```bash
    yarn run dev
    ```

## Documentação da API

A documentação da API pode ser acessada em `/api-docs`, onde estão listadas todas as rotas disponíveis.

![image](https://github.com/Denis-moreira98/api-pizzaria/assets/72985107/8c3137aa-d047-41a8-9dc7-28a2368e7ecc)

## Tecnologias Utilizadas

- **Node.js com TypeScript:** Node.js é uma plataforma de desenvolvimento JavaScript do lado do servidor e TypeScript é uma linguagem que adiciona tipagem estática ao JavaScript, proporcionando uma melhor experiência de desenvolvimento e menos erros.

- **Express.js (framework):** Express.js é um framework web para Node.js que simplifica o processo de criação de aplicativos web e APIs, oferecendo uma ampla variedade de recursos e funcionalidades.

- **PostgreSQL com Prisma Client:** PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto e o Prisma Client é uma ferramenta de acesso ao banco de dados que oferece uma interface de programação de aplicativos (API) ergonômica e tipo seguro para interagir com o banco de dados.

- **Token JWT:** JWT (JSON Web Tokens) é um padrão aberto (RFC 7519) que define uma maneira compacta e autossuficiente para transmitir informações de forma segura entre partes como um objeto JSON. É comumente usado para autenticação e troca segura de informações entre o cliente e o servidor.

- **Multer (para upload de imagens):** Multer é um middleware Node.js para lidar com dados de formulários em formato multipart/form-data, usado principalmente para fazer upload de arquivos, como imagens, em aplicativos web.

- **Swagger (para documentação da API):** Swagger é uma ferramenta de código aberto que ajuda os desenvolvedores a projetar, construir, documentar e consumir APIs RESTful de maneira fácil e eficiente, fornecendo uma interface interativa para documentação e teste de API.

