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
    <div className="flex justify-between space-x-10 m-5">
      <div className="feels flex items-center text-gray-500 space-x-1 text-2xl">
        <svg
        className="fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M11,24c-6.079.117-9.334-7.638-5-11.89V5c.211-6.609,9.791-6.6,10,0v7.11C20.335,16.363,17.077,24.117,11,24ZM11,2A3,3,0,0,0,8,5v7.537a1,1,0,0,1-.332.744A5.018,5.018,0,0,0,11,22a5.018,5.018,0,0,0,3.332-8.719A1,1,0,0,1,14,12.537V5A3,3,0,0,0,11,2Zm0,18a3.007,3.007,0,0,1-1-5.829V12a1,1,0,0,1,2,0v2.171A3.007,3.007,0,0,1,11,20Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,11,16ZM21,6a3,3,0,0,1,0-6A3,3,0,0,1,21,6Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,21,2Z" />
        </svg>

        {data.wind ? <h1>{data.wind.speed}°F</h1> : null}
      </div>
      <div className="humidity flex items-center text-gray-500 space-x-1">
        <svg
          className="fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M10,17a1,1,0,0,1-.831-1.555l4-6a1,1,0,0,1,1.664,1.11l-4,6A1,1,0,0,1,10,17Zm9.779,3.778c6.858-7.336,1.519-14.521-4.565-19.6h0a4.947,4.947,0,0,0-6.426,0C2.706,6.231-2.63,13.491,4.222,20.778a11,11,0,0,0,15.556,0ZM13.919,2.7h0C18.7,6.777,24.43,12.966,18.364,19.364a9.043,9.043,0,0,1-12.728,0c-6.071-6.4-.325-12.6,4.445-16.662a2.958,2.958,0,0,1,3.838,0ZM8,10a1,1,0,0,0,2,0A1,1,0,0,0,8,10Zm6,6a1,1,0,0,0,2,0A1,1,0,0,0,14,16Z" />
        </svg>

        {data.main ? <h1 className="text-2xl">{data.main.humidity}%</h1> : null}
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

        {data.wind ? (
          <h1 className="text-2xl">{data.wind.speed?.toFixed()}km/h</h1>
        ) : null}
      </div>
    </div>
  );
};

export default Bottom;
