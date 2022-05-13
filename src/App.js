import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Connexion from "./components/connexion/Connexion";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const adminUser = {
    email: "naila@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: ", email:" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //methode de login
  const Login = (details) => {
    console.log(details);

    // condition
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Login");
      navigate("./dashboard", { replace: true });
      setUser({
        email: details.email,
      });
    } else {
      console.log("Les informations sont incorrectes");
      setError(" Remplir les champs pour connecter ! ");
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Connexion Login={Login} error={error} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
export default App;
