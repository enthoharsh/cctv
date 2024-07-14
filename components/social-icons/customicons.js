import React from 'react';

export const ArrowDownSvg = ({ width = "64", height = "64", fill = "currentColor" }) => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      style={{ enableBackground: 'new 0 0 64 64' }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <polygon
            points="31,0 31,60.586 23.707,53.293 22.293,54.854 31.293,64 32.707,64 41.707,54.854 40.293,53.366 33,60.586 33,0"
            fill={fill}
          />
        </g>
      </g>
    </svg>
  );
};

// export default ArrowDownSvg;