import styled, { css } from 'styled-components';

interface IMenuSearchStyleProps {
  miniMenu: boolean;
}

export const Container = styled.div<IMenuSearchStyleProps>`
  width: 100%;
  margin-top: 20px;
  padding: 0 10px;
  color: #fff;
  position: relative;

  input {
    cursor: ${(props) => (props.miniMenu ? 'pointer' : '')};
    width: 100%;
    padding: 10px 10px 10px 32px;
    border: 0;
    border-radius: 10px;
    color: #fff;
    background: #316280;

    ${(props) =>
      !props.miniMenu &&
      css`
        padding: 10px 20px 10px 32px;
      `}

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      top: -6px;
      left: 15px;
      font-size: 10px;
      padding: 0 3px;
      background: linear-gradient(#457b9d, #316280);
    }
  }

  label {
    top: 10px;
    left: 43px;
    position: absolute;
    opacity: ${(props) => (props.miniMenu ? '0' : '1')};
    pointer-events: none;
    transition: all 0.4s ease;
  }

  > svg {
    top: 10px;
    left: ${(props) => (props.miniMenu ? '50%' : '20px')};
    position: absolute;
    transform: ${(props) => (props.miniMenu ? 'translateX(-50%)' : '')};
    pointer-events: none;
  }

  > div {
    z-index: 1;
    top: 3px;
    right: 15px;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;

    ${(props) =>
      !props.miniMenu &&
      css`
        opacity: 1;
        visibility: visible;
      `}

    &:hover {
      > span {
        opacity: 1;
        visibility: visible;
      }
    }

    > span {
      z-index: 1;
      width: 250px;
      padding: 5px;
      bottom: -50px;
      left: -112px;
      right: 0;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      color: #333;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%);
      transition: all 0.4s ease;

      &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: calc(100% - 35px);
        left: 50%;
        border: 8px solid black;
        border-color: transparent transparent #fff #fff;
        transform-origin: 0 0;
        transform: rotate(135deg) translateX(-50%);
        box-shadow: -3px 3px 3px 0 rgba(0, 0, 0, 12%);
      }
    }
  }
`;
