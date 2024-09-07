import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export const SendMoney = ({ user, closeModal }) => {
    console.log("user" ,user);
    const [amount,setamount]=useState(0);
    console.log(localStorage.getItem(`token`) );
    
    const send = async () => {
        try {
            const res = await axios.post(
                "http://localhost:3000/api/v1/account/transfer",
                {
                    amount: amount,
                    to: user._id
                },
                {
                    headers: { 
                        authorization: "Bearer " + localStorage.getItem("token") 
                    }
                }
            );
            console.log("res",res);
            
            if (res.status===200) {
                alert("Transfer successful");
                closeModal();
            } else {
                
                alert("Transfer not successful");
            }
        } catch (error) {
            alert("An error occurred during the transfer");
            console.error(error);
        }
    }
    return <div className="flex justify-center h-screen bg-gray-100" >
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{user.firstname.charAt(0)}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{user.firstname}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                                onChange={(e)=>setamount(e.target.value)}
                            />
                        </div>
                        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                            onClick={send}
                        >
                            Initiate Transfer
                        </button>
                        <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                            onClick={closeModal}>
                            cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}