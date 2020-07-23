import styled, { css } from 'styled-components';

const sizes = {
  default: css`
    height: 28px;
    font-size: 12px;
  `,
  small: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 16px;
  `,
};

const colors = {
  default: css`
    background-color: #7289da;
    &:hover {
      background-color: #5f73bc;
    }
  `,
  danger: css`
    background-color: #e04848;
    &:hover {
      background-color: #a43d3d;
    }
  `,
  gray: css`
    background-color: #b6bbbe;
    color: #666;
    &:hover {
      background-color: #999;
    }
  `,
};

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: background-color .15s ease;
  background-color: #7289da;
  border: none;
  color: white;
  font-size: 12px;
  padding: 0 10px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => sizes[props.size || 'default']}
  ${(props) => colors[props.color || 'default']}
  ${(props) => props.filled === false && css`
    background: none;
    &:hover {
      background: none;
      opacity: 0.6;
    }
  `}
`;

export default Button;
