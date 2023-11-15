import { useNavigate } from 'react-router-dom';
import { PrevSvg } from '@assets/index';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const PrevTitle = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(-1);
  };

  return (
    <a className={cx('wrapper')} role="button" onClick={onClick}>
      <PrevSvg width={28} height={28} />
    </a>
  );
};

export default PrevTitle;
