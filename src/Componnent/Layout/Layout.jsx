import React from 'react';
import HeaderHome from '../header/HeaderHome'
import Footer from '../footer/footer';
import '../../Styles/Layout/layout.css'



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