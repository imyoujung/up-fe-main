import { useMutation } from 'react-query';
import IsAvailableNicknameRs from '@interface/rs/member/IsAvailableNicknameRs';
import RemoteMemberRepo from './MemberRepo';

const keys = ['member'];

const remoteMemberRepo = new RemoteMemberRepo();

const updateMemberNickname = async (nickname: string) => {
  const { data } = await remoteMemberRepo.updateMemberNickname(nickname);
  return data;
};

export const useUpdateMemberNickname = (onSuccess: () => void) => {
  return useMutation((nickname: string) => updateMemberNickname(nickname), { onSuccess });
};

const getMemberNicknameValidation = async (nickname: string) => {
  const { data } = await remoteMemberRepo.getMemberNicknameValidation(nickname);
  return data;
};

export const useMemberNicknameValidation = (onSuccess: (res: IsAvailableNicknameRs) => void) => {
  return useMutation((nickname: string) => getMemberNicknameValidation(nickname), { onSuccess });
};
