import React, { useState } from "react";

import "./style.css";
import Img1 from "./sona.png";

export default function Connexion({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  // fonction login
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <>
      <div className="pagelogin">
        <div className="imageune">
          <img src={Img1} alt="" />
        </div>

        <div>
          <form onSubmit={submitHandler}>
            <h2> Connexion Sonelgaz Bi & Reporting </h2>
            <div className="form-inner">
              {error !== "" ? <div className="error">{error}</div> : ""}
            </div>

            <div>
              <label htmlFor="userName" className="n1">
                Nom d'utilisateur :
              </label>
              <input
                className="connection-input"
                type="userName"
                name="userName"
                id="userName"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div>
              <label htmlFor="password" className="n2">
                Mot de passe :
              </label>
              <input
                className="connection-input"
                type="password"
                name="password"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <button type="submit" to="/login" className="btn1">
              Connecter
            </button>

            <button
              type="reset"
              className="btn3"
              onClick={() => {
                setDetails({
                  email: "",
                  password: "",
                });
              }}
            >
              Réinitialiser
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
