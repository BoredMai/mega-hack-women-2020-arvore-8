import ContentWrapper from 'components/content-wrapper';
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = (): JSX.Element => {
  return (
    <ContentWrapper>
      <h1>Colha uma História</h1>
      <p>
        Clarice, seja a autora do seu próprio conto e compartilhe com todos suas
        aventuras!
      </p>
      <button>
        <Link to='/biblioteca'>Vamos lá</Link>
      </button>
    </ContentWrapper>
  );
};

export default LandingPage;
