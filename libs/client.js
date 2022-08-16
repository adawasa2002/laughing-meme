// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'usagi009',
  apiKey: process.env.API_KEY,
});