import React, { useState }from 'react'
import './style.css'
import Img1 from './sona.png'


export default function Connexion({Login, error}) {
const [details, setDetails]= useState({name: "", email:"", password: ""});

// fonction login
const submitHandler = e => {

e.preventDefault();
Login(details);

}


return ( 

    
    
    <div className="pagelogin">
       
       <div className='imageune'>
<img src={Img1} alt="" />

       </div>
     
    <div> 
        <label>jkhk</label>
        <form onSubmit={submitHandler}>
            
            <h2> Connexion Sonelgaz Bi & Reporting </h2>
        <div className="form-inner" >

            {(error != "") ? (<div className="error">{error}</div>) : ""}


            <label htmlFor='name' className='n1'> Nom d'utilisateur : </label>
            <input type="text" name="name" id="name"  onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
        </div>

        <div>
            <label htmlFor='' className='n2'> Email : </label>
              <input type='email' name="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>     
        </div>

        <div>
            <label htmlFor='' className='n3'> Mot de passe : </label>
              <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>     
        </div>

        <button type="submit" to="/login" className='btn1'> Connecter </button>
        <button type="submit" to="/signup" className='btn2'> S'inscrire </button>
        <button type="reset" className='btn3'> Réinitialiser </button>
        

        
        </form>
    </div>
    </div>
        )

 


}