import { useRef, useState } from 'react';
import styles from './inputField.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface InputFieldProps {
  className?: string;
  label: string;
  placeholder: string;
  isError?: boolean;
  onChange: (value: string) => void;
}

const InputField = ({ className, label, placeholder, isError, onChange }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasValue, setHasValue] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setHasValue(e.target.value !== '');
  };

  return (
    <div className={cx('wrapper', className)}>
      <input
        ref={inputRef}
        className={cx('input', { isError, hasValue })}
        type="text"
        placeholder={undefined}
        onChange={handleInputChange}
      />
      <span className={cx('placeholder')}>{placeholder}</span>
      <span className={cx('label', { isError })}>{label}</span>
    </div>
  );
};

export default InputField;
