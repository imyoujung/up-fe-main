import { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface TitleProps {
  className?: string;
  contents: ReactNode;
  shadow?: boolean;
}

const Title = ({ className, contents, shadow }: TitleProps) => {
  const [isShadow, setIsShadow] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsShadow(true);
    } else {
      setIsShadow(false);
    }
  };

  useEffect(() => {
    if (!shadow) return;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={cx('wrapper', className, { isShadow })}>{contents}</div>;
};

export default Title;
