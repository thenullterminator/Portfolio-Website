import React, { useState } from "react";
import InfinityGauntlet from "react-thanos-snap";
import Card from "./Card";
import "./style.scss";


function App() {
  const [snap, setSnap] = useState(false);

  return (
    <div id="app">
      <div className="wrapper">
        <InfinityGauntlet snap={snap}>
          <Card />
        </InfinityGauntlet>
      </div>
      <div className="snapButton">
        <button onClick={() => setSnap(!snap)}>
        snap!!
        </button>
      </div>
    </div>
  );
}

export default App;
