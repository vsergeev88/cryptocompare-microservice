import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { CRYPTOCOMPARE_API_URL, payloadDefault } from './constants';
import { CompareRequestPayload, CryptoResponse } from './types';
import { serializeResponse } from './utils';

@Injectable()
export class AppService {
  async fetchCryptoComparator(
    payload: CompareRequestPayload,
  ): Promise<CryptoResponse> {
    const fetchedData = (await axios.get(
      CRYPTOCOMPARE_API_URL(payload),
    )) as AxiosResponse<any>;

    if (fetchedData?.data) {
      return serializeResponse(fetchedData.data.RAW, payload);
    }

    return null;
  }

  async scheduledFetch(): Promise<CryptoResponse> {
    return await this.fetchCryptoComparator(payloadDefault);
  }
}
