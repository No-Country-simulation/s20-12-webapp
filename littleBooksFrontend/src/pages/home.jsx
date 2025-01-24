import React from 'react';
import StatiContent from '../components/statiContent';
import DinamicContent from '../components/dinamicContent.jsx';
import Header from '../components/header.jsx';


const Home = () =>{
    return (
        <>
            <DinamicContent />
            <StatiContent />
        </>
    );
}
export default Home;