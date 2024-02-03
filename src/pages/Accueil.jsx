import React, { useEffect } from 'react';
import Header from '../template/header';
import Footer from '../template/Footer';

function Accueil() {


    return (
        <>
            <main className="main container">
                <div className="home grid">
                    <Header />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Accueil;
