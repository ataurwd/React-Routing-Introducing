import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
    return (
        <div className=" h-[500px] mx-auto p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to Our Gallery</h2>
        <AwesomeSlider>
          <div data-src="https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg" />
          <div data-src="https://graphicsfamily.com/wp-content/uploads/2020/11/Professional-Web-Banner-AD-in-Photoshop-scaled.jpg" />
          <div data-src="https://cdn.dribbble.com/userupload/5531801/file/original-c266db75c4a3f4f603a5800f18093c38.jpg?resize=400x0" />
        </AwesomeSlider>
      </div>
    );
};

export default Home;