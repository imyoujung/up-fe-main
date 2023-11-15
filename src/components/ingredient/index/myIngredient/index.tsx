import { FC, useState } from 'react';
import { IngredientTypes, TabType } from '@constants/Ingredient/Types';
import { useIngredientMyThumnail } from '@repository/ingredient/useIngredient';
import HasList from './hasList';
import NotList from './notList';

interface MyIngredientProps {
  setActiveTab: (tab: TabType) => void;
}

const MyIngredient: FC<MyIngredientProps> = ({ setActiveTab }) => {
  const [selectTab, setSelectTab] = useState<IngredientTypes>('ALL');

  const getTypes = () => {
    if (selectTab === 'ALL') return undefined;
    return [selectTab] as IngredientTypes[];
  };

  const { data } = useIngredientMyThumnail(getTypes(), 1, ['ASC']);
  const isNotData = data?.pages[0].content.length === 0;

  return (
    <>
      {isNotData ? (
        <NotList setActiveTab={setActiveTab} />
      ) : (
        <HasList selectTab={selectTab} setSelectTab={setSelectTab} />
      )}
    </>
  );
};

export default MyIngredient;
