import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --light-cyan: hsl(193, 38%, 86%);
        --neon-green: hsl(150, 100%, 66%);
        --grayish-blue: hsl(217, 19%, 38%);
        --dark-grayish-blue: hsl(217, 19%, 24%);
        --dark-blue: hsl(218, 23%, 16%);

        --fw: 800;
    }
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--dark-blue);
            display: flex;  
            align-items: center;
            justify-content: center;
            text-align: center;
            min-height: 100vh;
            font-family: 'Manrope', sans-serif;
        }`;
