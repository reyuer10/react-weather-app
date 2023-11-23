import React from "react";
interface CountryNameProps {
  data: any;
}
const CountryName: React.FC<CountryNameProps> = ({ data }) => {
  return (
    <div>
      <p className="text-2xl text-gray-500 text-center">{data.name}</p>
    </div>
  );
};

export default CountryName;
