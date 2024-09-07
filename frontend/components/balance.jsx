import { useEffect, useState } from "react"
import axios from "axios"
export const Balance = ({balance}) => {
    


    const style = {
        main: {
            display: "flex",
            flexdirection: "row",
            justifyContent: "spaceEvenly",
            fontSize: 20,
            margin: 20
        }
    }
    return <div className="flex" style={style.main}>
        <div className="font-bold text-lg" style={{ marginLeft: 20, marginRight: 20 }}>
            <h2><b>Your Balance</b></h2>
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance || 10000}
        </div>
    </div>
}

