import { FC, useEffect, useState } from 'react';
import { ArrowTopSvg } from '@assets/index';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const PageTopButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onScroll = () => {
    const offset = window.scrollY;
    if (offset === 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    onScroll();
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <a id={'topBtn'} className={cx('topBtn', { hidden: !isVisible })} role="button" onClick={handleScrollTop}>
      <ArrowTopSvg width={24} height={24} />
    </a>
  );
};

export default PageTopButton;
