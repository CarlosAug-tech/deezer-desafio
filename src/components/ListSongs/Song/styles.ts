import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(300px - 10px);
  width: 100%;
  padding: 20px;
  margin: 5px;
  border-radius: 4px;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

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
    }
  }
`;
