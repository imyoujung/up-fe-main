import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CancleSvg, CheckFillSvg, CheckSvg } from '@assets/index';
import Colors from '@constants/Colors';
import useDebouncedCallback from '@utils/hook/useDebounceCallback';
import RoutePaths from '@utils/route/RoutePaths';
import nickNameValidator from '@utils/validator/nickName';
import { Cta } from '@common/cta';
import InputField from '@common/inputField';
import { Title } from '@common/title';
import { useMemberNicknameValidation, useUpdateMemberNickname } from '@repository/member/useMember';
import IsAvailableNicknameRs from '@interface/rs/member/IsAvailableNicknameRs';
import styles from './styles.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

const Join = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [validationRes, setValidationRes] = useState<null | IsAvailableNicknameRs>(null);
  const { mutateAsync: validateNickname } = useMemberNicknameValidation((res) => setValidationRes(res));
  const { mutateAsync: updateNickname } = useUpdateMemberNickname(() => navigate(RoutePaths.Gate));

  const handleBtnCllick = () => {
    updateNickname(nickname);
  };

  const debouncedValidation = useDebouncedCallback(() => {
    validateNickname(nickname);
  }, 500);

  useEffect(() => {
    const validationMessage = nickNameValidator(nickname);
    if (validationMessage === 'OK') {
      setValidationRes(null);
      debouncedValidation();
    } else if (!validationMessage) {
      setValidationRes(null);
    } else {
      setValidationRes({ isAvailable: false, message: validationMessage });
    }
  }, [nickname]);

  return (
    <div className={cx('wrapper')}>
      <Title
        contents={
          <>
            <span>환영합니다!</span>
            <span>우주가 어떻게 불러드릴까요?</span>
          </>
        }
      />
      <InputField
        className={cx('inputField')}
        isError={!!nickname && validationRes?.isAvailable === false}
        label={'닉네임'}
        placeholder={'닉네임을 지정해주세요'}
        onChange={setNickname}
      />
      <div className={cx('noticeArea')}>
        <div className={cx('notice', { default: !nickname })}>
          <CheckSvg width={'1.125rem'} height={'1.125rem'} fill={Colors.Grey_Scale_500} />
          <span>10자 이하로 지정해주세요</span>
        </div>
        <div className={cx('notice', { default: !nickname })}>
          <CheckSvg width={'1.125rem'} height={'1.125rem'} fill={Colors.Grey_Scale_500} />
          <span>한글, 영어, 숫자만 가능해요</span>
        </div>
        <div className={cx('notice', { success: validationRes?.isAvailable && nickname })}>
          <CheckFillSvg width={'1.125rem'} height={'1.125rem'} fill={Colors.Solid_Primary_500} />
          <span>사용가능한 닉네임이에요</span>
        </div>
        <div className={cx('notice', { error: validationRes?.isAvailable === false && nickname })}>
          <CancleSvg width={'1.125rem'} height={'1.125rem'} fill={Colors.Solid_Red_500} />
          <span>{validationRes?.message}</span>
        </div>
      </div>
      <Cta className={cx('cta')} text={'완료'} fill disabled={!validationRes?.isAvailable} onClick={handleBtnCllick} />
    </div>
  );
};

export default Join;
