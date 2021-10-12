import { CompareRequestPayload } from '../types';

export const CRYPTOCOMPARE_API_URL = ({
  fsyms,
  tsyms,
}: CompareRequestPayload): string => {
  return `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms.toString()}&tsyms=${tsyms.toString()}`;
};
