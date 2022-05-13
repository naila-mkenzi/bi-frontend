import React from 'react';

import './style.css';



export default  function inscription (){

return (

  <div className="contenu">
  <form>

      <h1> S'inscrire a BI & Reporting Sonelgaz  </h1>

      <div>
        <label> Nom d'utilisateur : </label>
        <input type="text" name="nomutilisateur" placeholder ="Entrer le nom d'utilisateur"></input>
        </div>


        <div>
        <label> Email :  </label>
        <input type="email" name="email" placeholder ="Entrer votre email "></input>
        </div>


        <div>
        <label> Rolle :   </label>
        <input type="text" name="rolle" placeholder ="Entrer votre Rolle "></input>
        </div>

        <div>
        <label> Mot de passe   </label>
        <input type="password" name="motdepasse" placeholder ="Entrer votre mot de passe  "></input>
        </div>


    <button> S'inscrire</button>

    </form>

</div>






)



}

