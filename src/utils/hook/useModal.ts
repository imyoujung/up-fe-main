import { useEffect, useState } from 'react';

const useModal = (initVisible = false, delay?: number) => {
  const initModalVisible = delay ? false : initVisible;

  const [visible, setVisible] = useState(initModalVisible);

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        setVisible(initVisible);
      }, delay);
    }
  }, []);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return { visible, open, close };
};

export default useModal;
