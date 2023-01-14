import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import Shop from "./Shop";
import StateLogin from "./StateLogin";

const App: React.FC = () => {

  const [isLogined, setIsLogined] = useState<StateLogin["isLogined"]>()

  const handleIsLogined = () => {
    setIsLogined(!isLogined)
  }

  return (
    <>
      <div className="ui-container">
        {
          !isLogined ?
            <>
              <h2 className="ui-title">Нужно залогиниться!</h2>
              <button className="ui-button" onClick={handleIsLogined}>Войти</button>
            </> :
            <>
              <button className="ui-button" onClick={handleIsLogined}>Выйти</button>
              <Shop />
            </>
        }
      </div>
    </>
  )
}

render(<App />, document.querySelector("#root"));