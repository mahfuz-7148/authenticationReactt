import React, {use} from 'react';
import {AuthContext} from "../Contexts/AuthContext.jsx";

const Profile = () => {

    const {user} = use(AuthContext)
    return (
        <div className='max-w-lg mx-auto'>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;