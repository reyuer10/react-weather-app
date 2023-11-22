import React from "react";
// import { conditionSvg } from "../svg_wCondition/ConditionSvg";
interface ContainerProps {
  data: {
    name?: string;
    weather?: {
      main?: string;
    }[];
    main?: {
      temp?: number;
    };
  };
}

const Container: React.FC<ContainerProps> = ({ data }) => {
  const weatherCondition = data.weather && data.weather[0] && <h1>{data.weather[0].main}</h1>

  return (
    <div className="location">
      <div>
        <p className="text-2xl text-gray-500 text-center">{data.name}</p>
      </div>
      <div className="temperature flex items-center space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-gray-500"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          height="24"
          width="24"
        >
          <path d="m14,1c0-.553.447-1,1-1h8c.553,0,1,.447,1,1s-.447,1-1,1h-8c-.553,0-1-.447-1-1Zm9,4h-8c-.553,0-1,.447-1,1s.447,1,1,1h8c.553,0,1-.447,1-1s-.447-1-1-1Zm0,5h-6c-.553,0-1,.447-1,1s.447,1,1,1h6c.553,0,1-.447,1-1s-.447-1-1-1Zm-13,7c0,1.654-1.346,3-3,3s-3-1.346-3-3c0-1.302.839-2.402,2-2.816v-5.184c0-.553.447-1,1-1s1,.447,1,1v5.184c1.161.414,2,1.514,2,2.816Zm-2,0c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm4-4.889c1.276,1.305,2,3.062,2,4.889,0,3.859-3.141,7-7,7S0,20.859,0,17c0-1.826.724-3.584,2-4.889v-7.111C2,2.243,4.243,0,7,0s5,2.243,5,5v7.111Zm0,4.889c0-1.412-.607-2.768-1.668-3.719-.211-.189-.332-.46-.332-.744v-7.537c0-1.654-1.346-3-3-3s-3,1.346-3,3v7.537c0,.284-.121.555-.332.744-1.061.951-1.668,2.307-1.668,3.719,0,2.757,2.243,5,5,5s5-2.243,5-5Z" />
        </svg>

        {data.main ? <p className="text-2xl text-gray-500">{(data.main.temp! / 10).toFixed(0)}°C</p> : null}
      </div>
      <div className="description flex">
        {weatherCondition}
      </div>
    </div>
  );
};
export default Container;
