import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userName, setUsername] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    console.log(response);
    setUsername(response.data);
  };

  return (
    <>
      <h1>My Api Name call</h1>;<h3>My name is {userName}</h3>
    </>
  );
}

export default App;
