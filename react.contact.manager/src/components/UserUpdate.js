import React, {Component} from 'react'
import {Form,Button} from "react-bootstrap"
import middle from './middleware'
 class UserUpdate extends Component{
  constructor(){
    super()
    this.state={
      name:null,
      mobile:null,
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/users/"+this.props.params.id).then((result)=>{
      result.json().then((res)=>{
        //console.log(res);
        this.setState({name:res.name,mobile:res.email})
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
        <Form.Label>-Mobile No-:</Form.Label>
        <Form.Control type="number" name="number" placeholder="enter number" value={this.state.email} onChange={(e)=>{this.setState({mobile:e.target.value})}}/>
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