import styled, { css } from 'styled-components';

interface ISongStyleProps {
  isFavorite?: boolean;
}

export const Container = styled.div<ISongStyleProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 4px;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  > div {
    width: 100%;
    position: relative;

    > img {
      width: 100%;
    }

    &:hover > div {
      opacity: 1;
      visibility: visible;
    }

    > div {
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: calc(100% - 5px);
      top: 0;
      left: 0;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      color: #fff;
      background: rgba(0, 0, 0, 0.7);
      transition: all 0.4s ease;

      > a {
        align-self: flex-end;
        font-size: 12px;
        color: #fff;
        bottom: 3px;
        position: absolute;
      }
    }
  }

  audio {
    width: 100%;
    margin-top: auto;
  }

  button {
    z-index: 1;
    top: 3px;
    right: 3px;
    position: absolute;
    border: 0;
    background: transparent;

    svg {
      font-size: 20px;
      transition: all 0.4s ease;
    }
  }

  > strong {
    margin: 5px 0;
    font-size: 16px;
    text-align: center;
  }
`;
