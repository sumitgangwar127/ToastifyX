import React from 'react';
import './Toast.css';
import {
  AiOutlineInfoCircle,
  AiOutlineCheck,
  AiOutlineCloseCircle,
  AiOutlineWarning,
  AiOutlineClose
} from 'react-icons/ai';

const icons = {
  success: <AiOutlineCheck />,
  info: <AiOutlineInfoCircle />,
  error: <AiOutlineCloseCircle />,
  warning: <AiOutlineWarning />
};

const typeColors = {
  success: '#155724',
  error: '#721c24',
  info: '#0c5460',
  warning: '#856404'
};

const Toast = ({ type = 'info', message, onClose, animation = 'pop', duration = 3000 }) => {
  return (
    <div className={`notification ${type} ${animation}`}>
      {icons[type]}
      {message}
      <AiOutlineClose
        color={typeColors[type]}
        onClick={onClose}
        className='closeBtn'
      />
      <div className="progress-bar-wrapper">
        <div
          className="progress-bar"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};

export default Toast;
