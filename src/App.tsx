import React, { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import SearchFilter from "./components/SearchFilter";
import Bottom from "./components/Bottom";
import axios from "axios";
import CountryName from "./components/CountryName";

const App: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
    import.meta.env.VITE_API_KEY
  }`;
  const [data, setData] = useState<any>({});

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.log("Error fetchind data", error);
    }

    setLocation("");
  };

  const handleSearchFilter = () => {
    fetchData();
  };

  // h-24 w-24 -left-4 -top-4 absolute  bg-yellow-300 rounded-full shadow-2xl shadow-yellow-400 border-4 border-yellow-300
  const weatherCondition = data.weather?.[0]?.main;
  let styleCondition =
    "h-24 w-24 -left-4 -top-4 absolute  bg-yellow-300 rounded-full shadow-2xl shadow-yellow-400 border-4 border-yellow-300";
  let styledBackground =
    "from-blue-400 bg-gradient-to-t to-amber-200 via-sky-200";
  if (weatherCondition?.toLowerCase()) {
    switch (weatherCondition) {
      case "Clouds":
        styleCondition =
          "h-24 w-24 -left-4 -top-4 absolute  bg-transparent shadow-xl rounded-full";
        styledBackground = "bg-gradient-to-t from-blue-300 to-sky-100";

        break;
      case "Rain":
        styleCondition =
          "h-24 w-24 -left-4 -top-4 absolute  bg-transparent shadow-md rounded-full";
        styledBackground = "bg-gradient-to-t to-gray-300 from-blue-200";
        break;
      case "Thunderstorm":
        styleCondition = "";
        styledBackground =
          "from-blue-400 bg-gradient-to-t to-amber-200 via-sky-200";
        break;
      default:
        styleCondition =
          "h-24 w-24 -left-4 -top-4 absolute  bg-yellow-300 rounded-full shadow-2xl shadow-yellow-400 border-4 border-yellow-300";
        styledBackground = "";
        break;
    }
  }

  return (
    <div className="font-kanit h-screen w-screen flex justify-center items-center">
      <div
        className={`${styledBackground} overflow-auto relative shadow-lg p-5 rounded-2xl flex flex-col justify-between h-[500px] w-[400px]`}
      >
        <div className={`${styleCondition}`}></div>
        <Header />

        <SearchFilter
          location={location}
          setLocation={setLocation}
          search={handleSearchFilter}
        />
        <CountryName data={data} />
        <Container data={data} />
        <Bottom data={data} />
      </div>
    </div>
  );
};

export default App;
