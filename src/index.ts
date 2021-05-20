import { registerPlugin } from '@capacitor/core';

import type { BetOnePlugin } from './definitions';

const BetOne = registerPlugin<BetOnePlugin>('BetOne', {
  web: () => import('./web').then(m => new m.BetOneWeb()),
});

export * from './definitions';
export { BetOne };
