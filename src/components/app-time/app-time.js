import React from 'react';

import './app-time.css'

const AppTime = () => {
    return <span>{ (new Date()).toLocaleTimeString() }</span>;
};

export default AppTime;