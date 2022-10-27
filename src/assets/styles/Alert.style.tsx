import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  .alert {
    margin: auto;
    font-size: 1.3em;
    padding: 2em;
    color: var(--neon-green);
    text-shadow: 0 0 7px var(--neon-green), 0 0 10px var(--neon-green),
      0 0 21px var(--neon-green), 0 0 25px var(--neon-green),
      0 0 31px var(--neon-green);
    animation: flashing 5s infinite;
    transition: none;
  }
  @keyframes flashing {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
