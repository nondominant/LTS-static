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
  }

};

export default Form;
