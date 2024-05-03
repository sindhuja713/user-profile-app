import { useState } from 'react';
import React from 'react';
import "./Profile.css";
import {profileData} from "../../profile-data";



const Profile = () => {
    const [userProfile,setUserProfile] = useState
    (profileData);

  return (
  <section className="profile-sec --flex-center --100vh 
    --bg-primary">
        <div className="container">
            <h2 className="--text-light">User Profile App</h2>
            {userProfile.map((profile) =>{
                const{id,name,job,img} =profile;
            return (
        <div className="profile --card --flex-between --p" key={id}>
                <img 
                src={img}
                alt="Profile image" />
                <div className="desc">
                    <h4 className="--text-light">Name:{profile.name}</h4>
                    <p className="--text-light">Job:{profile.job}</p>
                </div>
                
           </div>
                ) 
       })}
      <button className="--button --btn-danger">Clear All
      </button>
      </div>
    </section>
  );
};

export default Profile;
