import { useQuery } from 'react-query';
import RemoteOauthRepo from './OauthRepo';

const keys = ['oauth'];

const remoteOauthRepo = new RemoteOauthRepo();

const createOauthKakao = async (code: string) => {
  const { data } = await remoteOauthRepo.createOauthKakao(code);
  return data;
};

export const useOauthKakao = (enabled: boolean, code: string) => {
  return useQuery([...keys, code], () => createOauthKakao(code), {
    enabled,
  });
};

const getOauthKakaoUri = async () => {
  const { data } = await remoteOauthRepo.getOauthKakaoUri();
  return data;
};

export const useOauthKakaoUri = () => {
  return useQuery([...keys, 'kakao'], getOauthKakaoUri);
};
