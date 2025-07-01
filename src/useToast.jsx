import React, { useRef, useState } from 'react';
import Toast from './Toast';

let idCounter = 0;

const useToast = (position = 'top-left') => {
  const [toasts, setToasts] = useState([]);
  const timeoutMapRef = useRef({});

  const showToast = (toastProps) => {
    const id = idCounter++;
    const newToast = { ...toastProps, id };

    setToasts((prev) => [...prev, newToast]);

    timeoutMapRef.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      delete timeoutMapRef.current[id];
    }, toastProps.duration || 3000);
  };

  const closeToast = (id) => {
    if (timeoutMapRef.current[id]) {
      clearTimeout(timeoutMapRef.current[id]);
      delete timeoutMapRef.current[id];
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const ToastContainer = (
    <div className={`notification-wrapper ${position}`}>
      {toasts.map((t) => (
        <Toast
          key={t.id}
          {...t}
          onClose={() => closeToast(t.id)}
        />
      ))}
    </div>
  );

  return [ToastContainer, showToast];
};

export default useToast;
