import {FormLayout, TextField,Button} from '@shopify/polaris';
import UserDataContext from './UserDataContext'
import React, { useState,useContext } from 'react'
import {Redirect} from "react-router-dom"

export default function Login(){
    const { userData, setUserData } = useContext(UserDataContext)
    const [user,setUser]=useState({
        name:"",
        password:""
    })
    const [login,setLogin]=useState(false)
    const [blurControl, setBlurControl] = useState()

  function handleBlur() {
    if (user.name || user.password) {
      setBlurControl(true)
    }
  }

    function handleChange (e) {
        const { name, value } = e.target;
        
        setUser((prev) => {
          return { ...prev, [name]: value };
        });
        
      };

    const handleLogin=(e)=>{
        e.preventDefault()
        if (user.name && user.password) {
          setLogin(true)
        } else if(user.name || user.password) {
          setBlurControl(true)
        } else {
          setBlurControl(true)
        }
        setUserData({
          username: user.name,
          items: [...userData.items]
        })
    }
    return (<>
    <div className="register__title">Login</div>
    <FormLayout>
    <TextField className="textfield" type="text" 
    label="User name" 
    onChange={e => handleChange({ target: { value: e, name: "name" } })}
    name="name"
    value={user.name}
    onBlur={() => {
      handleBlur()
    }}/>
    <TextField className="textfield"
        type="password"
        label="Password"
        onChange={e => handleChange({ target: { value: e, name: "password" } })}
        name="password"
        value={user.password}
        onBlur={() => {
          handleBlur()
        }}
      />
    <div className='register__btn'><Button onClick={handleLogin}>Login</Button></div>
    {login && <Redirect to="/products"/> }
    </FormLayout>
    {blurControl && (
        <div className='alert'>
          Username or Password is empty
        </div>
      )}
    </>
    )
}