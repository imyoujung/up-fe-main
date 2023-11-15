import { useEffect, useRef } from 'react';

interface UseInfiniteScrollProps {
  fetchNextPage: () => void;
  hasNextPage?: boolean;
}

export function useInfiniteScroll({ fetchNextPage, hasNextPage }: UseInfiniteScrollProps) {
  const observerRef = useRef(null);

  useEffect(() => {
    // observer 인스턴스를 생성합니다.
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0]는 관찰하고 있는 요소에 대한 정보를 담고 있습니다.
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage(); // 페이지 끝에 도달하면 다음 페이지를 불러옵니다.
        }
      },
      {
        root: null, // 기본값으로 뷰포트를 root로 사용합니다.
        rootMargin: '0px',
        threshold: 0.1, // 10%의 요소가 보이면 호출됩니다.
      },
    );

    // 현재 ref가 있고 observer 인스턴스가 생성되면 해당 요소를 관찰합니다.
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    // 컴포넌트가 언마운트될 때 observer를 정리합니다.
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]); // fetchNextPage와 hasNextPage가 변경되면 effect를 다시 실행합니다.

  return observerRef;
}
