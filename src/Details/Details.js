import React from 'react'
import DetailsStyle from "./Details.module.css";

export default function Details(props) {
  return (
   <>
        <form onSubmit = {props.submit}>
          <div className={DetailsStyle.container}>
        <div className={DetailsStyle.form}>
            <label htmlFor = "usernamae">1.Name</label><br/>
            <input type = "text" name = "username" placeholder="your name"/>
        </div>
        <div className={DetailsStyle.form}>
            <label htmlFor = "email">2.Email</label><br/>
            <input type = "email" name = "email" placeholder="your email"/>
        </div>

     <div className = {DetailsStyle.button}>
        <button className = 'click' type='submit' name='submit'>Next</button>
     </div>
     </div>
        </form>
       
           
        
        </>
  )
}
/*<ul>
<li className={DetailsStyle.lista1} active>1</li>
<li className={DetailsStyle.lista1}>2</li>
</ul>*/