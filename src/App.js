import React, {useState} from "react";
import "./App.css";
import WorldLoveMap from "./components/WorldLoveMap";
import IntroLetter  from "./components/IntroLetter";

function App() {
    const [introDone, setIntroDone]= useState(false)
  return (
      <div className="app-root">
          {!introDone && <IntroLetter onFinish={() => setIntroDone(true)} />}
          {introDone && <WorldLoveMap />}

      </div>
  );
}

export default App;