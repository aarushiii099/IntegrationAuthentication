import axios from "axios"
import {useEffect,useState} from "react"
import {useParams,useNavigate, Navigate} from "react-router-dom"

const UpdatePassword=()=>{
    const [updatedPassword,setPassword]=useState("")
    const [message,setMessage]=useState("")
    const navigate=useNavigate()
    const [flag,setFlag]=useState(true)
    const handleChange=(e)=>{
        setPassword(e.target.value)

    }
    const updatePassword=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/updatepassword",{"upassword":updatedPassword},{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")              
            }
        }).then((res)=>{setMessage(res.data.msg) 
        setFlag(res.data.status)}).catch((err)=>console.log(err))

    }
    return(
        <div>
            <h1>Update Password</h1>
            Enter your new password:<input type="text" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>updatePassword(e)}></button>
            {
                flag?<h1>{message}</h1>:navigate("/")
            }
        </div>

    )
}
export default UpdatePassword