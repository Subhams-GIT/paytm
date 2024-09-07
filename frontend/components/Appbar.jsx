import {Heading} from "./heading"
import '../src/Appbar.css'
import { AiOutlineUser } from "react-icons/ai";
export const Appbar = ({userdetails}) => {

 console.log("appbar ",userdetails);
 
    return <div className=" main " >
        <div style={{padding:10}}>
            <h1  className="font-4xl"><b>Paytm App</b></h1>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginRight:100}}>
            <div>
                <b>Hello,</b>
            </div >
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:20}} >
                   {userdetails.firstname} <AiOutlineUser/>
                </div>
            </div>
           
        </div>
}

