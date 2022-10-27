import { useState, useEffect } from 'react';
import { GlobalStyle } from '../src/assets/styles/Global.style';

import Card from './component/Card.component';
import Footer from './component/Footer.component';

interface AlertType {
  show: boolean;
  msg: string;
  type: string;
}

function App() {
  const [quote, setQuote] = useState<string>(
    "It is easy to sit up and take notice, what's difficult is getting up and taking action."
  );
  const [adviceNumber, setAdviceNumber] = useState<number>(117);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertType>({
    show: false,
    msg: '',
    type: '',
  });

  const adviceUrl = 'https://api.adviceslip.com/advice';

  const asyncTimeout = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const getAdvice = async () => {
    try {
      setLoading(true);
      await asyncTimeout(1000);
      const data = await fetch(adviceUrl, { cache: 'no-cache' });
      const advice = await data.json();
      setLoading(false);
      setQuote(advice.slip.advice);
      setAdviceNumber(advice.slip.id);
    } catch (error) {
      setError(true);
      showAlert(
        true,
        'alert',
        'There was an error retrieiving advice, please try again.'
      );
      console.log(error);
    }
  };

  //Display an alert if the advice is not available
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
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
        error={error}
        alert={alert}
        showAlert={showAlert}
      />
      <Footer />
    </>
  );
}

export default App;
