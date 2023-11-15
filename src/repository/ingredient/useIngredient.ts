import { useInfiniteQuery, useMutation } from 'react-query';
import { IngredientTypes } from '@constants/Ingredient/Types';
import IngredientThumnailRq from '@interface/rq/ingredient/IngredientThumnailMyRq';
import PagingRq, { SortType } from '@interface/rq/PagingRq';
import RemoteIngredientRepo from './IngredientRepo';

const keys = ['ingredient'];

const remoteMemberRepo = new RemoteIngredientRepo();

const defaultPageInfo: PagingRq = {
  pageNumber: 1,
  pageSize: 10,
  sort: [],
};

const getIngredientMyThumnail = async (rq: IngredientThumnailRq) => {
  const { data } = await remoteMemberRepo.getIngredientMyThumnail(rq);
  return {
    ...data,
  };
};

export const useIngredientMyThumnail = (types?: IngredientTypes[], page = 1, sort?: SortType[]) => {
  return useInfiniteQuery(
    [...keys, 'myThumnail', types, page, sort],
    ({ pageParam }) =>
      getIngredientMyThumnail(
        new IngredientThumnailRq(
          { pageSize: defaultPageInfo.pageSize, pageNumber: pageParam ?? page, sort: sort ?? defaultPageInfo.sort },
          types,
        ),
      ),
    {
      getNextPageParam: ({ pageInfo }) =>
        pageInfo.pageNumber < pageInfo.totalPage ? pageInfo.pageNumber + 1 : undefined,
    },
  );
};

const getIngredientThumnail = async (rq: IngredientThumnailRq) => {
  const { data } = await remoteMemberRepo.getIngredientThumnail(rq);
  return {
    ...data,
  };
};

export const useIngredientThumnail = (types?: IngredientTypes[], page = 1, sort?: SortType[]) => {
  return useInfiniteQuery(
    [...keys, 'thumnail', types, page, sort],
    ({ pageParam }) =>
      getIngredientThumnail(
        new IngredientThumnailRq(
          { pageSize: defaultPageInfo.pageSize, pageNumber: pageParam ?? page, sort: sort ?? defaultPageInfo.sort },
          types,
        ),
      ),
    {
      getNextPageParam: ({ pageInfo } /*이 함수를 통해서 hasNextPage값 설정됨 */) =>
        pageInfo.pageNumber < pageInfo.totalPage ? pageInfo.pageNumber + 1 : undefined,
    },
  );
};

const createIngredientMember = async (ingredientSn: number) => {
  await remoteMemberRepo.createIngredientMember(ingredientSn);
};

export const useCreateIngredientMember = (onSuccess?: () => void) => {
  return useMutation(createIngredientMember, {
    onSuccess: () => {
      onSuccess?.();
    },
  });
};

const deleteIngredientMember = async (ingredientSn: number) => {
  await remoteMemberRepo.deleteIngredientMember(ingredientSn);
};

export const useDeleteIngredientMember = (onSuccess?: () => void) => {
  return useMutation(deleteIngredientMember, {
    onSuccess: () => {
      onSuccess?.();
    },
  });
};
