import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import {Signup} from "../components/Signup";
import Signin from "../components/Signin"
import { Dashboard } from "../components/dashboard";
import { SendMoney } from "../components/sendMoney";
import { usercontext } from "../context/context";
function App() {

  return (
    
    <BrowserRouter >
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
       <Route path="/signin" element={<Signin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
