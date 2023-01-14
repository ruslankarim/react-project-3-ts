import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";

function App() {
  return (
    <>
      <div className="ui-container">
        <h2 className="ui-title">Нужно залогиниться!</h2>
        <button className="ui-button">Войти</button>
        <button className="ui-button">Выйти</button>
      </div>
    </>
  );
}

render(<App />, document.querySelector("#root"));
