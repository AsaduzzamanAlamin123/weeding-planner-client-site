import React from 'react';

const MyHoverButton = ({children}) => {
    return (
        <button type="button" class="btn  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
        {children}
      </button>
    );
};

export default MyHoverButton;