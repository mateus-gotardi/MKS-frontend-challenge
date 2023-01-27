# Front End challenge da empresa Mks Desenvolvimento De Sistemas

Diretrizes do desafio
===========================

O objetivo principal desse teste é avaliar sua capacidade de escrever código limpo, bem testado e reutilizável.

Tarefa (funcional)
---------------

Para esse desafio, você deve consumir nossa [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

A aplicação deve conter apenas uma página/rota e um carrinho.

- <b>Loja</b>: A lista de produtos deve ser buscada de nossa API, use um shimmer/skeleton enquanto estiver em loading.
 
- <b>Carrinho</b>: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Use do Jest e a testing-library para realizar os testes unitários.

Recursos
---------------

UI/UX: [Figma loja](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1) PS: O design system está incluso, incluindo a fonte.

API: [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

Ferramentas requeridas
---------------

1. TypeScript
2. React ou Next.js (Preferimos Next.js)
3. Redux toolkit
4. Styled-components
5. Jest

# Execução

## estrutura

    -Os componentes estão na pasta components, em subpastas juntamente com os respectivos sub-componentes e estilos, eles são importados para o arquivo index da pasta components e exportados a partir de lá a fim de diminuir a multiplicidade de imports

    - Os reducers estão setados na pasta features, cada qual com seu proprio selector configurado

    - Os tipos estão concentrados na pasta interface, no arquivo index

    - Os SVGs estão componentizados na pasta SVG para facilitar o uso

    - Para as chamadas de API foi utilizado axios, a baseURL está configurada no arquivo API config

    - As requisições são feitas em SSR utilizando getInitialProps no componente Home

    - Os testes estão no diretório __tests__ o teste de api foi desabilitado para evitar sobrecarga de requisições

    - As funções para formatação de nomes e preço dos produtos está em utils/functions
    
## Images
### result
![image](https://user-images.githubusercontent.com/98918812/215115485-6e5e4d1a-ff8a-4e8d-83cd-6bcdaca1c4f3.png)
    - A fim de seguir fielmente o layout proposto e ainda assim ser possivel ler a descrição de todos os produtos, adicionei um hover aos produtos
![image](https://user-images.githubusercontent.com/98918812/215116511-f0466518-02d8-461c-9522-7e5b3f6301f9.png)
![image](https://user-images.githubusercontent.com/98918812/215116873-c9dcc739-b986-4580-a55c-c6b22c296acd.png)

