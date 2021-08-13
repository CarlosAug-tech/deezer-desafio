import styled, { css } from 'styled-components';

interface ILoadingStyleProps {
  loading: boolean;
}

export const Container = styled.div<ILoadingStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 10px 0; */

  svg {
    ${(props) =>
      props.loading &&
      css`
        animation: loadingSpinner 2s infinite linear;
      `}
  }

  @keyframes loadingSpinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
