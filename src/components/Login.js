import React from "react";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="login__form" onSubmit={handleLoginSubmit}>
        <label>Username : </label>
        <input
          type="text"
          minLength={5}
          maxLength={20}
          required
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></input>
        <button className="login__buton" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
