import React, { useState, useEffect } from "react";
import { dataBunch } from "../../dataBunches/dataBunch";
import { PROFILE } from "../../constants";

const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const subscription = dataBunch.subscribe({
            [PROFILE]: setProfile
        });
        return () => subscription.unsubscribe();
    }, []);


    return (
        <div className='profile'>
            <p>{`First Name: ${profile.first_name || "Loading"}`}</p>
            <p>{`Last Name: ${profile.last_name || "Loading"}`}</p>
            <p>{`Age: ${profile.age || "Loading"}`}</p>
            <p>{`Position: ${profile.position || "Loading"}`}</p>
        </div>
    );
};

export default Profile;