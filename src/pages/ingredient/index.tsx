import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TabType, TabTypeEnum } from '@constants/Ingredient/Types';
import Tab from '@common/tab';
import { SearchTitle } from '@common/title';
import AllIngredient from '@components/ingredient/index/allIngredient';
import MyIngredient from '@components/ingredient/index/myIngredient';

const IngredientPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<TabType>(TabTypeEnum.MYSELF);

  const onTabChange = (tabIndex: string) => {
    setActiveTab(tabIndex as TabType);
    navigate(
      {
        search: `?type=${tabIndex}`,
      },
      { replace: true },
    );
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type') || TabTypeEnum.MYSELF;
    setActiveTab(type as TabType);
  }, [location]);

  return (
    <>
      <SearchTitle title="재료" />
      <Tab active={activeTab} onTabChange={onTabChange}>
        <Tab.Item index="myself" title="나의 재료">
          <MyIngredient setActiveTab={setActiveTab} />
        </Tab.Item>
        <Tab.Item index="all" title="모든 재료">
          <AllIngredient />
        </Tab.Item>
      </Tab>
    </>
  );
};

export default IngredientPage;
