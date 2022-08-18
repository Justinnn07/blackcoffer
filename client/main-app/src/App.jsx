import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  console.log(data);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
