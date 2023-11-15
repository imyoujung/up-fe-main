import { FC } from 'react';
import { IngredientImgTypes } from '@constants/Ingredient/Types';
import Toast, { ToastType } from '@common/toast';
import { useCreateIngredientMember, useDeleteIngredientMember } from '@repository/ingredient/useIngredient';
import { IngredientThumnailDto } from '@interface/rs/ingredient/IngredientThumnailMyRs';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface CardItemProps {
  data?: IngredientThumnailDto;
  refetch?: () => void;
}

const CardItem: FC<CardItemProps> = ({ data, refetch }) => {
  const { mutateAsync: addIngredient } = useCreateIngredientMember(refetch);
  const { mutateAsync: removeIngredient } = useDeleteIngredientMember(refetch);

  const onClick = () => {
    if (!data) return;

    let text, type;
    if (data?.addedIngredientYn) {
      removeIngredient(data.ingredientSn);
      text = '선택한 재료가 제거되었습니다';
      type = 'ERROR' as ToastType;
    } else {
      addIngredient(data.ingredientSn);
      text = '선택한 재료가 추가되었습니다';
      type = 'SUCCESS' as ToastType;
    }

    Toast({ text, type });
  };

  return (
    <div className={cx('itemWrapper')}>
      <img className={cx('img')} src={IngredientImgTypes[0].src} alt={''} width={60} height={60} />
      <div className={cx('info')}>
        <span className={cx('title')}>{data?.name}</span>
        <span className={cx('description')}>{data?.description}</span>
        <span className={cx('abv')}>{`ABV : ${data?.abv}`}</span>
      </div>
      <a className={cx('btn', { isAdded: data?.addedIngredientYn })} role="button" onClick={onClick}>
        {data?.addedIngredientYn ? '제거' : '추가'}
      </a>
    </div>
  );
};

interface CardListProps {
  className?: string;
  data?: IngredientThumnailDto[];
  refetch?: () => void;
}

const CardList: FC<CardListProps> = ({ className, data, refetch }) => {
  if (!data) return null;

  const cardItemEl = data.map((item) => <CardItem key={item.ingredientSn} data={item} refetch={refetch} />);

  return <div className={cx('wrapper', className)}>{cardItemEl}</div>;
};

export default CardList;
