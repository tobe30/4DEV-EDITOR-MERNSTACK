import Sidebar from "./components/SideBar"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import Signup from "./pages/auth/SignUp";
import Login from "./pages/auth/LoginPage";
import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

function App() {

  const { data:authUser} = useQuery({
    //we use querykey to give a unique name to our query and refer to it later
    queryKey: ['authUser'],
    queryFn: async()=>{
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
				if(data.error) return null;
        if(!res.ok){
					throw new Error(data.error || "Something went wrong")
        }
        console.log("authUser is here:", data)
        return data;
      } catch (error) {
        throw new Error(error)
      }
    },
    retry:false,
    refetchOnWindowFocus: false,
  });
  if (authUser === undefined) return null; // Don't render anything until authUser is defined (either user or null)



  return (
    <div className="app-wrapper" >
      {authUser && <Sidebar/>}
      <Routes>
        <Route path="/login" element={!authUser ? <Login />: <Navigate to="/"/>} />
        <Route path="/signup"  element={!authUser ? <Signup/> : <Navigate to="/"/>} />
        <Route path="/" element={authUser ? <Dashboard /> : <Navigate to="/login"/>} />
      </Routes>
     <Toaster/>

    </div>
  )
}

export default App
