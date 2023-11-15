import Colors from '@constants/Colors';
import { ReactComponent as All } from '@images/common/all.svg';
import { ReactComponent as AppleLogo } from '@images/common/appleLogo.svg';
import { ReactComponent as ArrowTop } from '@images/common/arrowTop.svg';
import { ReactComponent as Bottle } from '@images/common/bottle.svg';
import { ReactComponent as Cancle } from '@images/common/cancle.svg';
import { ReactComponent as Check } from '@images/common/check.svg';
import { ReactComponent as CheckFill } from '@images/common/checkFill.svg';
import { ReactComponent as Cocktail } from '@images/common/cocktail.svg';
import { ReactComponent as Etc } from '@images/common/etc.svg';
import { ReactComponent as GoogleLogo } from '@images/common/googleLogo.svg';
import { ReactComponent as Home } from '@images/common/home.svg';
import { ReactComponent as KakaoLogo } from '@images/common/kakaoLogo.svg';
import { ReactComponent as Minus } from '@images/common/minus.svg';
import { ReactComponent as NaverLogo } from '@images/common/naverLogo.svg';
import { ReactComponent as Prev } from '@images/common/prev.svg';
import { ReactComponent as Search } from '@images/common/search.svg';
import { ReactComponent as Whole } from '@images/common/whole.svg';

import styles from './assets.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

export const GoogleLogoSvg = (props: any) => {
  return <GoogleLogo {...props} />;
};

export const AppleLogoSvg = (props: any) => {
  return <AppleLogo {...props} />;
};

export const KakaoLogoSvg = (props: any) => {
  return <KakaoLogo {...props} />;
};

export const NaverLogoSvg = (props: any) => {
  return <NaverLogo {...props} />;
};

export const CheckSvg = (props: any) => {
  return <Check className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const CheckFillSvg = (props: any) => {
  return <CheckFill className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const CancleSvg = (props: any) => {
  return <Cancle className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const SearchSvg = (props: any) => {
  return <Search className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const BottleSvg = (props: any) => {
  return <Bottle className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const HomeSvg = (props: any) => {
  return <Home className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const CocktailSvg = (props: any) => {
  return <Cocktail className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const WholeSvg = (props: any) => {
  return <Whole className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const MinusSvg = (props: any) => {
  return <Minus className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const EtcSvg = (props: any) => {
  return <Etc className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const AllSvg = (props: any) => {
  return <All className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const PrevSvg = (props: any) => {
  return <Prev className={cx('asset')} fill={Colors.Grey_Scale_Black} {...props} />;
};

export const ArrowTopSvg = (props: any) => {
  return <ArrowTop {...props} />;
};
