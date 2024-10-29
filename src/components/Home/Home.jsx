import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
    return (
        <div className="mb-10">
        <AwesomeSlider className='h-[500px]'>
          <div data-src="https://www.proglobalbusinesssolutions.com/wp-content/uploads/2019/03/Creative-Company-Banner.jpg" />
          <div data-src="https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg" />
          <div data-src="https://csladda.com/wp-content/uploads/2019/06/web-design-banner.jpg" />
        </AwesomeSlider>
      </div>
    );
};

export default Home;