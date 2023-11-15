import ceoImg from '@assets/images/login/ceo.png';
import { AppleLogoSvg, GoogleLogoSvg, KakaoLogoSvg, NaverLogoSvg } from '@assets/index';
import { Title } from '@common/title';
import { useOauthKakaoUri } from '@repository/oauth/useOauth';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Login = () => {
  const { data: kakaoUri } = useOauthKakaoUri();

  const handleKakaoLogin = () => {
    if (!kakaoUri) return;
    window.location.href = kakaoUri.uri;
  };

  return (
    <div className={cx('wrapper')}>
      <Title
        className={cx('title')}
        contents={
          <>
            <span>우리들의 주류공간</span>
            <span>우주 플레이스</span>
          </>
        }
      />
      <img className={cx('imgArea')} src={ceoImg} />
      <div className={cx('loginTitle')}>간편하게 로그인 하세요</div>
      <div className={cx('socialLogin')}>
        <div className={cx('socialLogo')}>
          <a>
            <GoogleLogoSvg width={'3rem'} height={'3rem'} />
          </a>
          <a>
            <AppleLogoSvg width={'3rem'} height={'3rem'} />
          </a>
          <a onClick={handleKakaoLogin}>
            <KakaoLogoSvg width={'3rem'} height={'3rem'} />
          </a>
          <NaverLogoSvg width={'3rem'} height={'3rem'} />
        </div>
      </div>
    </div>
  );
};

export default Login;
