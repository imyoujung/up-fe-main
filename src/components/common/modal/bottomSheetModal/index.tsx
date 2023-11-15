import { ReactNode, useEffect } from 'react';
import Portal from '@common/modal/portal';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface BottomSheetModalProps {
  className?: string;
  visible: boolean;
  contents?: ReactNode;
  isDimmed?: boolean;
  clickBg?: () => void;
}

const BottomSheetModal = ({ className, visible, contents, isDimmed, clickBg }: BottomSheetModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <div className={cx('wrapper', className)}>
      {isDimmed && (
        <Portal selector="#dim">
          {visible ? <div className={cx('dimmedArea')} onClick={() => clickBg?.()} /> : null}
        </Portal>
      )}
      {
        <Portal selector="#modal">
          <div className={cx('contentsArea', { visible })}>{contents}</div>
        </Portal>
      }
    </div>
  );
};

export default BottomSheetModal;
