import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalShape = styled.div`
  background-color: #36393f;
  border-radius: 5px;
  border: 1px solid #353940;
  box-shadow: 0 2px 10px rgba(0, 0, 0, .25);
  width: ${(props) => (props.size === 'big' ? '600px' : '400px')};
  padding: 30px;

  h1 {
    text-transform: capitalize;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
  }

  form { 
    display: flex;
    flex-direction: column;
    justify-content: stretch;

    & > span {
      color: #b6bbbe;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;
      text-transform: uppercase;
    }

    & > input {
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

    & > button { margin-top: 20px; }

    div.buttons {
      display: flex;
      width: 100%;
      margin-top: 20px;
      align-items: center;
      justify-content: space-between;
    }
  }

`;
