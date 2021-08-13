import styled from 'styled-components';

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
`;
