import React, {Component} from 'react'
import {Form,Button} from "react-bootstrap"
export default class UserCreate extends Component{
  constructor(){
    super()
    this.state={
      name:null,
      age:null,
      city:null,
      email:null
    }
  }
  submit=()=>{
    fetch("http://localhost:3000/users",{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
     window.location.href="/"
      })
    })
  }


    render(){
      //console.log(this.state.name+this.state.age);
        return(
           <>
           <Form>
           <Form.Group className="mb-3">
        <Form.Label>-Name-:</Form.Label>
        <Form.Control type="text" name="name" placeholder="enter name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>-Email-:</Form.Label>
        <Form.Control type="email" name="email" placeholder="enter email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={this.submit}>
        Submit
      </Button>
    </Form>
           </>
        )
    }
} 