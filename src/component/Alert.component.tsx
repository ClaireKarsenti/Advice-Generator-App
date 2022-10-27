import { FC, useEffect } from 'react';

import { Container } from '../assets/styles/Alert.style';

interface AlertType {
  type: string;
  msg: string;
//   removeAlert: any;
}

const Alert: FC<AlertType> = ({ type, msg}) => {
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       removeAlert();
//     }, 2500);
//     return () => clearTimeout(timeout);
//   });

  return (
    <Container>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Container>
  );
};

export default Alert;
