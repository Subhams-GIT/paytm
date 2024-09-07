import { useState } from "react"
import "../src/Signup.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
export default function Signin() {
	const navigate = useNavigate();
	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");


	async function handle() {
		try {
			const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
				username: email,
				password
			});
			console.log(res);
			
			const token = localStorage.getItem(`${res.data}`);
			console.log(token);
			
			if (res) {
				navigate("/dashboard", {
					state: { user: res.data.userDet , token:res.data.token}
				});
			}
		} catch (error) {
			console.log(error);

		}

	}

	return (
		<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", boxSizing: "border-box" }}>
			<div className="main" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
				<div className="heading">
					<h1 style={{ fontSize: "50px" }}><b>Sign In</b></h1>
				</div>
				<div className="input">
					<h4><b>Email</b></h4>
					<input type="text" value={email} onChange={e => setemail(e.target.value)} />
				</div>
				<div className="input">
					<h4><b>Password</b></h4>
					<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<div className="input">
					<button onClick={handle}>Sign in</button>
				</div>
				<div>
					<span>Don't have an account ? <button onClick={()=>navigate("/signup")}>Signup</button></span>
				</div>
			</div>
		</div>

	)
}