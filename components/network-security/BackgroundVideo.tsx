'use client'
import React from 'react';

const BackgroundVideo = () => {
  return (
    <video 
      autoPlay 
      muted 
      loop 
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        left:'0',
        top:'0',
        zIndex: '1'
      }}
      src='/backvid.webm'
    >
      <source src='/backvid.webm' type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
