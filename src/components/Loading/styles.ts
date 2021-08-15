import styled, { css } from 'styled-components';

interface ILoadingStyleProps {
  loading: boolean;
}

export const Container = styled.div<ILoadingStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-column: span 4;

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

  @media (max-width: 1305px) {
    grid-column: span 3;
  }

  @media (max-width: 1004px) {
    grid-column: span 2;
  }

  @media (max-width: 704px) {
    grid-column: span 1;
  }
`;
