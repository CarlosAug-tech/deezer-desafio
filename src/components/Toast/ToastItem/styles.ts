import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface IToastStyleProps {
  type: 'success' | 'error';
  description?: string;
}

const toastTypeVariations = {
  success: css`
    color: #2e656a;
    background: #e6fffa;
  `,
  error: css`
    color: #c53030;
    background: #fddede;
  `,
};

export const Content = styled(animated.div)<IToastStyleProps>`
  display: flex;
  max-width: 360px;
  width: 100%;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  ${(props) => toastTypeVariations[props.type]}
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  ${(props) =>
    !props.description &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
