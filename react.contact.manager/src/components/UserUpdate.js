import React, {Component} from 'react'
import {Form,Button} from "react-bootstrap"
import middle from './middleware'
 class UserUpdate extends Component{
  constructor(){
    super()
    this.state={
      name:null,
      age:null,
      city:null,
      email:null,
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/users/"+this.props.params.id).then((result)=>{
      result.json().then((res)=>{
        //console.log(res);
        this.setState({name:res.name,age:res.age,city:res.city,email:res.email})
      })
    })
  }

  update(){
    fetch("http://localhost:3000/users/"+this.props.params.id,{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((res)=>{
        window.location.href="/"
      })
    })
  }

    render(){
      //console.log(this.props.params.id);
        return(
            <>
             <Form>
           <Form.Group className="mb-3">
        <Form.Label>-Name-:</Form.Label>
        <Form.Control type="text" name="name" placeholder="enter name" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>-Age-:</Form.Label>
        <Form.Control type="number" name="age" placeholder="enter age" value={this.state.age} onChange={(e)=>{this.setState({age:e.target.value})}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>-City-:</Form.Label>
        <Form.Control type="text" name="city" placeholder="Enter city" value={this.state.city} onChange={(e)=>{this.setState({city:e.target.value})}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>-Email-:</Form.Label>
        <Form.Control type="email" name="email" placeholder="enter email" value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>{this.update()}}>
        Submit
      </Button>
    </Form>
            </>
        )
    }
}  
export default middle(UserUpdate)