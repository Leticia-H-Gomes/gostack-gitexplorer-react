import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/Github.svg';

export default createGlobalStyle`
*{
   margin:0;
   padding:0;
   outline:0;
   box-sizing: border-box;
}

body
{
  background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
  -webkit-font-smoothing : antialiased; /** Suavizar as letras Apenas no chrome */
}

#root {
  max-width:950px; /** No máximo 950 px */
  margin: 0 auto; /** Centralizar aplicação */
  padding: 40px 20px; /** Quando reduzir a tela nunca encostar na borda */
}

body,input,button{
font: 16px Roboto, sans-serif;
}

button {
 cursor: pointer; /**Apresentar o cursor para clicar */
}
`;
