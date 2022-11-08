import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  //State to get the data fron the baackend
  const [data, setData] = useState();
  //State to notify when data is reiceved
  const [isLoading, setIsLoading] = useState(true);

  //UseEffect required to fetch the data when the component is mount
  useEffect(() => {
    const fetchData = async () => {
      //request to get the data from the backend
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--nfqr62d7mh6n.code.run/"
        ); //Store data in the state data
        setData(response.data);
        //Change bool isLoading to specify that data is received
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Waiting for data from server</p>
  ) : (
    <div className="App">
      <div>
        <Header data={data} />
      </div>
      <div>
        <Content data={data} />
      </div>
    </div>
  );
}

export default App;
