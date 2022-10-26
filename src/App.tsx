import { useState, useEffect } from 'react';
import { GlobalStyle } from '../src/assets/styles/Global.style';

import Card from './component/Card.component';
import Footer from './component/Footer.component';

function App() {
  const [quote, setQuote] = useState<string>(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [adviceNumber, setAdviceNumber] = useState<number>(117);
  const [loading, setLoading] = useState<boolean>(false);

  const adviceUrl = 'https://api.adviceslip.com/advice';

  const asyncTimeout = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const getAdvice = async () => {
    try {
      setLoading(true);
      await asyncTimeout(500);
      const data = await fetch(adviceUrl);
      const advice = await data.json();
      setLoading(false);
      setQuote(advice.slip.advice);
      setAdviceNumber(advice.slip.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Card
        advice={quote}
        adviceNumber={adviceNumber}
        getAdvice={getAdvice}
        loading={loading}
      />
      <Footer />
    </>
  );
}

export default App;
