import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-gap: 10px;
  max-width: 1200px;
  width: 100%;
  padding-bottom: 20px;
  margin: 0 auto;

  > h3 {
    color: #c53030;
    text-align: center;
  }

  @media (max-width: 1305px) {
    max-width: unset;
  }
`;
