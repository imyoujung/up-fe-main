import Slider from 'react-slick';
import styles from './swipe.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface SwipeProps {
  className?: string;
}

const Swipe = ({ className }: SwipeProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={cx('slick', className)}>
      <Slider {...settings}>
        <SwipeItem />
        <SwipeItem />
        <SwipeItem />
      </Slider>
    </div>
  );
};

const SwipeItem = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('img')} />
      <span className={cx('title')}>내 재료 등록</span>
    </div>
  );
};

export default Swipe;
