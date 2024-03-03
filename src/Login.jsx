import React from "react"
import { Await, Link, useNavigate } from "react-router-dom"


import { useState, useEffect } from "react"
import axios from "axios"



function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, setLogin] = useState(true)
    const [otppage, setOtppage] = useState(false)

    const [enterotp, setenterotp] = useState('')


    const [otp] = useState(Math.floor(100000 + Math.random() * 900000))



    const [home, setHome] = useState(false)

    React.useEffect(() => {
        if (localStorage.getItem("user")) history("/home")

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.get(`https://newplayflix.onrender.com/login/${email}/${password}`);
            //     alert('Login Successful:', response.data);
            if (response.data == "success") {
                // alert("welcome")
                document.getElementById("error").innerHTML = "";
                document.getElementById("success").innerHTML = "Successfully login";
                const jsondata = {
                    to: email,
                    otp: otp
                }
                await axios.post(`https://javamailsender.onrender.com`, jsondata)

                // window.location.href = "/Home"


                setLogin(false)
                setOtppage(true)

            }



        } catch (error) {
            // alert('invalid email or password', error);
            // handle login failure here, such as showing an error message
            document.getElementById("success").innerHTML = "";
            document.getElementById("error").innerHTML = "Invalid email or password.If you don't have an account.create a account first";

        }

    }

    const submitOtp = async (e) => {
        e.preventDefault();
        if (otp == enterotp) {


            try {

                document.getElementById("otperror").innerHTML = ""
                document.getElementById("otpsuccess").innerHTML = "successfully "
                localStorage.setItem("user", email);

                history("/home")

            }
            catch {

            }
        }
        else {
            document.getElementById("otpsuccess").innerHTML = ""
            document.getElementById("otperror").innerHTML = "otp doesn't match"
        }
    }

    const resend = async () => {
        const jsondata = {
            to: email,
            otp: otp
        }
        await axios.post(`https://javamailsender.onrender.com`, jsondata)
        document.getElementById("otperror").innerHTML = ""
        document.getElementById("otpsuccess").innerHTML = "successfully resend"

    }




    return (
        <>
            <h2 className="logo-for-login">Play<span>Flix</span></h2>

            <div className="login-all">
                {login && <div>
                    <form onSubmit={handleSubmit}>
                        <h1>sign In</h1>
                        <p id="error" className="error"></p> <p id="success" className="success"></p>
                        <div className="login-box">
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="login-box">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <button>Sign In</button>
                    </form>

                    <div className="login-forget">
                        <a href="">Forget Password?</a>
                    </div>

                    <div className="login-checkbox">
                        <input type="checkbox" /><p>Remember me</p>
                    </div>

                    <div className="login-signup">
                        <p>New to Playflix? <Link to='/register'>Sign Up Now.</Link></p>
                    </div>

                    <div className="login-policy">
                        <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p>
                    </div>
                </div>}

                {otppage && <div>
                    <form >
                        <h1 style={{ position: "absolute", marginTop: "-180px", marginLeft: "17px" }}>Email verification</h1>
                        <p id="otperror" className="otperror" style={{ position: "absolute" }}></p><p id="otpsuccess" className="otperror" style={{ color: "green", position: "absolute" }}></p>
                        <p className="otp">please enter 6-digit verification code that was send to your email.</p>

                        <div className="login-box" style={{ marginTop: "250px" }}>
                            <input type="text" placeholder="6 digit code" value={enterotp} onChange={(e) => setenterotp(e.target.value)} required />
                        </div>
                        <button onClick={submitOtp} >submit</button>
                        <a onClick={resend} style={{ color: "white", position: "absolute", marginTop: "100px", marginLeft: "-190px", cursor: "pointer" }}>Resend otp</a>
                    </form>
                </div>}



            </div>



        </>
    )
}


export default Login;