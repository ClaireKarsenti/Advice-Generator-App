import styled from 'styled-components';

export const Container = styled.footer`
  place-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.8em;
  text-align: center;
  margin-bottom: 0.5em;
  line-height: 1.5em;
  .attribution,
  a {
    color: var(--dark-grayish-blue);
    transition: color 0.3s ease, text-shadow 0.4s ease;
  }
  a {
    font-weight: bold;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
  a:hover {
    color: var(--neon-green);
    text-shadow: 0 0 7px var(--neon-green), 0 0 10px var(--neon-green),
      0 0 21px var(--neon-green);
    text-decoration: none;
    opacity: 0.7;
  }
  a:active {
    text-decoration: none;
  }
`;
