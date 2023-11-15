import { useParams } from 'react-router-dom';
import { IngredientTypes, IngredientTypesEnum } from '@constants/Ingredient/Types';
import { useInfiniteScroll } from '@utils/hook/useInfiniteScroll';
import PageTopButton from '@common/scrollTop';
import { PrevTitle, Title } from '@common/title';

import { useIngredientThumnail } from '@repository/ingredient/useIngredient';
import CardList from '@components/ingredient/common/cardList';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const IngredientDetail = () => {
  const { id } = useParams();

  const getParams = () => {
    if (id === 'ALL') return undefined;
    return [id] as IngredientTypes[];
  };

  const { data, fetchNextPage, hasNextPage, refetch } = useIngredientThumnail(getParams(), 1);
  const observerRef = useInfiniteScroll({ fetchNextPage, hasNextPage });
  return (
    <>
      <div className={cx('header')}>
        <PrevTitle />
        <Title className={cx('title')} contents={IngredientTypesEnum[id as IngredientTypes]} shadow />
      </div>
      <CardList data={data?.pages[0].content} refetch={refetch} />
      <div ref={observerRef} />
      <PageTopButton />
    </>
  );
};

export default IngredientDetail;
