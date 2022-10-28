import { FC } from 'react';

import { Container } from '../assets/styles/Alert.style';

interface AlertType {
  type: string;
  msg: string;
}

const Alert: FC<AlertType> = ({ type, msg}) => {
  return (
    <Container>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Container>
  );
};

export default Alert;
