type FSYMS = 'BTC' | 'XRP' | 'ETH' | 'BCH' | 'EOS' | 'LTC' | 'XMR' | 'DASH';
type TSYMS = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'RUR';

export type CompareRequestPayload = {
  fsyms: FSYMS[];
  tsyms: TSYMS[];
};
