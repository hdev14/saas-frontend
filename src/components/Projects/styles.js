import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;

    div {
      display: flex;
      button {
        margin-left: 10px;
      }
    }
  }

  h2 {
    flex: 1;
    display: flex;
    align-items: center;
    font-weight: normal;
    color: #bbb;
  }
  
`;

export const Project = styled.div`
  padding: 20px 30px;
  width: 100%;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, .3);
  margin-bottom: 10px;
`;
