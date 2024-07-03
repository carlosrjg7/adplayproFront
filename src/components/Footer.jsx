import React from "react";

const Footer = () => {
  return (
    <div className='flex justify-center bg-gray-500 p-5'>
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
