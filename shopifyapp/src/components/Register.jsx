import {FormLayout, TextField,Button} from '@shopify/polaris';
import React, { useState,useContext } from 'react'
import {Redirect} from "react-router-dom"
import UserDataContext from './UserDataContext'

export default function Register (){
  const { userData, setUserData } = useContext(UserDataContext)
    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        phone:""
    })
    const [register,setRegister]=useState(false)
    const [login,setLogin]=useState(false)

    function handleChange (e) {
        const { name, value } = e.target;
        
        setUser((prev) => {
          return { ...prev, [name]: value };
        });
        
      };

    const handleRegister=(e)=>{
        e.preventDefault()
        if (user.name && user.password && user.phone && user.email) {
          setRegister(true)
        }
        setUserData({
          username: user.name,
          items: [...userData.items]
        })
    }
    const toLogin=()=>{
      setLogin(true)
    }
  
  return (<>
  <div className="register__title">Register</div>
    <FormLayout>
      <TextField className="textfield" type="text" 
      label="User name" 
      onChange={e => handleChange({ target: { value: e, name: "name" } })}
      name="name"
      value={user.name}/>
      <TextField className="textfield"
        type="email"
        label="Email"
        name="email"
        value={user.email}
        onChange={e => handleChange({ target: { value: e, name: "email" } })}
      />
      <TextField className="textfield"
        type="password"
        label="Password"
        onChange={e => handleChange({ target: { value: e, name: "password" } })}
        name="password"
        value={user.password}
      />
      <TextField className="textfield"
        type="phone number"
        label="Phone number"
        onChange={e => handleChange({ target: { value: e, name: "phone" } })}
        name= "phone"
        value={user.phone}
      />
    </FormLayout>
    <p className='register__info' onClick={toLogin}>*Do you have an account?</p>
    {login && <Redirect to="/login"/> }
    <div className='register__btn'><Button onClick={handleRegister}>Register</Button></div>
      {register && <Redirect to="/login"/> }
  </>   
)}
  