import React, { useState } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import SearchFilter from "./components/SearchFilter";
import Bottom from "./components/Bottom";
import axios from "axios";

const App: React.FC = () => {
  const [location, setLocation] = useState<string>("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=228195f4536344f23f0c1179a256b751`;
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

  console.log(data);

 

  return (
    <div className="font-kanit h-screen w-screen flex justify-center items-center">
      <div className="shadow-lg p-5 rounded-2xl">
        <Header />
        <SearchFilter
          location={location}
          setLocation={setLocation}
          search={handleSearchFilter}
        />
        <Container data={data} />
        <Bottom data={data} />
      </div>
    </div>
  );
};

export default App;
