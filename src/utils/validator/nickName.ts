const nickNameValidator = (name?: string): string => {
  if (!name) return '';
  if (name.includes(' ')) return '공백이 포함되어 있습니다.';
  if (/[^a-zA-Z0-9가-힣]/.test(name)) return '한글, 영어, 숫자만 사용 가능합니다.';

  return 'OK';
};

export default nickNameValidator;
