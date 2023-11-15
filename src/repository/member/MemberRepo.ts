import { AxiosResponse } from 'axios';
import { axios } from '@utils/client/RequestClient';
import IsAvailableNicknameRs from '@interface/rs/member/IsAvailableNicknameRs';

const prefix = '/member/v1';
interface MemberRepo {
  // 멤버 닉네임 설정
  updateMemberNickname(nickname: string): Promise<AxiosResponse<boolean>>;
  // 멤버 닉네임 유효성 검사
  getMemberNicknameValidation(nickname: string): Promise<AxiosResponse<IsAvailableNicknameRs>>;
}

export default class RemoteMemberRepo implements MemberRepo {
  updateMemberNickname(nickname: string): Promise<AxiosResponse<boolean>> {
    return axios.put(`${prefix}/nickname`, { nickname });
  }

  getMemberNicknameValidation(nickname: string): Promise<AxiosResponse<IsAvailableNicknameRs>> {
    return axios.get(`${prefix}/nickname/validation`, { params: { nickname } });
  }
}
