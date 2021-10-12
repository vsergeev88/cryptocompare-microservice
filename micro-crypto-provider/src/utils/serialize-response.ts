import { ResponseCurrency } from '../types';

// TODO: use interceptor instead this workaround
export const serializeResponse = (data: any): ResponseCurrency => {
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
