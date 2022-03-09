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
      let current = this.state;
      axios({
        method: 'post',
        url:'http://127.0.0.1:3002/send',
        data: {current} 
      }).then((response)=>{
        if (response.data.status === 'success') {
          console.log("success");
          this.resetForm()
        } else if(response.data.status === 'fail') {
          console.log("fail");
          this.resetForm()
        }
      }).catch((err)=>{
        console.log(err);
      });
      this.resetForm()
      console.log("axios request non-blocking");

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
      <div className={style.form}>
        <form id="contact-form" name='onSubmit={this.handleSubmit.bind(this)} method="POST"'>
          <div className={style.fieldgroup}>
              <label className={style.label}htmlFor="name">Name</label>
              <input 
                className={style.inputfield}
                type="text" 
                name="name" 
                className="form-control" 
                value={this.state.name}
                onChange={this.handleInputChange}
              />
          </div>
          <div className={style.fieldgroup}>
              <label className={style.label}htmlFor="exampleInputEmail1">Email address</label>
              <input 
                className={style.inputfield}
                type="email" 
                name="email" 
                className="form-control" 
                aria-describedby="emailHelp" 
                value={this.state.email}
                onChange={this.handleInputChange}
              />
          </div>
          <div className={style.fieldgroup}>
              <label className={style.label}htmlFor="message">Message</label>
              <textarea 
                className={style.inputfield}
                name="message" 
                className="form-control" 
                rows="5"
                value={this.state.message}
                onChange={this.handleInputChange}
              >
              </textarea>
          </div>
          <button className={style.button} type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </form>
      </div>
    );
  }

};

export default Form;

