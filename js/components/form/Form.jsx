import React from 'react';
import style from './form.module.css';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleSubmit(e) {
      e.preventDefault();
      console.log('handling button press');
      console.log(`current values ${this.state.name}, ${this.state.email}, ${this.state.message}`);
      axios({
        method: "POST",
        url:"http://localhost:3002/contact",
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success') {
          console.log("success");
          this.resetForm()
        } else if(response.data.status === 'fail') {
          console.log("fail");
        }
      }).catch((err)=>{
        console.log(err);
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  resetForm() {
    this.setState({name: '', email: '', message: ''});
  }

  check(){
    console.log("check");
  }


  render() {
    return (
      <div></div>);
    /**
      <div className={style.form}>
        <div className={style.form_wrapper}>
        <form id="contact-form" name='onSubmit={this.handleSubmit.bind(this)} method="POST"'>
          <div className={style.fieldgroup}>
              <div id={style.div}>Name</div>
              <div className={style.input}>
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              </div>
          </div>
          <div className={style.fieldgroup}>
              <div id={style.label}>Email</div>
              <div className={style.input}>
              <input 
                type="email" 
                name="email" 
                className="form-control" 
                aria-describedby="emailHelp" 
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              </div>
          </div>
          <div className={style.fieldgroup}>
              <div id={style.div} htmlFor="message">Message</div>
              <div className={style.input}>
              <textarea 
                name="message" 
                className="form-control" 
                rows="5"
                value={this.state.message}
                onChange={this.handleInputChange}
              >
              </textarea>
              </div>
          </div>
          <button className={style.button} type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
        </div>
      </div>






<section id="contact">
  
  <h1 class="section-header">Contact</h1>
  
  <div class="contact-wrapper">
  
  <!-- Left contact page --> 
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
    
      

      </div>
  
</section>  
  

 













    );
**/
  }

};

export default Form;
