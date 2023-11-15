import { FC } from 'react';
import { SearchSvg } from '@assets/index';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface SearchTitleProps {
  title: string;
}

const SearchTitle: FC<SearchTitleProps> = ({ title }) => {
  return (
    <div className={cx('searchTitle')}>
      <div>{title}</div>
      <a role="button">
        <SearchSvg width={'1.5rem'} height={'1.5rem'} />
      </a>
    </div>
  );
};

export default SearchTitle;
