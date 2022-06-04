import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`




`;
export const SpanType = styled.span`
  width: 50px;
  height: 20px;
  border: none;
  background: #fff;
  background-blend-mode: soft-light;
  opacity: 0.5;
  border-radius: 38px;
  font-size: 12px;
  text-align: center;
  color: gray;
  font-weight: 500;
`;

export const LiCard = styled.li`
  display: flex;
  justify-content: space-between;
  width: 152px;
  height: 108px;

  padding: 5px;
  border-radius: 12px;
  margin: 0 5px 20px 0;
  cursor: pointer;
  box-sizing: border-box;
  ${(props) => {
    switch (props.tipo) {
      case "grass":
        return css`
          background-color: #7fff00; `;
      case "fire":
        return css`
          background-color: #ff7256; `;
      case "bug":
        return css`
          background-color: #cd853f;`;
      case "ice":
        return css`
          background-color: aqua;  `;
      case "water":
        return css`
          background-color: #00bfff;
        `;
      case "dark":
        return css`
          background-color: #696969;
        `;
      case "psychic":
        return css`
          background-color: pink;
        `;
      case "electric":
        return css`
          background-color: yellow;
        `;
      case "fairy":
        return css`
          background-color: #ff82ab;
        `;
      case "dragon":
        return css`
          background-color: #ff4040;
        `;
      case "normal":
        return css`
          background-color: #8b8b83;
        `;
      case "flying":
        return css`
          background-color: #87ceff;
        `;
      case "poison":
        return css`
          background-color: #8968cd;
        `;
      case "ground":
        return css`
          background-color: #ffec8b;
        `;
      case "fighting":
        return css`
          background-color: #d2b48c;
        `;
      case "rock":
        return css`
          background-color: #9c9c9c;
        `;
      case "ghost":
        return css`
          background-color: #ba55d3;
        `;
      default:
        return false;
    }
  }}
`;
