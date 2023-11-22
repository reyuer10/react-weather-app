import React from "react";

interface BottomProps {
  data: {
    main?: {
      feels_like?: number;
      humidity?: number;
    };
    wind?: {
      speed?: number;
    };
  };
}

const Bottom: React.FC<BottomProps> = ({ data }) => {
  return (
    <div>
      <div className="feels flex">
        Feels: {data.wind ? <h1>{data.wind.speed}°F</h1> : null}
      </div>
      <div className="humidity flex">
        Humidity: {data.main ? <h1>{data.main.humidity}%</h1> : null}
      </div>
      <div className="Wind flex items-center text-gray-500 space-x-1">
        <svg
        className="fill-current text-gray-500 "
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M0,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H1A1,1,0,0,1,0,12Zm20.886-.893A4.99,4.99,0,1,0,12,8a1,1,0,0,0,2,0,3,3,0,1,1,3,3H11a1,1,0,0,0,0,2h9a2,2,0,0,1,2,2c-.009,2.337-3.281,2.648-4.057.667a1,1,0,0,0-1.886.666C17.615,20.415,23.952,19.579,24,15A4,4,0,0,0,20.886,11.107ZM11,16H1a1,1,0,0,0,0,2H11a2,2,0,0,1,2,2c-.009,2.337-3.281,2.648-4.057.667a1,1,0,1,0-1.886.666C8.615,25.415,14.952,24.579,15,20A4,4,0,0,0,11,16ZM1,8H7a4,4,0,0,0,4-4C10.952-.581,4.613-1.414,3.057,2.667a1,1,0,0,0,1.886.666C5.72,1.351,8.991,1.663,9,4A2,2,0,0,1,7,6H1A1,1,0,0,0,1,8Z" />
        </svg>

        {data.wind ? <h1 className="text-2xl">{data.wind.speed?.toFixed()}km/h</h1> : null}
      </div>
    </div>
  );
};

export default Bottom;
