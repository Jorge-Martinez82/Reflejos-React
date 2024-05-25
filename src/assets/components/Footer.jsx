import React from 'react';

const Footer = () => {
    const userEmail = localStorage.getItem('email');
    return (
        <div className="footer-container">
            <div className="footer">
                <p>{'Usuario: '+ userEmail}</p>
                <p>DWEC 2024</p>
            </div>
        </div>
    );
};

export default Footer;