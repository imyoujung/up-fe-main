import { BottleSvg, CocktailSvg, HomeSvg, WholeSvg } from '@assets/index';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Navigation = () => {
  return (
    <div className={cx('wrapper')}>
      <a className={cx('menu')} role="button">
        <HomeSvg width={'1.875rem'} height={'1.875rem'} />
        <span>홈</span>
      </a>
      <a className={cx('menu')} role="button">
        <BottleSvg width={'1.875rem'} height={'1.875rem'} />
        <span>재료</span>
      </a>
      <a className={cx('menu')} role="button">
        <CocktailSvg width={'1.875rem'} height={'1.875rem'} />
        <span>칵테일</span>
      </a>
      <a className={cx('menu')} role="button">
        <WholeSvg width={'1.875rem'} height={'1.875rem'} />
        <span>전체</span>
      </a>
    </div>
  );
};

export default Navigation;
