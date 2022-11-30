import React, { Component } from 'react';
import ContainerStyle from "./Container.module.css";
import Details from '../Details/Details';
import Questions from '../Questions/Questions';
import { app, firestore } from '../../src/Firebase/Config';
import { v4 as uuidv4 } from 'uuid';

 class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     id:uuidv4(),
       name:null,
       email:null,
     questions:{
      q1:null,
      others:null,
      q2:null,
      coursea:null,
      review:null,
      
      
     }
    }
  }
  onSubmitHandler =(event)=>{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    this.setState({name,email});
  } 
  onQuestionHandler = (event)=>{
   event.preventDefault();
   const questions = {};
   questions.q1 =  event.target.job.value;
   questions.others = event.target.other.value;
   questions.q2 = event.target.course.value;
   questions.coursea = event.target.coursea.value;
   questions.review = event.target.review.value;
   this.setState({questions});
   const database = firestore.database();
   database.ref("survey/" + this.state.id).set({
  name:this.state.name,
  email:this.state.email,
  questions:this.state.questions,
   });

  };
  render() {
    return (
      <>
      <div className={ContainerStyle.container}>
        <h1 className={ContainerStyle.heading}>AntiBug Group Survey</h1>
        </div>
        {this.state.name === null && this.state.email===null ?  <Details submit = {this.onSubmitHandler}></Details>
        : <Questions submit = {this.onQuestionHandler}></Questions>
       }
      
     
    
      </>
    )
  }
}

export default Container
