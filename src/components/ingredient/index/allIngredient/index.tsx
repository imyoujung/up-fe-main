import { useNavigate } from 'react-router-dom';
import { IngredientImgTypes, IngredientTypes } from '@constants/Ingredient/Types';
import RoutePaths from '@utils/route/RoutePaths';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const AllIngredient = () => {
  const navigate = useNavigate();
  const onClick = (type: IngredientTypes) => navigate(`${RoutePaths.Ingredient}/${type}`);

  const itemEls = IngredientImgTypes.map((item, idx) => {
    return (
      <a key={idx} className={cx('itemWrapper')} role="button" onClick={() => onClick(item.sn)}>
        <img src={item.src} width={60} height={60} />
        <span>{item.name}</span>
      </a>
    );
  });

  return <div className={cx('wrapper')}>{itemEls}</div>;
};

export default AllIngredient;
