import React from 'react';
import HeaderHome from './HeaderHome'
import Footer from './footer';

const Layout = (props) => {
    return (
        <div>
            <HeaderHome />
            <div>{props.children}</div>
            <Footer />
        </div>
    );
};

export default Layout;