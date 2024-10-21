import React from 'react';
import Header from './header';
import Nav from './nav';
import Footer from './footer';
import Main from './main';

interface CommonProps {
    children: React.ReactNode;
}

const CommonWrapper: React.FC<CommonProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div id="container" >
                <Nav />
                <Main>
                    {children}
                </Main>
            </div>
            <Footer />
        </>
    );
};

export default CommonWrapper;