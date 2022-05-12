

import React, { useState } from 'react';
import Connexion from "./connexion";





function App() {

const adminUser = {

email: "naila@admin.com",
password: "admin123"
}

const [user, setUser] = useState({name:", email:"});
const [error, setError] =useState ("");
 
//methode de login
const Login = details => {
  console.log(details);

// condition
if (details.email == adminUser.email && details.password == adminUser.password){
console.log("Login"); 
setUser({
name: details.name,
email: details.email
});
} 
else {
console.log("Les informations sont incorrectes");
setError(" Remplir les champs pour connecter ! ");
                          
}
}

return (
    <div className="App">
     
    
       <Connexion Login={Login} error={error}/> 
    </div>
  );
}


export default App;
