import { useState } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import { UserData } from "./Data";
import PieChart from "./components/PieChart";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Trophies Won",
        data: UserData.map((data) => data.Trophies),
        backgroundColor: UserData.map((data) =>
          data.color ? data.color : "#111111"
        ),
        borderColor: "black",
        borderWidth: 4,
      },
    ],
  });
  return (
    <div className="App">
      <div className="title">IPL Teams And the Trophies Won</div>
      <div style={{ width: 700 }} className="left-div">
        <BarChart chartData={userData} />
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 600 }} className="right-div">
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
