import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>© {new Date().getFullYear()} Arian's Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
