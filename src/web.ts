import { WebPlugin } from '@capacitor/core';

import type { BetOnePlugin } from './definitions';

export class BetOneWeb extends WebPlugin implements BetOnePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
