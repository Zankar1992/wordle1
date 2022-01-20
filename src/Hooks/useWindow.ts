import { useEffect } from 'react';

//window.addEventListener & window.removeEventListener method che 

const useWindow = (event: keyof WindowEventMap, callback: any) => {
  useEffect(() => {
    window.addEventListener(event, callback);
  })
  return () => {
    window.removeEventListener(event,callback);
  };
};

export default useWindow;
