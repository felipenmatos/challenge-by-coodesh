# SOBRE O PROJETO

![project1](https://user-images.githubusercontent.com/82072640/206578734-9dc9b10a-7128-4789-9e5f-f76272222721.jpg)

O projeto Challenge consiste em um sistema de listagem de palavras em Inglês, onde é possível visualizar diversas palavras e ao clicar, verificar o significado e o áudio de pronúncia, além disso o sistema te dar a possibilidade de salvar em favoritos as palavras que você achou interessante, manipulando sua lista de favoritos. Para inicializar o sistema e consultar as palavras, será necessário efetuar o cadastro e o Login. 

## O DESENVOLVIMENTO

A aplicação foi desenvolvida em React + Typescript, sendo utilizado algumas libs, testes e implementação de um banco de dados na nuvem para ser necessário listar uma gama de palavras. 
Utilizei o Storybook para testar os componentes de forma unitária antes de implementa-las nas respectivas páginas e elementos. 
O firebase foi a principal fonte de desenvolvimento do banco de dados para armazenar a lista de palavras do dicionário, sendo configurado e inicializado no projeto seguindo a sua documentação básica. Para importar as palavras no firebase, foi necessário transformar a lista de texto em uma array e transformar em json para a sua importação. 
A consulta das rotas da API foi implementada utilizando o Axios, passando as validações. Para essas validações, foi criado um Context para manipular algumas informações necessárias, além de utilizar o Hooks para dinamismo da aplicação do lado do cliente. A rota da Home foi privada para a verificação de autenticação feita pelo LocalStorage.  
A estilização dos componentes e páginas, foi desenvolvida em styled-components para diminuir a quantidade de arquivos css que seriam gerados, passando a regra de desenvolvimento do css na sua devida página de utilização. 
Para a visualização e audição da pronúncia foi implementada um componente externo que foi instalada, sendo possível dar play, mudar a velocidade e voltar o áudio.

###O projeto está configurado em PWA para melhor mobilidade em android. 

## O Protótipo 

O protótipo do projeto foi desenvolvido com Figma utilizando a base em cima das pesquisas para chegar ao desejável final, um sistema de forma acessível e fácil de manipular. 

## API utilizada no projeto : (Dictionary Api)[https://dictionaryapi.dev/];

## Libs utilizada no projeto : 

Pacote NPM;
React-router-dom ;
Storybook;
Styled-components;
Axios;
React-audio-player;

#Protótipo 

![Prototipo](https://user-images.githubusercontent.com/82072640/191534357-18161ca8-450c-4fbd-a2e2-fdbda47b6357.jpg)

#Tela de Login
![Login](https://user-images.githubusercontent.com/82072640/191532969-51fb0926-697d-4186-ac86-387071660711.jpg)
![LoginMobile](https://user-images.githubusercontent.com/82072640/191533078-38ba57fc-b4f0-4b7f-aa2f-4af0eac7bc1b.jpg)

#Tela de Cadastro
![Cadastro](https://user-images.githubusercontent.com/82072640/191533113-b765f9f9-8d9e-4ccb-b8c3-e032fcd69cac.jpg)
![RegisterMobile](https://user-images.githubusercontent.com/82072640/191533226-38f7b912-28c0-46fb-a6bb-e6e0e24dcfdc.jpg)

#Tela de Conclusão de Cadastro 
![Cadastro_Concluido](https://user-images.githubusercontent.com/82072640/191533331-ada30477-ff7b-4780-a5b7-50e1719e5df3.jpg)
![CadastroConcluidoMobile](https://user-images.githubusercontent.com/82072640/191533364-f0121669-0cd5-462b-97c3-9ac1cb923e1d.jpg)

#Tela Home 
![Home](https://user-images.githubusercontent.com/82072640/191533438-ddef0ac8-1011-482b-b36a-2aa7db8f2da3.jpg)
![FavoritesMobile](https://user-images.githubusercontent.com/82072640/191533472-ad50913c-f22d-47d6-8a8b-c6a24e3897b0.jpg)

#Adicionando Itens ao Favoritos
![AddFavorite](https://user-images.githubusercontent.com/82072640/191533560-84f5a378-636f-490c-b61d-6c8d5625ef14.jpg)

#Listagem de Favoritos
![HomeFavorite](https://user-images.githubusercontent.com/82072640/191533808-6d821a31-a232-4d0f-9301-0c6b786e1d10.jpg)
![FavoritesMobile](https://user-images.githubusercontent.com/82072640/191533850-0ede25c9-a7b2-40b6-a878-7e075f5e60f3.jpg)

#Estrutura de Arquivos

![EstruturaPastas](https://user-images.githubusercontent.com/82072640/191535755-60761dbe-2952-4bf6-b9f0-94efc013d326.jpg)

#Teste Storybook 
![Teste-Storybook](https://user-images.githubusercontent.com/82072640/191535887-3911fc55-aa3d-49fe-856a-341bbef2894e.jpg)

### `npm start`

### `npm run storybook` para teste. 

