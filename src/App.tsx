import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./components/01_RequiredoPtionalProps";
import DefPar, { DefPar2 } from "./components/02_Default_Params";
import ChildNodes, {
  RequiredChildNodes,
} from "./components/03_ChildrenReactNode";
import Badge from "./components/04_AsConstant";
import Button from "./components/05_ComponetsExample";
import State from "./components/06_State";
import Events from "./components/07_Events";
import UseReducer from "./components/08_UseReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserCard id="Test" subTitle="Testing" />
      <DefPar name="Reddy" />
      <DefPar2 name="Bujala" />
      <ChildNodes
        name="Manvith"
        children={
          <ul>
            <li>Reddy</li>
            <li>Bujala</li>
          </ul>
        }
      />
      <RequiredChildNodes name="Manvith">
        Testing child nodes
      </RequiredChildNodes>
      <Badge label="Testing" variant="secondary" />
      <br />
      <Button variant="primary" onClick={() => alert("Clicked")}>
        Click
      </Button>
      <State />
      <Events />
      <UseReducer />
    </>
  );
}

export default App;
