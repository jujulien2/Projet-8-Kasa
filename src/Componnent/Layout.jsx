import React from 'react';
import HeaderHome from './HeaderHome'

const Layout = (props) => {
    return (
        <div>
            <HeaderHome />
            <div>{props.children}</div>

        </div>
    );
};

export default Layout;