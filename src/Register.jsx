import { Link } from "react-router-dom"
import React, { useState } from "react"
import axios, { Axios } from "axios";



import { useNavigate } from "react-router-dom";


function Register() {

    const history = new useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    



    const [register, setregister] = useState(true)
    const [otppage, setOtppage] = useState(false)


    const handleChange1 = (event) => {
        setEmail(event.target.value);
    };

    const handleChange2 = (event) => {
        setPassword(event.target.value);
    };

    const handleChange3 = (event) => {
        setConfirmPassword(event.target.value)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password == confirmPassword) {
            const jsondata = {
                email: email,
                password: password
            }


            try {
                await axios.post(`https://newplayflix.onrender.com/create`, jsondata);
                document.getElementById("error").innerHTML = ""
                document.getElementById("success").innerHTML = "successfully register"
                setTimeout(() => {

                    history("/")
                }, 700);

            }
            catch {
                // alert("internal server error")


            }

        }
        else {
            document.getElementById("success").innerHTML = ""
            document.getElementById("error").innerHTML = "password doesn't match"


        }

    }

    return (
        <>

            <h2 className="logo-for-login">Play<span>Flix</span></h2>



            <div className="login-all">
                {register && <div>
                    <form onSubmit={handleSubmit} >
                        <h1>sign up</h1>
                        <p id="error" className="error"></p> <p id="success" className="success"></p>

                        <div className="login-box">
                            <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange1} required />

                        </div>

                        <div className="login-box">
                            <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange2} required />
                        </div>
                        <div className="login-box">
                            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleChange3} required />
                        </div>

                        <button>Sign up</button>

                        <div className="login-checkbox">
                            <input type="checkbox" /><p>Remember me</p>
                        </div>

                        <div className="login-signup">
                            <p>Have an acoount? <Link to='/'>Sign In Now.</Link></p>
                        </div>
                    </form >

                </div >}




            </div >









        </>




    )
}


export default Register