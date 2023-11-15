import { Children, Fragment, ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

interface TabItemProps {
  title: ReactNode;
  active?: boolean;
  index: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  nonActiveClassName?: string;
}

const TabItem = ({ active, onClick, title, className, index: _index, children: _children }: TabItemProps) => {
  return (
    <a role="button" className={cx(className, { active })} onClick={onClick}>
      {title}
    </a>
  );
};

interface TabProps {
  active?: string | null;
  className?: string;
  children: ReactNode;
  onTabChange: (tab: string) => void;
}

const TabComponent = ({ active, className, children, onTabChange }: TabProps) => {
  const items = Children.map(children, (child) => {
    const element = child as ReactElement;
    return cloneElement(element, {
      ...element.props,
      className: cx(element.props.className, 'tabTitle'),
      active: element.props.index === active,
      onClick: () => {
        onTabChange(element.props.index);
      },
      key: element.props.index,
    });
  });

  const activeItem = Children.toArray(items)
    .filter(isValidElement)
    .filter((element) => {
      if (!isValidElement(element)) {
        false;
      }

      return (element.props as TabItemProps).index === active;
    })[0];

  // 현재 활성화된 탭의 순서를 반환하는 함수
  const getCurrentTabIndex = () => {
    const tabItems = Children.toArray(items).filter(isValidElement) as ReactElement<TabItemProps>[];
    const activeTabIndex = tabItems.findIndex((element) => element.props.index === active);
    return activeTabIndex;
  };

  const tabLength = Children.toArray(items).filter(isValidElement).length; //탭의 개수
  const currentTabIndex = getCurrentTabIndex(); // 현재 활성화된 탭의 순서

  return (
    <div className={cx('wrapper')}>
      <div className={cx(className, 'tabWrapper')}>{items}</div>
      <div
        className={cx('divider', currentTabIndex)}
        style={{ width: `${100 / tabLength}%`, transform: `translateX(${100 * currentTabIndex}%)` }}
      />
      <Fragment key={activeItem?.key}>{(activeItem?.props as TabItemProps)?.children}</Fragment>
    </div>
  );
};

const Tab = Object.assign((props: TabProps) => <TabComponent {...props} />, {
  Item: (props: TabItemProps) => <TabItem {...props} />,
});

export default Tab;
