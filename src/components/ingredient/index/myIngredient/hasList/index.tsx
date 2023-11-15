import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import { IngredientTypes } from '@constants/Ingredient/Types';
import { useInfiniteScroll } from '@utils/hook/useInfiniteScroll';
import { useIngredientMyThumnail } from '@repository/ingredient/useIngredient';
import CardList from '@components/ingredient/common/cardList';
import Swipe from '@components/ingredient/common/swipe';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface HasListProps {
  selectTab: IngredientTypes;
  setSelectTab: (tab: IngredientTypes) => void;
}

const HasList: FC<HasListProps> = ({ selectTab, setSelectTab }) => {
  const { data, fetchNextPage, hasNextPage, refetch } = useIngredientMyThumnail(undefined, 1);
  const observerRef = useInfiniteScroll({ fetchNextPage, hasNextPage });
  return (
    <div className={cx('wrapper')}>
      <Swipe className={cx('swipe')} selectTab={selectTab} setSelectTab={setSelectTab} />
      <strong className={cx('label')}>
        추가된 위스키 <span className={cx('total')}>{data?.pages[0].content.length}</span>개
      </strong>
      <CardList data={data?.pages[0].content} refetch={refetch} />
      {/* 페이지 끝에 ref를 부여한 요소를 배치합니다. */}
      <div ref={observerRef} />
    </div>
  );
};

export default HasList;
