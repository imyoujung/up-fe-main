import Cookies from 'js-cookie';
import { setAxiosHeader } from './RequestClient';

export const getAccessToken = () => {
  return Cookies.get('accessToken');
};

export const setAccessToken = (accessToken?: string) => {
  if (!accessToken) return;
  Cookies.set('accessToken', accessToken);
  setAxiosHeader('Authorization', `Bearer ${accessToken}`);
};

export const removeAccessToken = () => {
  Cookies.remove('accessToken');
  setAxiosHeader('Authorization', '');
};
