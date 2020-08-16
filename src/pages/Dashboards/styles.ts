import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40 px;
  max-width: 700px;

  display: flex; /**forçar o input ficar do lado do botão */

  input {
    flex: 1; /**tornar o input flexivel,irá ocupar o máximo do espaço determinado */
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 00 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b2;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s; /**trocar a cor do botão mai devagar */

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repository = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block; /** atag <a> vem por padrão inline */
    text-decoration: none; /**tirar o underline nos textos */

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(
        10px
      ); /** Quando passar o mouse irá distanciar 10px do eixo x */
    }

    & + a {
      /** ou a + a */
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      /** [icone da seta] -  um icone sempre vai estar no formato .svg */
      margin-left: auto; /** vai pegar o tamanho máximo da esquerda */
      color: #cbcbd6;
    }
  }
`;
