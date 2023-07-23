import React from "react"
import {useParams} from "react-router-dom"
const middle=WrapperComponents=>props=>{
       const params    =useParams()
       return(
        <WrapperComponents
        {...props}
        params={params}
        />
       )
}
export default middle