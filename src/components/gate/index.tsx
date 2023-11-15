import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import RoutePaths from '@utils/route/RoutePaths';
import { Cta } from '@common/cta';
import { Title } from '@common/title';
import Swipe from '@components/gate/swipe';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Gate = () => {
  const navigate = useNavigate();
  const onClick = () => navigate(RoutePaths.Ingredient);

  return (
    <div className={cx('wrapper')}>
      <div>
        <Title
          className={cx('title')}
          contents={
            <>
              <span>반가워요,</span>
              <span>무한한 우주를 탐험해봐요</span>
            </>
          }
        />
        <Swipe className={cx('swipe')} />
      </div>
      <Cta text="우주 플레이스 시작하기" onClick={onClick} />
    </div>
  );
};

export default Gate;
