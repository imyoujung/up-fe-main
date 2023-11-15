import styles from './cta.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface CtaProps {
  className?: string;
  text: string;
  disabled?: boolean;
  fill?: boolean; //padding 없이 꽉찬 버튼
  lined?: boolean; //background없고 border로 구성된 버튼
  onClick?: () => void;
}

export const Cta = ({ className, text, disabled, fill, lined, onClick }: CtaProps) => {
  return (
    <div className={cx('wrapper', className, { fill })}>
      <a className={cx('cta', { disabled, lined })} onClick={onClick} role="button">
        {text}
      </a>
    </div>
  );
};
