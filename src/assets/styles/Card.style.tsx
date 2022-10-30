import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 0.7rem;
  padding: 3em 1.5em;
  min-height: 21em;
  width: 22em;
  background: var(--dark-grayish-blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: animate-roll 2s ease-out;
  @keyframes animate-roll {
    0% {
      opacity: 0;
      transform: scale(0, 0) rotate(360deg);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1) rotate(0deg);
    }
  }
  @media screen and (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
  @media (min-width: 768px) {
    height: 21em;
    width: 36em;
    padding: 3em 3.5em;
  }
  span {
    color: var(--neon-green);
    text-transform: uppercase;
    letter-spacing: 0.4em;
    font: var(--fw) 12px 'Manrope', sans-serif;
  }
  q {
    color: var(--light-cyan);
    text-align: center;
    line-height: 1.5;
    padding-top: 1em;
    font-size: 28px;
    font-weight: var(--fw);
  }
  picture img {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    display: block;
  }
  button {
    padding: 1.5rem;
    background-color: var(--neon-green);
    border-radius: 50%;
    width: 6em;
    height: 6em;
    border: none;
    outline: none;
    position: absolute;
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out;
    @media (hover: hover) {
      /* Targets devices that can hover */
      &::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        box-shadow: 0 0 2em 0.5em var(--neon-green);
        transition: opacity 0.3s linear;
      }
      &:hover::after {
        opacity: 1;
      }
    }
  }
  button img {
    width: 100%;
    height: 100%;
  }
  button img.loading {
    animation: rotation 1s infinite linear;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    transition: 0.3s ease-in-out;
  }
`;
