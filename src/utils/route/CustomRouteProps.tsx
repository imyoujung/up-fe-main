import { lazy, ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';
import RoutePaths from '@utils/route/RoutePaths';
import Navigation from '@common/navigation';
import Oauth from '@pages/oauth';
/**컴포넌트 그릴 준비가 되면 보여줌.(이미지 로딩 완료 후 보여주기 위함) */
const LazySplash = lazy(() => import('@pages/splash'));
const LazyLogin = lazy(() => import('@pages/login'));
const LazyGate = lazy(() => import('@pages/gate'));
const LazyJoin = lazy(() => import('@pages/join'));
const LazyIngredient = lazy(() => import('@pages/ingredient'));
const LazyIngredientDetail = lazy(() => import('@pages/ingredient/detail'));

interface RenderPageFrameProps {
  navigation?: boolean;
  component: ReactNode;
}

/**TODO header컴포넌트 추가 */

const renderPageFrame = ({ navigation, component }: RenderPageFrameProps) => {
  if (!navigation) return <>{component}</>;

  return (
    <>
      {component}
      <Navigation />
    </>
  );
};

const CustomRouteProps: RouteProps[] = [
  {
    path: RoutePaths.Splash,
    element: renderPageFrame({ component: <LazySplash /> }),
  },
  {
    path: RoutePaths.Gate,
    element: renderPageFrame({ component: <LazyGate /> }),
  },
  {
    path: RoutePaths.Login,
    element: renderPageFrame({ component: <LazyLogin /> }),
  },
  { path: RoutePaths.OAuthCallback, element: <Oauth /> },
  {
    path: RoutePaths.Join,
    element: renderPageFrame({ component: <LazyJoin /> }),
  },
  {
    path: RoutePaths.Ingredient,
    element: renderPageFrame({ navigation: true, component: <LazyIngredient /> }),
  },
  {
    path: RoutePaths.IngredientDetail,
    element: renderPageFrame({ navigation: true, component: <LazyIngredientDetail /> }),
  },
];

export default CustomRouteProps;
