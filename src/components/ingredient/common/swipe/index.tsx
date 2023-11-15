import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AllSvg, EtcSvg } from '@assets/index';
import { IngredientSwipeImgTypes, IngredientTypes, IngredientTypesEnum } from '@constants/Ingredient/Types';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface SwipeProps {
  className?: string;
  selectTab: IngredientTypes;
  setSelectTab: (tab: IngredientTypes) => void;
}

const Swipe: FC<SwipeProps> = ({ className, selectTab, setSelectTab }) => {
  const settings = {
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: true,
  };

  const isSelected = (sn: IngredientTypes) => sn === selectTab;
  const onClick = (sn: IngredientTypes) => setSelectTab(sn);

  return (
    <div className={cx('slick', className)}>
      <Slider {...settings}>
        {IngredientSwipeImgTypes.map((item, index) => (
          <SwipeItem
            key={index}
            src={item.src}
            name={item.name}
            isSelected={isSelected(item.sn)}
            onClick={() => onClick(item.sn)}
          />
        ))}
      </Slider>
    </div>
  );
};

// SwipeItem 컴포넌트
interface SwipeItemProps {
  src: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

const SwipeItem: FC<SwipeItemProps> = ({ src, name, isSelected, onClick }) => {
  const isSvg = [IngredientTypesEnum.ALL, IngredientTypesEnum.ETC].includes(name as IngredientTypesEnum);
  return (
    <div className={cx('item')}>
      <a role="button" className={cx('imgWrapper', { isSelected })} onClick={onClick}>
        {!isSvg && <img className={cx('img')} src={src} alt={name} width={52} height={52} />}
        {name === IngredientTypesEnum.ALL && <AllSvg width={24} height={24} />}
        {name === IngredientTypesEnum.ETC && <EtcSvg width={24} height={24} />}
      </a>
      <span className={cx('title')}>{name}</span>
    </div>
  );
};

export default Swipe;
