import { FC } from 'react';
import { Cta } from '@common/cta';
import { Title } from '@common/title';
import img1 from '@images/ingredient/bottomSheetContents/sheet1.png';
import img2 from '@images/ingredient/bottomSheetContents/sheet2.png';
import img3 from '@images/ingredient/bottomSheetContents/sheet3.png';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface BottomSheetContentsProps {
  onClick: () => void;
}

const BottomSheetContents: FC<BottomSheetContentsProps> = ({ onClick }) => {
  return (
    <div className={cx('wrapper')}>
      <Title
        className={cx('title')}
        contents={
          <>
            <span>재료를 추가하고</span>
            <span>내 재료 기반 칵테일을 만나보세요</span>
          </>
        }
      />
      <div className={cx('imgWrapper')}>
        {/* svg로 가져오면 처음 요소로 덮어씌워지는 문제있음. */}
        <img src={img1} width={60} height={60} />
        <img src={img2} width={94} height={94} />
        <img src={img3} width={60} height={60} />
      </div>

      <Cta text="재료 둘러보기" onClick={onClick} />
    </div>
  );
};

export default BottomSheetContents;
