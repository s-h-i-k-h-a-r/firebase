import React from "react";
import  './Questions1.css';
export default function Questions(props) {
   
  return (
 <div className="container-fluid">
    <div className="col-mod-5 ">
        <div className="mt-3">
            <div className="card text-left">
                <div className="card-body">
                    <form onSubmit = {props.submit}>
                        <div className="form-group">
                            <label  className = "questionlabel"htmlFor = ""><b>3.</b>what are you currently doing?</label><br/>
                            
                            <input className="radio"   type="radio" id="" name = "job" autoComplete="off" value = "teacher" />
                            <label className="answer" htmlFor="Student">Teacher</label>
                            
                            
                            <input className="radio"  type="radio" id="" name = "job" autoComplete="off" value="Student"/>
                            <label className="answer" htmlFor="Student">Student</label>
                           
                           
                            <input className="radio"  type="radio" id="" name = "job" autoComplete="off" value="Programmer"/>
                            <label className="answer" htmlFor="Student">Programmer</label>
                            
                            <input className="radio"  type="radio" id="" name = "job" autoComplete="off" value="others"/>
                            <label className="answer" htmlFor="Student">Other</label>
                           
                            <br/>
                            <input type = "text"  className = "text"id = "" name = "other" placeholder="Type here if not listed"/>
                            <hr/>
                        </div>

                        <div className="form-group">
                            <label className="questionlabel" htmlFor = ""><b>4.</b>Do you want any paid course from us?</label><br/>
                            
                            <input className="radio"   type="radio" id="" name = "course" value = "Yes"/>
                            <label className="answer" htmlFor="">Yes</label>
                            <input className="radio"  type="radio" id="" name = "course" autoComplete="off" value = "No"/>
                            <label className="answer" htmlFor="">No</label>
                            <label className="answer" htmlFor="">(if yes,Write the course below)</label>
                            <br/>
                            <input type = "text"  className = "text"id = "" name = "coursea" placeholder="Write your course here" />
                            <hr/>
                            </div>
                            
                            <div className="form-group">
                            <label className="questionlabell" htmlFor = ""><b>5.</b>Write Your Review Here?</label><br/>
                            <textarea placeholder="write something....." name = "review"/>
                            <hr/>
                            </div>
                     <div className="button">
                        <button type = "submit" className="clickk" name = "button">Submit</button>
                     </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 </div>
   

   
  );
}
