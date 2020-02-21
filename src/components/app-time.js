import React from 'react';

const AppTime = () => {
    return <span>{ (new Date()).toLocaleTimeString() }</span>;
};

export default AppTime;