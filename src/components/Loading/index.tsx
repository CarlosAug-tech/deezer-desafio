import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Container } from './styles';

interface ILoadingProps {
  loading: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ loading }) => (
  <Container loading={loading}>
    <FaSpinner />
  </Container>
);

export default Loading;
