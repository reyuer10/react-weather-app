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
      <div className="Wind flex">Wind: {data.wind ? <h1>{data.wind.speed?.toFixed()}km/h</h1> : null}</div>
    </div>
  );
};

export default Bottom;
