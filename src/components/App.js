
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

export default function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>

      <hr />

      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
}
