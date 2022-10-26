import { FC } from 'react';
import { Container } from '../assets/styles/Card.style';

import Dice from '../assets/images/icon-dice.svg';
import Desktop from '../assets/images/pattern-divider-desktop.svg';
import Mobile from '../assets/images/pattern-divider-mobile.svg';

interface CardType {
  advice: string;
  adviceNumber: number;
  getAdvice: () => void;
  loading: boolean;
}

const Card: FC<CardType> = ({ advice, adviceNumber, getAdvice, loading }) => {
  return (
    <Container>
      <span>Advice #{adviceNumber}</span>
      <q>{advice}</q>
      <picture>
        <source media="(min-width: 768px)" srcSet={Desktop} />
        <img src={Mobile} alt="" aria-hidden="true" />
      </picture>
      <button onClick={getAdvice} aria-label="dice">
        <img
          src={Dice}
          alt=""
          aria-hidden="true"
          className={loading ? 'loading' : ''}
        />
      </button>
    </Container>
  );
};

export default Card;
