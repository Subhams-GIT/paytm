import { useEffect, useState } from "react";
import { Button } from "./btn";
import axios from 'axios';
import { SendMoney } from "./sendMoney";
import { useNavigate, useParams } from "react-router-dom";
import "../src/user.css"
export const Users = ({ user }) => {
    const [users, setUsers] = useState([]);
    const [filter, setfilter] = useState(" ");
    const jwt = localStorage.getItem(`${user.user.firstname}`);
 

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
            headers: { authorization: "Bearer " + user.token }
        }).then((res) => {

            setUsers(res.data.users);

        }).catch(error => {
            console.error("Error fetching users:", error);
        });
    }, [filter]);

    if (!users) {
        return (
            <div>
                no users found
            </div>
        )
    }
    return (
        <>
            <div style={{ margin: 40 }}>
                <h2><b>Users</b></h2>
            </div>
            <div className="my-2">
                <input type="text" onChange={e => setfilter(e.target.value)} placeholder="Search users..." style={{ width: "90vw", height: 50, marginLeft: 20, marginRight: 20 }} />
            </div>
            <div>
                {users.map(user => <User key={user._id} user={user} />)}
            </div>
        </>
    );
}

function User({ user }) {
    const navigate=useNavigate();
    const [modal, setM] = useState(false);
    function setmodal() {
        console.log(" in modal");
        setM(true);
    }
    
        return (
            <>
             <div className="flex justify-between">
                <div className="flex">
                    <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                        <div className="flex flex-col justify-center h-full text-xl">
                            {user.firstname.charAt(0)}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center h-full">
                        <div>
                            {user.firstname} {user.lastname}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <Button label={"Send Money"} onClick={setmodal} />
                </div>

            </div>
            {modal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <SendMoney user={user} closeModal={() => setM(false)} />
                    </div>
                </div>
            )}
            </>
           
        );
    }

