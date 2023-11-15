import { AxiosResponse } from 'axios';
import { axios } from '@utils/client/RequestClient';
import GetKakaoAuthUriRs from '@interface/rs/oauth/GetKakaoAuthUriRs';
import IssueTokenWithKakaoRs from '@interface/rs/oauth/IssueTokenWithKakaoRs';

const prefix = '/oauth/v1';
interface OauthRepo {
  //토큰발급 - 카카오
  createOauthKakao(code: string): Promise<AxiosResponse<IssueTokenWithKakaoRs>>;
  //카카오 Oauth Uri 조회
  getOauthKakaoUri(): Promise<AxiosResponse<GetKakaoAuthUriRs>>;
}

export default class RemoteOauthRepo implements OauthRepo {
  createOauthKakao(code: string): Promise<AxiosResponse<IssueTokenWithKakaoRs>> {
    return axios.post(`${prefix}/kakao`, { code });
  }

  getOauthKakaoUri(): Promise<AxiosResponse<GetKakaoAuthUriRs>> {
    return axios.get(`${prefix}/kakao/uri`);
  }
}
