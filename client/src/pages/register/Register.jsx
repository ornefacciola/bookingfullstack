import React from "react";
import "./register.css"
import {useState} from "react"; 
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');


    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleUserame = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    
    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleCountry = (e) => {
        setCountry(e.target.value)
        setSubmitted(false);
    }

    const handleCity = (e) => {
        setCity(e.target.value);
        setSubmitted(false);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value)
        setSubmitted(false);
    }
    

    const handleClick = async e => {
        e.preventDefault()
        try{
            const newUser = {
              username,email,password,country,city,phone
            };
      
            await axios.post("/auth/register", newUser)
            setSubmitted(true)
            alert("User created!🎉");
            window.location.assign("/login")

          }catch(err){
            console.log(err)
            alert("Error, please fill each field");
          }
        };


    return (
        <>
        <body className="regBody">
            <div className="register">
                <h1 className="reTitle">Register</h1>
                <div className="inputs">
                    <input onChange={handleUserame} className="rInput" type="text" id="username" placeholder="First Name"/>
                    <input onChange={handleEmail} type="email" id="email" className="rInput" placeholder="Email"/>
                    <input onChange={handlePassword} className="rInput" type="password"  id="password" placeholder="Password"/>
                    <input onChange={handleCountry} className="rInput" type="text"  id="country" placeholder="Country"/>
                    <input onChange={handleCity} className="rInput" type="text"  id="city" placeholder="City"/>               
                    <input onChange={handlePhone} className="rInput" type="text"  id="phone" placeholder="+1 234 567 89"/>
                </div>
                <div class="footer">
                    <button onClick={handleClick} type="submit" className="btn">Go!</button>
                </div>
            </div>      
        </body>
        </>
  )       
}

export default Register