import { useLocation } from "react-router-dom"
import { Appbar } from "./Appbar"
import { Balance } from "./balance"
import { Users } from "./users"
import { useState,useEffect } from "react"
import axios from "axios"
export const Dashboard = () => {
    const [balance, setbalance] = useState(0)
    useEffect(() => {
        async function getbalance() {
            const balance = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: { authorization: "Bearer " + localStorage.getItem('token') }
            })
            console.log(balance);
            setbalance(balance.data.balance)
        }
        getbalance();
    })
    const location=useLocation();
    const res=location.state || {}
    
    
    return <div>
       
            <Appbar userdetails={res.user}/>
        <div className="m-8">
            <Balance balance={balance}/>
            <Users user={res}/>
        </div>
      
    </div>
}