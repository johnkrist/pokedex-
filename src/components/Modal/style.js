import styled from "styled-components";

export const StyledModal = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #494949;
  inset: 0;
  

  .btn__login {
    width: 80px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.5s;
    background-color: gray;
    color: #fff;
    &:hover {
      background-color: green;
      border: none;
    }
  }
  .input__login {
    width: 220px;
    height: 40px;
    font-size: 18px;
    border-radius: 8px;
  }

  .form__login__box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 150px;
    padding: 20px;
    background-color: white;
    border-radius: 18px;
    gap: 20px;
    .label__login {
      font-size: 22px;
      color: #494949;
    }
  }
`;
