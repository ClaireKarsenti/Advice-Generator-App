import { FC } from 'react';
import { AlertType } from '../App';

import { Container } from '../assets/styles/Alert.style';

const Alert: FC<AlertType> = ({ type, msg}) => {
  return (
    <Container>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Container>
  );
};

export default Alert;
