import React, {Component} from 'react'
import {Table} from "react-bootstrap"
import{AiFillEdit,AiFillDelete} from "react-icons/ai"
import {Link} from "react-router-dom"
import {AiOutlineUser} from "react-icons/ai"
export default class UserRead extends Component{
constructor(){
    super()
    this.state={
        list:null
    }
}


componentDidMount(){
   this.getdata()
}
getdata(){
    fetch("http://localhost:3000/users").then((result)=>{
        //console.log(result.json());
        result.json().then((res)=>{
        // console.log(res);
        this.setState({list:res})
        })
         })
}

delete(id)
{
    //console.log(id);
    fetch("http://localhost:3000/users/"+id,{
        method:"DELETE"
    }).then((result)=>{
        result.json().then((res)=>{
            this.getdata()
        })
    })
}


    render(){
        return(
            <>
             <Table striped bordered hover>
      <thead>
        <tr>
          <th><h2>Contact List</h2></th>
          <th><button type="button" class="btn btn-primary color-white"><Link to="/create" className='data4'>Add Contact</Link></button></th>
        </tr>
      </thead>
      {this.state.list?<tbody>
        {this.state.list.map((item)=>{
            return(
                <tr>
                    <td>{item.name}<br/>{item.email}</td>
                    <td>
                        <Link to={'update/'+item.id}>
                        <AiFillEdit className='gap'/>
                        </Link>
                        <Link to="/" onClick={()=>this.delete(item.id)}>
                        <AiFillDelete className='gap'/>
                        </Link>
                    </td>
                </tr>
            )
        })}
      </tbody>:<p>no data</p>}
    </Table>

            </>
        )
    }
}  