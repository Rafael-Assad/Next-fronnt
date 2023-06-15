import styled from 'styled-components';

export const HeaderConteiner = styled.header`
  width: 100vw;
  max-width: 100%;
  height: 10vh;
  background-color: #F9F9F9;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  box-shadow: 0 1px 7px #0003;

  figure{
    img{
      width: 12rem;
    }
  }
  a{
    padding: 0 1rem;
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;