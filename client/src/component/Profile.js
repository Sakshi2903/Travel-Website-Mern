import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {userContext} from "../App";

const Profile = () => {
  
  const {state, dispatch} = useContext(userContext);
  dispatch({type:"USER", payload:true})

  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callProfilePage = async () => {
    try {
      const res = await fetch("/profiles", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callProfilePage();
  }, []);

  return (
    <>
      <div class="container emp-profile">
        <form method="GET">
              <div class="profile-head">
                <h5>{userData.name}</h5>
                <h6>Web Developer and Designer</h6>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content profile-tab" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Name</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Email</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Work</label>
                    </div>
                    <div class="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
              </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
