import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: #202225;
`;

export const SignForm = styled.form`
  background-color: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  h1 {
    text-transform: capitalize;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
  }

  span {
    color: #b6bbbe;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    margin-top: 15px;
    text-transform: uppercase;
  }

  input {
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, .3);
    color: #f6f6f6;
    margin-top: 8px;
    transition: border .15s ease;
    background-color: rgba(0, 0, 0, .1);
    font-size: 16px;

    &:focus {
      border-color: #7289da;
    }
  }

  button { margin-top: 20px; }
`;
