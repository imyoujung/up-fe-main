import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { setAccessToken } from '@utils/client/useAccessToken';
import RoutePaths from '@utils/route/RoutePaths';
import { useOauthKakao } from '@repository/oauth/useOauth';

const Oauth = () => {
  const navigate = useNavigate();
  const { provider } = useParams();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') || '';
  const { data: createOauthKakao } = useOauthKakao(provider === 'kakao', code);

  useEffect(() => {
    if (!createOauthKakao) return;

    setAccessToken(createOauthKakao?.accessToken || '');
    if (!createOauthKakao.isSetNickname) navigate(RoutePaths.Join);
    else navigate(RoutePaths.Gate);
  }, [createOauthKakao]);

  return <></>;
};

export default Oauth;
