import React, { useState } from 'react';

import Storyteller from 'components/storyteller';
import { rootPage } from '../../pages';
import { Page } from 'types';

const App = (): JSX.Element => {
  const [page] = useState<Page>(rootPage);

  return <Storyteller {...page} />;
};

export default App;
