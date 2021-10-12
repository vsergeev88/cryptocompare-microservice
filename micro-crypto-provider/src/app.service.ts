import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CompareRequestPayload, ResponseCurrency } from './types';
import { serializeResponse } from './utils';

@Injectable()
export class AppService {
  async fetchCryptoComparator({
    fsyms,
    tsyms,
  }: CompareRequestPayload): Promise<ResponseCurrency> {
    const { data } = await axios.get(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${fsyms.toString()}&tsyms=${tsyms.toString()}`,
    );
    if (data) {
      return serializeResponse(data);
    }

    return null;
  }
}
