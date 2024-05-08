import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="square bg-gray-200 border border-gray-400 text-center font-bold p-5 cursor-pointer hover:bg-gray-300 focus:outline-none"
            onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;