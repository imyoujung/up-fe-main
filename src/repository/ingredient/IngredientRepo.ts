import { AxiosResponse } from 'axios';
import { axios } from '@utils/client/RequestClient';
import IngredientThumnailMyRq from '@interface/rq/ingredient/IngredientThumnailMyRq';
import IngredientThumnailMyRs from '@interface/rs/ingredient/IngredientThumnailMyRs';
import IngredientThumnailRs from '@interface/rs/ingredient/IngredientThumnailRs';

const prefix = '/ingredient/v1';
interface IngredientRepo {
  //나의 재료 썸네일 목록 조회
  getIngredientMyThumnail(rq: IngredientThumnailMyRq): Promise<AxiosResponse<IngredientThumnailMyRs>>;
  //모든 재료 썸네일 목록 조회
  getIngredientThumnail(rq: IngredientThumnailMyRq): Promise<AxiosResponse<IngredientThumnailRs>>;
  //재료 추가
  createIngredientMember: (ingredientSn: number) => Promise<AxiosResponse>;
  //재료 제거
  deleteIngredientMember: (ingredientSn: number) => Promise<AxiosResponse>;
}

export default class RemoteIngredientRepo implements IngredientRepo {
  getIngredientMyThumnail(rq: IngredientThumnailMyRq): Promise<AxiosResponse<IngredientThumnailMyRs>> {
    return axios.get(`${prefix}/thumbnail`, { params: rq });
  }

  getIngredientThumnail(rq: IngredientThumnailMyRq): Promise<AxiosResponse<IngredientThumnailMyRs>> {
    return axios.get(`${prefix}/thumbnail`, { params: rq });
  }
  createIngredientMember(ingredientSn: number): Promise<AxiosResponse> {
    return axios.post(`${prefix}/member`, { ingredientSn });
  }
  deleteIngredientMember(ingredientSn: number): Promise<AxiosResponse> {
    return axios.delete(`${prefix}/member`, { data: { ingredientSn } });
  }
}
