import React from 'react';
import './FooterEnd.css';

export const FooterEnd = () => {
    return (
        <footer className='FooterEnd'>
          <div className="footerEnd-item">
            <p className='para'>Copyright @2020 Calibrum. All Rights Reserved</p>
          </div>
    
          <div className="footerEnd-item">
            <img src="https://ourgovdotin.files.wordpress.com/2020/08/nha-1.png" alt="Company Logo" />
          </div>
          <div className="footerEnd-item">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </footer>
      );
};
