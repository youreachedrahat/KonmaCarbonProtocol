import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import "../public/Illustration.json"
const Illustration = () => {
  useEffect(() => {
    const container = document.getElementById('lottie-container');

    lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: "/Illustration.json"
    });

    // Clean up on component unmount
    return () => {
      lottie.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div  className="absolute top-10 left-0 w-full h-full pointer-events-none -z-10">
      <div id="lottie-container" className='w-[80%] mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default Illustration;
