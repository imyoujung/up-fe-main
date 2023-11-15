import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { CheckFillSvg, MinusSvg } from '@assets/index';
import Colors from '@constants/Colors';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export type ToastType = 'SUCCESS' | 'ERROR';

interface ToastProps {
  text: ReactNode;
  type: ToastType;
}

// 토스트 DOM 요소를 정의합니다.
const ToastDom = ({ text, type }: ToastProps) => (
  <div className={cx('toastArea')}>
    {type === 'SUCCESS' && <CheckFillSvg width={20} height={20} fill={Colors.Solid_Deep_Green_500} />}
    {type === 'ERROR' && <MinusSvg width={20} height={20} fill={Colors.Solid_Red_500} />}
    <span className={cx('text')}>{text}</span>
  </div>
);

let timeoutId: NodeJS.Timeout | null = null;

// Toast 함수는 토스트 메시지를 화면에 띄우는 역할을 합니다.
const Toast = (props: ToastProps) => {
  // DOM에서 토스트 컨테이너를 찾습니다.
  const toastContainer = document.getElementById('toast');
  // 토스트 컨테이너가 있으면, createRoot로 루트를 한 번만 생성합니다.
  const toastRoot = toastContainer ? createRoot(toastContainer) : null;
  // 이전 타임아웃이 있으면 클리어합니다.
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // 새 토스트를 렌더링합니다.
  toastRoot?.render(<ToastDom {...props} />);

  // 지정된 시간(예: 3000ms) 후에 토스트를 해제합니다.
  timeoutId = setTimeout(() => {
    toastRoot?.unmount(); // 토스트를 해제합니다.
    timeoutId = null; // 타임아웃 ID를 클리어합니다.
  }, 3000);
};

export default Toast;
