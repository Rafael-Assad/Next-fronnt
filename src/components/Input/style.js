import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label{
    margin-bottom: 0.3rem;
    font-size: 1.7rem;
  }

  input{
    width: 32rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 5px #0004;
    
    font-size: 1.2rem;
    line-height: 2.4rem;
    border: none;
    outline: none;

    &.error{
      border-color: #FF1D1D;
    }
  }

  .errorMessage{
    height: 1.7rem;
    font-size: 1.2rem;
    color: #FF1D1D;
  }
`;