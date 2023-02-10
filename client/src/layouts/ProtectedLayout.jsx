import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

export const ProtectedLayout = () => {

    const {auth, loading} = useAuth()
        if(loading){
            return(
                <p>cargando...</p>
            )
        } 
    
  return (
    <>
    {
        auth._id ? (
            <div>
                <Sidebar/>
                <main>
                <Outlet />
                </main>
            </div>
        ):
        <Navigate to="/" />
    }

    </>
  );
};