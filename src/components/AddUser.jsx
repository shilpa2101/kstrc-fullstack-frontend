import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddUser = () => {
   
        const [data, changeData] = useState({
            "name":"",
            "email":"",
            "phoneNo":"",
            "gender":"",
            "password":"",
            "confirmpassword":""
        
            
        })
        const inputHandler = (event) => {
            changeData({ ...data, [event.target.name]: event.target.value })
    
        }
        
        
const readValue = () => {

    console.log(data)
    if(data.password==data.confirmpassword)
        {
    axios.post("http://localhost:8080/reg", data).then(
        (response) => {
            console.log(response.data)
            if (response.data.status == "success") {
                alert("successfully added")
            }
            else {
                alert("failed")
            }
            
        }
    )
}
else{
    alert("check password")
}
}

  return (
    <div>
        <h1 align="center"><u>REGISTRATION</u></h1><br></br>
            <div className="container">
          

                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                                </div>
                                
                                
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Email</label>
                                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">phone no</label>
                                    <input type="text" className="form-control" name='phoneNo' value={data.phoneNo} onChange={inputHandler} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">gender</label>
                                    <select name="gender" value={data.gender} onChange={inputHandler} id="" className="form-control">
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="others">others</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control" />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">confirm password</label>
                                    <input type="password" name="confirmpassword" value={data.confirmpassword} onChange={inputHandler} id="" className="form-control" />
                                </div>
                                
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>Register</button>
                                    <p> back to Login <Link to="/">Login</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddUser
