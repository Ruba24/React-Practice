import React from "react";
import "./app.css";
function App() {
  return (
    <>
      <div>
        <h1>Login</h1> <br />
        <label htmlFor="email">Email </label>
        <input type="email" id="email" /> <br /> <br />
        <label htmlFor="password" id="pswrd">Password </label>
        <input type="password" id="pswrd" /> <br /> <br />
        <button>Login</button>
      </div>
    </>

  )
}
export default App;