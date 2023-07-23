import React, {Component} from 'react'
import {Table} from "react-bootstrap"
import {FaSearch} from "react-icons/fa"
import "./style.css"
export default class UserSearch extends Component{
    constructor(){
        super()
        this.state={
            searchdata:null,
            searchkey:null
        }
    }

    search(key){
        //console.log(key);
        fetch("http://localhost:3000/users?q="+key).then((result)=>{
            result.json().then((res)=>{
                //console.log(res);
                this.setState({searchdata:res})
            })
        })
    }

    render(){
        return(
            <>
            <center>
            <div className='div'>
            <input type='text' name='search' className='input' onChange={(e)=>{this.setState({searchkey:e.target.value})}}/>
            {/* <button onClick={()=>this.search(this.state.searchkey)}>search</button> */}
            <FaSearch onClick={()=>this.search(this.state.searchkey)}/>
            </div>
            </center>
            <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>name</th>
        
          <th>email</th>
        </tr>
      </thead>
      {this.state.searchdata?<tbody>
        {this.state.searchdata.map((item)=>{
            return(
                <tr>
          
          <th>{item.name}</th>
         
          <th>{item.email}</th>
        </tr>
            )
        })}
      </tbody>:<p>no data</p>}
      </Table>
            </>
        )
    }
}  