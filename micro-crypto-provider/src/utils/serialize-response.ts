import {
  FSYMS,
  TSYMS,
  ResponseCurrency,
  CryptoResponse,
  CompareRequestPayload,
} from '../types';

const serializeCurrencyData = (data: any): ResponseCurrency => {
  const {
    CHANGE24HOUR,
    CHANGEPCT24HOUR,
    OPEN24HOUR,
    VOLUME24HOUR,
    VOLUME24HOURTO,
    LOW24HOUR,
    HIGH24HOUR,
    PRICE,
    SUPPLY,
    MKTCAP,
  } = data;

  return {
    CHANGE24HOUR,
    CHANGEPCT24HOUR,
    OPEN24HOUR,
    VOLUME24HOUR,
    VOLUME24HOURTO,
    LOW24HOUR,
    HIGH24HOUR,
    PRICE,
    SUPPLY,
    MKTCAP,
  };
};

const filterTSYMS = (data: any, tsyms: TSYMS[]) => {
  return Object.keys(data)
    .filter(key => tsyms.includes(key as TSYMS))
    .reduce(
      (res, key) => ((res[key] = serializeCurrencyData(data[key])), res),
      {},
    );
};

export const serializeResponse = (
  data: any,
  { fsyms, tsyms }: CompareRequestPayload,
): CryptoResponse => {
  return Object.keys(data)
    .filter(key => fsyms.includes(key as FSYMS))
    .reduce(
      (res, key) => ((res[key] = filterTSYMS(data[key], tsyms)), res),
      {},
    );
};
