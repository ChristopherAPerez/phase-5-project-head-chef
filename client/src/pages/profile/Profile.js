import React, { useState, useEffect } from "react";

import EditProfile from './EditProfile';
import ProfileTable from './ProfileTable';

import { useNavigate } from "react-router-dom"

function Profile() {
    const navigate = useNavigate()

    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    function handleMainMenu() {
        navigate("/")
    }

    return (
        <>
            <br></br>
            <button className="button" onClick={handleMainMenu}>Main Menu</button>
            <br></br>
            <br></br>
            {isEditing ? (
                <>
                    <EditProfile isEditing={isEditing} setIsEditing={setIsEditing} />
                </>
            ) : (
                <>
                    <ProfileTable isEditing={isEditing} setIsEditing={setIsEditing} />
                </>
            )}
        </>
    );
}

export default Profile;