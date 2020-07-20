import styled from 'styled-components';

const Loading = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  svg {
    height: 150px;
    width: 150px;
    animation: rotation 1.5s infinite ease;
  }
`;

export default Loading;
