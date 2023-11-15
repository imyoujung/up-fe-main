import { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAccessToken, setAccessToken } from '@utils/client/useAccessToken';
import CustomRouoteProps from '@utils/route/CustomRouteProps';
import '@styles/reset.scss';

function App() {
  setAccessToken(getAccessToken());

  useEffect(() => {
    const adjustViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // 함수를 처음 실행하고 창 크기가 변경될 때마다 실행합니다
    adjustViewportHeight();
    window.addEventListener('resize', adjustViewportHeight);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다
    return () => {
      window.removeEventListener('resize', adjustViewportHeight);
    };
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {CustomRouoteProps.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
