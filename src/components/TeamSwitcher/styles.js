import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #202225;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Team = styled.button`
  border: 0;
  background: transparent;
  margin-bottom: 8px;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transition: all .2s ease-in;
  }

  &:hover img {
    border-radius: 30%;
  }

`;
