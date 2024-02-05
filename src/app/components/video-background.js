import React from 'react';

const VideoBackground = () => {
    return (
        <div className="relative h-screen bg-rich_black-500">
            <video
                autoPlay
                muted
                loop
                className="object-cover object-center w-full h-full opacity-40 "
            >
                <source src="/video/AdobeStock_637896078_Video_HD_Preview.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
