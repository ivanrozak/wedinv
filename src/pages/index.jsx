import React from 'react';

import { Classic, Modern } from './themes';

function MainPage() {
  const data = 'Classic';
  return <div>{data === 'Classic' ? <Classic /> : <Modern />}</div>;
}

export default MainPage;
