/*cra에서는 webpack config파일을 볼 수 없기에 webpack을 eject로 빼지 않고 craco를 사용하여 설정 덮어씀.*/
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // tsconfig.paths 설정하기 위해 craco사용
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
};
