import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../src/Signup.css";
import { useState, useEffect } from 'react';

export function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Component re-rendered");
    });

    const handleSignup = async (event) => {
        event.preventDefault(); 
        
        if (!(firstName && lastName && username && password)) return;

        try {
            const result = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstname: firstName,
                lastname: lastName,
                password
            });

            console.log(result);
            localStorage.setItem(`token`, result.data.token);
            navigate('/signin');  
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="main">
                <form onSubmit={handleSignup}>
                    <div className="heading">
                        <h1 style={{ fontSize: "50px" }}><b>Sign Up</b></h1>
                        <h4>Enter Your Information to create an account</h4>
                    </div>
                    <div className="input">
                        <h4><b>First Name</b></h4>
                        <input type="text" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                    <div className="input">
                        <h4><b>Last Name</b></h4>
                        <input type="text" value={lastName} onChange={handleLastNameChange} />
                    </div>
                    <div className="input">
                        <h4><b>Email</b></h4>
                        <input type="email" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="input">
                        <h4><b>Password</b></h4>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="input">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <div>
                    <span>Already have an account? 
                        <button onClick={() => navigate('/signin')}>Login</button>
                    </span>
                </div>
            </div>
        </div>
    );
}
