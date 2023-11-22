import React from "react";
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
  return (
    <div className="location">
      <div>
        <p>{data.name}</p>
      </div>
      <div className="temperature flex">
        Temperature: {data.main ? <h1>{(data.main.temp! / 10).toFixed(0)}°C</h1> : null}
      </div>
      <div className="description flex">
        Weather: {data.weather && data.weather[0] && <h1>{data.weather[0].main}</h1>}
      </div>
    </div>
  );
};
export default Container;
