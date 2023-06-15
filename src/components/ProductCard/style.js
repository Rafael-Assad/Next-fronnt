import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 25rem;
  height: 32.5rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.22);

  border-radius: 0.5rem;

  display:flex;
  flex-direction: column;
  align-items: flex-start;

  figure{
    margin-bottom: 1.5rem;
    align-self: center;
  }

  h2{
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 1.4rem;
  }

  p{
    font-size: 1.1rem;
    color: #777
  }
`;