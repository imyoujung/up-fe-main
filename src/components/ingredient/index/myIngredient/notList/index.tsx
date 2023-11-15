import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottleSvg, SearchSvg } from '@assets/index';
import Colors from '@constants/Colors';
import { TabType, TabTypeEnum } from '@constants/Ingredient/Types';
import useModal from '@utils/hook/useModal';
import BottomSheetModal from '@common/modal/bottomSheetModal';
import styles from './styles.module.scss';
import BottomSheetContents from '../../bottomSheetContents';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface NotListProps {
  setActiveTab: (tab: TabType) => void;
}
const NotList: FC<NotListProps> = ({ setActiveTab }) => {
  const navigate = useNavigate();
  //bottomSheet visible
  const { visible, close } = useModal(true, 300);
  //바텀 시트 버튼 클릭
  const bottomSheetBtnClick = () => {
    setActiveTab('all');
    navigate(
      {
        search: `?type=${TabTypeEnum.ALL}`,
      },
      { replace: true },
    );
    close();
  };

  return (
    <>
      <div className={cx('wrapper')}>
        <BottleSvg width={72} height={72} fill={Colors.Grey_Scale_300} />
        <div className={cx('textArea')}>
          <span>아직 추가한 재료가 없어요</span>
          <span>가지고 있는 재료를 검색해보세요</span>
        </div>
        <a className={cx('btn')} role="button">
          <a role="button" onClick={() => setActiveTab('all')}>
            재료 찾기
          </a>
          <SearchSvg width={20} height={20} fill={Colors.Grey_Scale_White} />
        </a>
      </div>
      <BottomSheetModal visible={visible} contents={<BottomSheetContents onClick={bottomSheetBtnClick} />} isDimmed />
    </>
  );
};
export default NotList;
