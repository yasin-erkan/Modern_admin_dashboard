import React from 'react';
import {FaSpinner} from 'react-icons/fa';

type Props = {
  className?: string;
};

const Loading = ({className = ''}: Props) => {
  return (
    <div className={`h-full grid place-items-center ${className}`}>
      <FaSpinner className="animate-spin text-4xl" />
    </div>
  );
};

export default Loading;
