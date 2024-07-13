import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logouts', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            if(res.status!==200) {
                window.alert("Logout failed!");
            }
            else
            {
                window.alert("You are logged out successfully");
                navigate('/');
            }
        }).catch((err) => {
            console.log(err);
        });
    });

  return (
    <>

    </>
  )
}

export default Logout
