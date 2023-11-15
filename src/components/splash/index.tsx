import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Splash = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className={cx('wrapper')} onClick={handleClick}>
      <span>우리들의 주류공간</span>
      <span>우주 플레이스</span>
    </div>
  );
};

export default Splash;
