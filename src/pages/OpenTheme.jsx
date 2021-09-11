import React from 'react';
import { Classic, Modern } from './openTheme/index';

export default function OpenTheme() {
  const data = 'Classic';
  return <div>{data === 'Classic' ? <Classic /> : <Modern />}</div>;
}
